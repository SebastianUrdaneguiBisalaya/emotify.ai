interface SongsFromSpotify {
  id: string;
  artist: string;
  title: string;
  image: string;
  duration: string;
  type: string;
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

export type { MiniSearchProps, BubbleChatProps, SongsFromSpotify };
