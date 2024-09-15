import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  const body = request.json();
  console.log(body);

  return NextResponse.json({ dat: { res: 3 } });
}
