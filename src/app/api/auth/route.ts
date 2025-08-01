import { NextResponse } from "next/server";
import { generateRandomString } from "@/lib/utils";

export async function GET() {
  const state = generateRandomString(16);
  const scope = "user-read-private user-read-email playlist-modify-private";
  const redirectUri = "http://127.0.0.1:3000/api/auth/callback";

  const params = new URLSearchParams({
    response_type: "code",
    client_id: process.env.CLIENT_ID_SPOTIFY_API as string,
    scope: scope,
    redirect_uri: redirectUri,
    state: state,
  });

  return NextResponse.redirect(
    `https://accounts.spotify.com/authorize?${params.toString()}`
  );
}
