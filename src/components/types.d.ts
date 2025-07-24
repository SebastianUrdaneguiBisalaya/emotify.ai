interface SongsFromAI {
  artist: string;
  title: string;
}

interface SongsFromSpotify {
  id: string;
  artist: string;
  title: string;
  image: string;
  duration: string;
  type: string;
}

interface History {
  role: "data" | "system" | "user" | "assistant";
  content: string;
  songs?: SongsFromAI[];
}

interface BubbleChatProps {
  data: History[] | null;
}

interface MiniSearchProps {
  handleGeneration: () => void;
}

interface Song {
  id: string;
  artist: string;
  title: string;
  image: string;
  duration: string;
  type: string;
}

export type {
  Song,
  SongsFromAI,
  SongsFromSpotify,
  History,
  BubbleChatProps,
  MiniSearchProps,
};
