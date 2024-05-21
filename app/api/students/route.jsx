import connectDB from "@/libs/mongodb";
import Student from "@/model/student.model";
import { HttpStatusCode } from "axios";
import { NextResponse } from "next/server";

// Create
export async function POST(request) {
  const {
    student_id, first_name, middle_name, last_name,
    lrn, birthday, gender,
    purok, barangay, municipality, province, zip_code,
    father_name, father_contact,
    mother_name, mother_contact
  } = await request.json();

  await connectDB();
  return NextResponse.json(
    await Student.create(
      {
        student_id, first_name, middle_name, last_name,
        lrn, birthday, gender,
        purok, barangay, municipality, province, zip_code,
        father_name, father_contact,
        mother_name, mother_contact
      }
    ) ? { status: HttpStatusCode.Created } : { status: HttpStatusCode.BadRequest }
  );
}

// Read
export async function GET(request) {
  await connectDB();
  return NextResponse.json(
    await Student.aggregate([
    {
      $project: {
        _id: 1,
        student_id: 1,
        first_name: 1,
        middle_name: 1,
        last_name: 1,
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