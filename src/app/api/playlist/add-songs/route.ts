import { NextResponse } from "next/server";
import axios from "axios";
import { cookies } from "next/headers";
import { refreshAccessToken } from "@/lib/utils";

const addSongsToPlaylist = async (
  token: string,
  playlist_id: {
    id: string;
  },
  songs: string[]
) => {
  await axios.post(
    `https://api.spotify.com/v1/playlists/${playlist_id.id}/tracks`,
    {
      uris: songs,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
};

export async function POST(req: Request) {
  const { playlist_id, songs } = await req.json();
  if (!playlist_id || !songs) {
    return NextResponse.json(
      {
        error: "playlist_id_or_songs_not_found",
      },
      {
        status: 401,
      }
    );
  }
  const cookieStore = await cookies();
  const access_token = cookieStore.get("spotify_access_token")?.value;
  const refresh_token = cookieStore.get("spotify_refresh_token")?.value;

  if (!access_token) {
    return NextResponse.json(
      {
        error: "access_token_not_found",
      },
      {
        status: 401,
      }
    );
  }

  try {
    await addSongsToPlaylist(access_token, playlist_id, songs);
    return NextResponse.json(
      {
        message: "Playlist created successfully.",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    const status = axios.isAxiosError(error) ? error.response?.status : null;
    if (status === 401 && refresh_token) {
      const newAccessToken = await refreshAccessToken(req);
      if (!newAccessToken) {
        return NextResponse.json(
          {
            error: "No se logró obtener el token de acceso.",
          },
          {
            status: 401,
          }
        );
      }

      try {
        await addSongsToPlaylist(newAccessToken, playlist_id, songs);
        return NextResponse.json(
          {
            message: "Playlist created successfully.",
          },
          {
            status: 200,
          }
        );
      } catch (error) {
        console.error("Error after token refresh:", error);
        return NextResponse.json(
          {
            error: "No se logró obtener los datos del usuario.",
          },
          {
            status: 500,
          }
        );
      }
    }
    return NextResponse.json(
      {
        error: "No se logró añadir las canciones a la playlist.",
      },
      {
        status: 500,
      }
    );
  }
}
