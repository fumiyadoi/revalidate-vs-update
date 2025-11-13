import { revalidateTag } from "next/cache";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { tag } = body;

    if (!tag) {
      return NextResponse.json(
        { error: "Tag parameter is required" },
        { status: 400 },
      );
    }

    // Use revalidateTag with "max" profile for Route Handler
    revalidateTag(tag, "max");

    return NextResponse.json({
      success: true,
      message: `Tag "${tag}" has been revalidated using revalidateTag`,
      timestamp: new Date().toISOString(),
    });
  } catch (_error) {
    return NextResponse.json(
      { error: "Failed to revalidate tag" },
      { status: 500 },
    );
  }
}
