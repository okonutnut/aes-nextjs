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

export async function PUT(request) {
  const {
    student_id, first_name, middle_name, last_name,
    lrn, birthday, gender,
    purok, barangay, municipality, province, zip_code,
    father_name, father_contact,
    mother_name, mother_contact
  } = await request.json();

  await connectDB();
  const updated = await Student.findOneAndUpdate(
                        {student_id},
                        {
                          first_name, middle_name, last_name,
                          lrn, birthday, gender,
                          purok, barangay, municipality, province, zip_code,
                          father_name, father_contact,
                          mother_name, mother_contact
                        }, {new : true})
  return NextResponse.json(
    updated ? { status: HttpStatusCode.Ok } : { status: HttpStatusCode.BadRequest }
  );
}

export async function DELETE(request) {
  const {student_id} = await request.json();
  await connectDB();
  const deleted = await Student.findOneAndDelete({student_id}, {new : true})
  return NextResponse.json(
    deleted ? { status: HttpStatusCode.Ok } : { status: HttpStatusCode.BadRequest }
  );
}