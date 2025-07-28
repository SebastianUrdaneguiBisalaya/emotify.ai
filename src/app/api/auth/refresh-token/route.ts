import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { searchParams } = new URL(req.url);

  const refresh_token = searchParams.get("refresh_token");

  const clientId = process.env.CLIENT_ID_SPOTIFY_API as string;
  const clientSecret = process.env.SECRET_CLIENT_SPOTIFY_API as string;

  const basicAuth = Buffer.from(`${clientId}:${clientSecret}`).toString(
    "base64"
  );

  const authOptions = {
    url: "https://accounts.spotify.com/api/token",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${Buffer.from(
        clientId + ":" + clientSecret
      ).toString("base64")}`,
    },
    form: {
      grant_type: "refresh_token",
      refresh_token: refresh_token as string,
    },
    json: true,
  };
}
