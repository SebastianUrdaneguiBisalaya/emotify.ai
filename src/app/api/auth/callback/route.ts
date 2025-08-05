import { NextResponse } from "next/server";
import axios from "axios";
import { config } from "@/config/config";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const code = searchParams.get("code");
  const state = searchParams.get("state");

  const redirectUri = `${config.baseUrl}/api/auth/callback`;
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

    const interimRedirectParams = new URLSearchParams({
      access_token: access_token,
      expires_in: expires_in.toString(),
      refresh_token: refresh_token,
    });

    return NextResponse.redirect(
      new URL(
        `/api/auth/set-cookies?${interimRedirectParams.toString()}`,
        req.url
      )
    );
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
