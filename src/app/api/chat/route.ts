import { NextRequest } from "next/server";
import { google } from "@ai-sdk/google";
import { streamText } from "ai";
import { z } from "zod";
import { Songs } from "@/lib/types";
import { searchSpotifySongs } from "@/lib/utils";

export const maxDuration = 30;

export async function POST(req: NextRequest) {
  const { messages } = await req.json();
  const result = streamText({
    model: google("gemini-2.0-flash"),
    system:
      "You are a helpful assistant with deep knowledge in psychological therapies using music as a tool. " +
      "Your work is recommended to people a list of five (5) songs that are suitable for the current situation and give a message to the user about your situation. " +
      "Songs must be selected to help the user feel better or to help him/her to relax or to focus. " +
      "Each song must have a 'title' and an 'artist'. " +
      "You must detect what is the language of the user like English, Spanish, French, etc. and your response must be in that language. " +
      "The title of the song must be in real language and the artist should be in real language. " +
      "You must detect the emotion of the user and select the songs that match the emotion. " +
      "You must show the user what emotions you detected and the songs you selected. " +
      "The response must be in markdown format. " +
      "After providing the initial message about the user's situation and detected emotions, you MUST call the 'getSpotifySongsDetails' tool with a 'data' array containing the 'title' and 'artist' for each of the 5 recommended songs. DO NOT output the detailed song information (like ID, duration, popularity, image URL) directly in text or JSON format within your conversational response. The frontend will handle displaying the Spotify details.",
    temperature: 0.3,
    maxRetries: 3,
    messages,
    tools: {
      getSpotifySongsDetails: {
        title: "getSpotifySongsDetails",
        description: "",
        parameters: z.object({
          data: z.array(
            z.object({
              title: z.string().describe("The title of the song"),
              artist: z.string().describe("The artist of the song"),
            })
          ),
        }),
        execute: async ({ data }: Songs) => {
          const results = [];
          for (const item of data) {
            try {
              const songDetail = await searchSpotifySongs({
                title: item.title,
                artist: item.artist,
              });
              if (songDetail) {
                results.push(songDetail);
              }
            } catch (error) {
              console.error(`Error searching for song: ${item.title}`, error);
              results.push({
                id: `error-${item.title}-${item.artist}-${Math.random()
                  .toString(36)
                  .substring(7)}`,
                uri: `error-${item.title}-${item.artist}-${Math.random()
                  .toString(36)
                  .substring(7)}`,
                title: item.title,
                artist: item.artist,
                image: null,
                duration: 0,
                popularity: 0,
              });
            }
          }
          return { results };
        },
      },
    },
  });

  return result.toDataStreamResponse({
    sendReasoning: false,
    sendUsage: false,
    getErrorMessage: (error) => {
      if (error == null) {
        return "unknown error";
      }

      if (typeof error === "string") {
        return error;
      }

      if (error instanceof Error) {
        return error.message;
      }

      return JSON.stringify(error);
    },
  });
}
