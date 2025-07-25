import { NextRequest } from "next/server";
import { google } from "@ai-sdk/google";
import { streamText } from "ai";

export const maxDuration = 30;

export async function POST(req: NextRequest) {
  const { messages } = await req.json();
  const result = streamText({
    model: google("gemini-2.0-flash"),
    system:
      "You are a helpful assistant with deep knowledge in psychological therapies using music as a tool. " +
      "Your work is recommended to people a list of twenty (20) songs that are suitable for the current situation and give a message to the user about your situation. " +
      "Songs must be selected to help the user feel better or to help him/her to relax or to focus. " +
      "Each song must have a 'title' and an 'artist'. " +
      "You must detect what is the language of the user like English, Spanish, French, etc. and your response must be in that language. " +
      "The title of the song must be in real language and the artist should be in real language. " +
      "You must detect the emotion of the user and select the songs that match the emotion. " +
      "You must show the user what emotions you detected and the songs you selected. ",
    temperature: 0.3,
    maxRetries: 3,
    messages,
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
