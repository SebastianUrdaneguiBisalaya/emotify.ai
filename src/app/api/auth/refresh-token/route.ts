import { NextResponse } from "next/server";
import axios from "axios";
import { cookies } from "next/headers";

export async function POST() {
  const cookieStore = await cookies();
  const refresh_token = cookieStore.get("spotify_refresh_token")?.value;

  if (!refresh_token) {
    return NextResponse.json(
      {
        error: "refresh_token_not_found",
      },
      {
        status: 401,
      }
    );
  }

  const clientId = process.env.CLIENT_ID_SPOTIFY_API as string;
  const clientSecret = process.env.SECRET_CLIENT_SPOTIFY_API as string;

  if (!clientId || !clientSecret) {
    return NextResponse.json(
      {
        error: "client_id_or_secret_not_found",
      },
      {
        status: 500,
      }
    );
  }

  const basicAuth = Buffer.from(`${clientId}:${clientSecret}`).toString(
    "base64"
  );

  try {
    const response = await axios.post(
      "https://accounts.spotify.com/api/token",
      new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token: refresh_token as string,
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Basic ${basicAuth}`,
        },
      }
    );

    const data = await response.data;

    const { access_token, expires_in, refresh_token: new_refresh_token } = data;

    const res = NextResponse.json({
      access_token: access_token,
      expires_in: expires_in,
      refresh_token: new_refresh_token || refresh_token,
    });

    res.cookies.set({
      name: "spotify_access_token",
      value: access_token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: expires_in,
      path: "/",
    });

    if (new_refresh_token) {
      res.cookies.set({
        name: "spotify_refresh_token",
        value: new_refresh_token,
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        path: "/",
      });
    }
    return res;
  } catch (error) {
    console.error("Error refreshing access token:", error);
    if (axios.isAxiosError(error)) {
      console.error("Error response:", error.response?.data);
    }
    return NextResponse.json(
      {
        error: "refresh_token_failed",
      },
      {
        status: 500,
      }
    );
  }
}
