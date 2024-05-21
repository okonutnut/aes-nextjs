import connectDB from "@/libs/mongodb";
import Subjects from "@/model/subject.model";
import { HttpStatusCode } from "axios";
import { NextResponse } from "next/server";

// Create
export async function POST(request) {
  const {
    year_level, code, name, type, track, strand
  } = await request.json();

  await connectDB();
  return NextResponse.json(
    await Subjects.create(
      {
        year_level, code, name, type, track, strand
      }
    ) ? { status: HttpStatusCode.Created } : { status: HttpStatusCode.BadRequest }
  );
}