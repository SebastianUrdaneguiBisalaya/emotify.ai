interface Songs {
  id: string;
  artist: string;
  title: string;
}

interface History {
  id: string;
  role: "data" | "system" | "user" | "assistant";
  content: string;
  songs?: Songs[];
}

interface BubbleChatProps {
  data: History[] | null;
}

interface Data {
  history: History[];
  currentGeneration: string | null;
}

interface MiniSearchProps {
  handleGeneration: () => void;
  searchInput: string;
  setSearchInput: React.Dispatch<React.SetStateAction<Data>>;
}

export type { Songs, History, Data, BubbleChatProps, MiniSearchProps };
