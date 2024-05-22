import connectDB from "@/libs/mongodb";
import Enrollee from "@/model/enrollee.model";
import { HttpStatusCode } from "axios";
import { NextResponse } from "next/server";

export async function GET(request) {
  await connectDB();
  return NextResponse.json(
    await Enrollee.aggregate([
    {
      $project: {
        _id: 1,
        student_id: 1,
        student_name: 1,
        year_level: 1,
        section_name: 1,
        strand_name: 1,
        createdAt: {
          $dateToString: {
            format: "%Y-%m-%d",
            date: "$createdAt"
          }
        }
      }
    }
  ]));
}

export async function POST(request) {
  const { student_id, student_name, student_type, section_name, strand_name, adviser, year_level } = await request.json();
  await connectDB();
  const data = await Enrollee.create({
    student_id,
    student_name,
    student_type,
    section_name,
    strand_name,
    adviser,
    year_level
  });
  return NextResponse.json(data ? {
      status : HttpStatusCode.Created,
    } : { status : HttpStatusCode.InternalServerError}
  );
}
