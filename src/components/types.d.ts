interface SongsFromAI {
  id: string;
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
  id: string;
  role: "data" | "system" | "user" | "assistant";
  content: string;
  songs?: SongsFromAI[];
}

interface BubbleChatProps {
  data: History[] | null;
}

interface Data {
  history: History[];
  currentGeneration: string | null;
  currentSongsFromAI: SongsFromAI[];
  currentSongsFromSpotify: SongsFromSpotify[];
}

interface MiniSearchProps {
  handleGeneration: () => void;
  searchInput: string;
  setSearchInput: React.Dispatch<React.SetStateAction<Data>>;
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
  Data,
  BubbleChatProps,
  MiniSearchProps,
};
