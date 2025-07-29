import { NextResponse } from "next/server";
import axios from "axios";
import { cookies } from "next/headers";
import { Playlist } from "@/lib/types";
import { refreshAccessToken } from "@/lib/utils";

const createPlaylist = async (
  token: string,
  user_id: string,
  name: string,
  description: string
): Promise<Playlist> => {
  const response = await axios.post(
    `https://api.spotify.com/v1/users/${user_id}/playlists`,
    {
      name: name,
      description: description,
      public: false,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
};

const extractPlaylistData = (data: Playlist) => {
  const { id } = data;
  return { id };
};

export async function POST(req: Request) {
  const { user_id, name, description } = await req.json();
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
    const data = await createPlaylist(access_token, user_id, name, description);
    return NextResponse.json(extractPlaylistData(data));
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
        const retryData = await createPlaylist(
          newAccessToken,
          user_id,
          name,
          description
        );
        return NextResponse.json(extractPlaylistData(retryData));
      } catch (retryError) {
        console.error("Error after token refresh:", retryError);
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
        error: "No se logró crear la playlist.",
      },
      {
        status: 500,
      }
    );
  }
}
