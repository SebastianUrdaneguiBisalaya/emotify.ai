import { NextResponse } from "next/server";
import axios from "axios";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  const { playlist_id, songs } = await req.json();
  const cookieStore = await cookies();
  const access_token = cookieStore.get("spotify_access_token")?.value;

  if (!access_token) {
    return NextResponse.json(
      {
        error: "access_token_not_found",
      },
      {
        status: 400,
      }
    );
  }

  try {
    const response = await axios.post(
      `https://api.spotify.com/v1/playlists/${playlist_id}/tracks`,
      {
        uris: songs.join(","),
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
          "Content-Type": "application/json",
        },
      }
    );

    await response.data;

    return NextResponse.json({
      message: "Las canciones se agregaron correctamente a la playlist.",
    });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Error response:", error.response?.data);
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
