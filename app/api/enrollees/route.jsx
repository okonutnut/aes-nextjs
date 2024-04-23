import connectDB from "@/libs/mongodb";
import Enrollee from "@/model/enrollee.model";
import { NextResponse } from "next/server";

export async function GET(request) {
  await connectDB();
  return NextResponse.json(
    await Enrollee.aggregate([
    {
      $project: {
        _id: 1,
        student_id: 1,
        last_name: 1,
        first_name: 1,
        middle_name: 1,
        year_level_section: 1,
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
