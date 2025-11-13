import { NextResponse } from "next/server";

export async function GET() {
  const timestamp = new Date().toISOString();

  return NextResponse.json(
    {
      message: "Cached data from API",
      timestamp,
      random: Math.random(),
    },
    {
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=7200",
      },
    },
  );
}

// Add cache tag for revalidation
export const revalidate = 3600; // Cache for 1 hour
