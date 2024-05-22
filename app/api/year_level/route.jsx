import connectDB from "@/libs/mongodb";
import yearSection from "@/model/year_section.model";
import { HttpStatusCode } from "axios";
import { NextResponse } from "next/server";

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
    post ? { status: HttpStatusCode.Created } : { status: HttpStatusCode.BadRequest }
  );
}