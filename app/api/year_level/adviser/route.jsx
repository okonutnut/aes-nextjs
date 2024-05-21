import connectDB from "@/libs/mongodb";
import yearSection from "@/model/year_section.model";
import { HttpStatusCode } from "axios";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { section_strand } = await request.body;
  await connectDB();
  const adviser = await yearSection.find({
    $or: [
      { section_name: { $regex: section_name, $options: "i" } },
      { track_name: { $regex: track_name, $options: "i" } },
    ]
  }).limit(10);

  let adviserName;
  if(adviser){
    adviserName = adviser.adviser;
  } else {
    adviserName = "No data found";
  }

  return NextResponse.json(
    adviser ? { status : HttpStatusCode.Ok, data: adviserName } : { status: HttpStatusCode.NotFound, data: "No data found" }
  );

}