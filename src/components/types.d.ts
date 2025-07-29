interface SongDetail {
  id: string;
  uri: string;
  title: string;
  artist: string;
  image: string | null;
  duration: number;
  popularity: number;
}
import { type Message } from "@ai-sdk/react";

interface BubbleChatProps {
  data: Message[];
}

interface MiniSearchProps {
  input: string;
  handleInputChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleSubmit: () => void;
  error: Error | undefined;
  status: "error" | "submitted" | "streaming" | "ready";
  stop: () => void;
}

interface ShinyTextProps {
  text: string;
}

export type { MiniSearchProps, BubbleChatProps, SongDetail, ShinyTextProps };
