import { NextResponse } from "next/server";
import axios from "axios";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const code = searchParams.get("code");
  const state = searchParams.get("state");

  const redirectUri = "http://192.168.18.12:3000/auth/callback";
  const clientId = process.env.CLIENT_ID_SPOTIFY_API as string;
  const clientSecret = process.env.SECRET_CLIENT_SPOTIFY_API as string;

  if (!state) {
    const params = new URLSearchParams({
      error: "state_mismatch",
    });
    return NextResponse.redirect(new URL(`/#?${params.toString()}`, req.url));
  }

  const basicAuth = Buffer.from(`${clientId}:${clientSecret}`).toString(
    "base64"
  );

  try {
    const response = await axios.post(
      "https://accounts.spotify.com/api/token",
      new URLSearchParams({
        code: code as string,
        redirect_uri: redirectUri,
        grant_type: "authorization_code",
      }),
      {
        headers: {
          Authorization: `Basic ${basicAuth}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    const data = await response.data;

    const { access_token, expires_in, refresh_token } = data;

    const res = NextResponse.redirect(new URL("/create-playlist/", req.url));

    res.cookies.set({
      name: "spotify_access_token",
      value: access_token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: expires_in,
      path: "/",
    });

    res.cookies.set({
      name: "spotify_refresh_token",
      value: refresh_token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: expires_in,
      path: "/",
    });

    return res;
  } catch (error: unknown) {
    console.error("Error obtaining access token:", error);
    return NextResponse.json(
      {
        error: "No se logró obtener el token de acceso",
      },
      {
        status: 500,
      }
    );
  }
}
