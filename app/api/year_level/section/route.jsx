import connectDB from "@/libs/mongodb";
import yearSection from "@/model/year_section.model";
import { HttpStatusCode } from "axios";
import { NextResponse } from "next/server";

export async function POST(request) {
  const {year_level} = await request.json();
  await connectDB();
  const data = await yearSection.find({ year_level : year_level }, {section_name: 1, adviser: 1, room: 1, _id: 0});
  return NextResponse.json(
    data.length > 0 ? 
    { status: HttpStatusCode.Ok, data: data } :
    { status: HttpStatusCode.NotFound }
  );
}