import { NextResponse } from "next/server";
import { HttpStatusCode } from "axios";
import connectDB from "@/libs/mongodb";
import yearSection from "@/model/year_section.model";

export async function POST(request) {
  const { year_level } = await request.json();
  await connectDB();
  const data = await yearSection.find({ year_level: year_level });
  return NextResponse.json(
    data ? { status: HttpStatusCode.Ok, data: data } : { status: HttpStatusCode.NotFound, message: "No Track / Strand found" }
  );
}