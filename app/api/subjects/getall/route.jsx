import connectDB from "@/libs/mongodb";
import Subjects from "@/model/subject.model";
import { HttpStatusCode } from "axios";
import { NextResponse } from "next/server";

// Create
export async function POST(request) {
  const { year_level, strand_name } = await request.json();
  await connectDB();
  const data = await Subjects.find({ year_level: year_level, strand_name : strand_name }, {code: 1, name:1, _id: 0});
  return NextResponse.json(
    data.length > 0 ? { status: HttpStatusCode.Ok, data: data } : { status: HttpStatusCode.BadRequest, message: "No data found" }
  );
}