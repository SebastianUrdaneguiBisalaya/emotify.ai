import { v4 as uuidv4 } from "uuid";
import { Song, SongDetail, Spotify, BasicAuthSpotify } from "@/lib/types";
import axios from "axios";

export const generateUUID = () => {
  return uuidv4();
};

export const transformMilliSecondToMinute = (milliSeconds: number) => {
  return (milliSeconds / 60000).toFixed(2);
};

let cachedToken: string | null = null;
let tokenExpiry: number = 0;

const basicAuthSpotify = async () => {
  const now = Date.now();
  if (cachedToken && now < tokenExpiry) {
    return cachedToken;
  }
  const authString = Buffer.from(
    `${process.env.CLIENT_ID_SPOTIFY_API}:${process.env.SECRET_CLIENT_SPOTIFY_API}`
  ).toString("base64");
  const response = await axios.post(
    "https://accounts.spotify.com/api/token",
    "grant_type=client_credentials",
    {
      headers: {
        Authorization: `Basic ${authString}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );
  if (response.status !== 200) {
    throw new Error(`Spotify API error: ${response.statusText}`);
  }
  const data: BasicAuthSpotify = await response.data;
  cachedToken = data.access_token;
  tokenExpiry = now + data.expires_in * 1000 - 60_000;
  return cachedToken;
};

export const searchSpotifySongs = async ({
  title,
  artist,
}: Song): Promise<SongDetail | null> => {
  if (!title || !artist) {
    return null;
  }
  const accessToken = await basicAuthSpotify();
  const query = encodeURIComponent(`${title} ${artist}`);
  const response = await axios.get(
    `https://api.spotify.com/v1/search?q=${query}&type=track&limit=1`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    }
  );
  if (response.status !== 200) {
    throw new Error(`Spotify API error: ${response.statusText}`);
  }
  const data: Spotify = await response.data;
  const track = data.tracks.items[0];

  if (track) {
    return {
      id: track.id,
      uri: track.uri,
      title: track.name,
      artist: track.artists.map((artist) => artist.name).join(", "),
      image: track.album.images[0].url,
      duration: transformMilliSecondToMinute(track.duration_ms),
      popularity: track.popularity,
    };
  }
  return null;
};

export const generateRandomString = (length: number) => {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};
