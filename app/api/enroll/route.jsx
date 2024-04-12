import connectDB from "@/libs/mongodb";
import Enrollee from "@/model/enrollee.model";
import { NextResponse } from "next/server";

export async function POST(request) {
  const {
    student_id, lrn,
    first_name, middle_name, last_name,
    gender, year_level_section,
    purok, barangay, municipality, province, zip_code,
    father_name, father_contact,
    mother_name, mother_contact
  } = await request.json();

  await connectDB();
  return NextResponse.json(
    await Enrollee.create(
      {
        student_id, lrn,
        first_name, middle_name, last_name,
        gender, year_level_section,
        purok, barangay, municipality, province, zip_code,
        father_name, father_contact,
        mother_name, mother_contact
      }
    ) ? { status: "Success" } : { status: "Failed" }
  );
}