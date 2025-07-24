import { NextRequest, NextResponse } from "next/server";
import { google } from "@ai-sdk/google";
import { streamText } from "ai";

export const maxDuration = 30;

export async function POST(req: NextRequest) {
  const { messages } = await req.json();
  const result = streamText({
    model: google("gemini-2.0-flash"),
    system: "",
    temperature: 0.3,
    maxRetries: 3,
    messages,
  });

  return NextResponse.json(
    result.toDataStreamResponse({
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
    })
  );
}
