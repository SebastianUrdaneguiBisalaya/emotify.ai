import { NextResponse } from "next/server";
import axios from "axios";
import { cookies } from "next/headers";
import { Playlist } from "@/lib/types";

export async function POST(req: Request) {
  const { user_id, name, description } = await req.json();
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
      `https://api.spotify.com/v1/users/${user_id}/playlists`,
      {
        name: name,
        description: description,
        public: false,
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
          "Content-Type": "application/json",
        },
      }
    );

    const data: Playlist = await response.data;

    const { id } = data;

    return NextResponse.json({
      id,
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
