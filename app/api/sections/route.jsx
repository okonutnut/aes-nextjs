import { NextResponse } from "next/server";
import yearSection from "@/model/year_section.model";
import { HttpStatusCode } from "axios";
import connectDB from "@/libs/mongodb";

export async function POST(request) {
  const {year_level} = await request.json();
  await connectDB();
  const data = await yearSection.find({year_level: year_level}, {_id: 0, __v: 0, createdAt: 0, updatedAt: 0, year_level: 0})
  return NextResponse.json(
    data ? {status: HttpStatusCode.Ok, data: data} : {status: HttpStatusCode.NotFound, message: "No sections found"},
  );
}