import connectDB from "@/libs/mongodb";
import yearSection from "@/model/year_section";
import { NextResponse } from "next/server";

// This is the API route for year_section
export async function GET(request) {
  await connectDB();
  return NextResponse.json(
    await yearSection.find({})
  );
}

export async function POST(request) {
  const { year_level, section_name, adviser, room } = await request.json();
  await connectDB();
  const post = await yearSection.create({
    year_level,
    section_name,
    adviser,
    room
  });
  return NextResponse.json(
    post ? { status: "Success" } : { status: "Failed" }
  );
}