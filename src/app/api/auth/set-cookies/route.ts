import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const access_token = searchParams.get("access_token");
  const expires_in = searchParams.get("expires_in");
  const refresh_token = searchParams.get("refresh_token");

  if (!access_token || !expires_in || !refresh_token) {
    return NextResponse.redirect(new URL("/?error=missing_tokens", req.url));
  }
  const res = NextResponse.redirect(new URL("/create-playlist", req.url));

  res.cookies.set({
    name: "spotify_access_token",
    value: access_token,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: parseInt(expires_in, 10),
    path: "/",
  });

  res.cookies.set({
    name: "spotify_refresh_token",
    value: refresh_token,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
  });

  return res;
}
