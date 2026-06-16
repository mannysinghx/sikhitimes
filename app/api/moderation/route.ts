import { NextRequest, NextResponse } from "next/server";
import { filterMessage } from "@/lib/filters/content-filter";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { content } = body as { content: string };

    if (!content || typeof content !== "string") {
      return NextResponse.json({ error: "Content is required" }, { status: 400 });
    }

    if (content.length > 5000) {
      return NextResponse.json({ error: "Content too long" }, { status: 400 });
    }

    const result = filterMessage(content);

    return NextResponse.json({
      filtered: result.filtered,
      clean: result.clean,
      allowed: true,
    });
  } catch (error) {
    console.error("[API] Moderation error:", error);
    return NextResponse.json({ error: "Moderation check failed" }, { status: 500 });
  }
}
