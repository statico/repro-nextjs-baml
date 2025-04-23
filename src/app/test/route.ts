import { NextResponse } from "next/server";
import { b } from "../../../baml_client";

export async function GET() {
  const response = await b.ExtractResume("test");
  return NextResponse.json({ response });
}
