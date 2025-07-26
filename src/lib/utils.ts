import { v4 as uuidv4 } from "uuid";
import { Song, SongDetail, Spotify } from "@/lib/types";
import axios from "axios";

export const generateUUID = () => {
  return uuidv4();
};

export const searchSpotifySongs = async ({
  title,
  artist,
}: Song): Promise<SongDetail | null> => {
  const query = encodeURIComponent(`${title} ${artist}`);
  const response = await axios.get(
    `https://api.spotify.com/v1/search?q=${query}&type=track&limit=1`,
    {
      headers: {
        Authorization: `Bearer ${process.env.SPOTIFY_ACCESS_TOKEN}`,
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
      title: track.name,
      artist: track.artists.map((artist) => artist.name).join(", "),
      image: track.album.images[0].url,
      duration_ms: track.duration_ms / 1000,
      popularity: track.popularity,
    };
  }
  return null;
};
