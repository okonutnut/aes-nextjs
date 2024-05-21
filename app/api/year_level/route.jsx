import connectDB from "@/libs/mongodb";
import yearSection from "@/model/year_section.model";
import { NextResponse } from "next/server";

// This is the API route for year_section
export async function GET(request) {
  await connectDB();
  return NextResponse.json(
    await yearSection.find({}, { _id: 0, __v: 0, createdAt: 0, updatedAt: 0 })
  );
}

export async function POST(request) {
  const { year_level, section_name, adviser, room, strand_name } = await request.json();
  await connectDB();
  const post = await yearSection.create({
    year_level,
    section_name,
    strand_name,
    adviser,
    room
  });
  return NextResponse.json(
    post ? { status: "Success" } : { status: "Failed" }
  );
}