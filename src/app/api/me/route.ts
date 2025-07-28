import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import axios from "axios";
import { Me } from "@/lib/types";

export async function GET() {
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
    const response = await axios.get("https://api.spotify.com/v1/me", {
      headers: {
        Authorization: `Bearer ${access_token}`,
        "Content-Type": "application/json",
      },
    });

    const data: Me = await response.data;

    const { email, id, display_name, images } = data;
    const image = images.length > 0 ? images[0].url : null;

    return NextResponse.json({
      email,
      id,
      display_name,
      image,
    });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Error response:", error.response?.data);
    }
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
