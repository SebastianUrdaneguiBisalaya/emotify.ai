import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import axios from "axios";
import { Me } from "@/lib/types";
import { refreshAccessToken } from "@/lib/utils";

const getSpotifyProfile = async (token: string): Promise<Me> => {
  const res = await axios.get("https://api.spotify.com/v1/me", {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  return res.data;
};

const extractProfileData = (data: Me) => {
  const { email, id, display_name, images } = data;
  const image = images.length > 0 ? images[0].url : null;
  return { email, id, display_name, image };
};

export async function GET(req: Request) {
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
    const data = await getSpotifyProfile(access_token);
    return NextResponse.json(extractProfileData(data));
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
        const retryData = await getSpotifyProfile(newAccessToken);
        return NextResponse.json(extractProfileData(retryData));
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
        error: "No se logró obtener los datos del usuario.",
      },
      {
        status: 500,
      }
    );
  }
}
