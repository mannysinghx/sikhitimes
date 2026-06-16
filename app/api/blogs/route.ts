import { NextResponse } from "next/server";
import { generateDailyBlogs } from "@/lib/ai/blog-writer";

// This route triggers the daily blog generation
// In production, call this from a cron job (e.g., Vercel Cron or external scheduler)
export async function POST(request: Request) {
  const authHeader = request.headers.get("authorization");
  const cronSecret = process.env.CRON_SECRET;

  if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const blogs = await generateDailyBlogs();
    return NextResponse.json({ generated: blogs.length, blogs });
  } catch (error) {
    console.error("[API] Blog generation error:", error);
    return NextResponse.json({ error: "Blog generation failed" }, { status: 500 });
  }
}

export async function GET() {
  // Return placeholder response — actual blogs served from DB in production
  return NextResponse.json({
    message: "Use POST to trigger blog generation. Blogs are stored in the database.",
  });
}
