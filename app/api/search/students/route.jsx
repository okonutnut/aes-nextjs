import connectDB from "@/libs/mongodb";
import Student from "@/model/student.model";
import { HttpStatusCode } from "axios";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { search } = await request.json();
  await connectDB();
  const students = await Student.find({
    $or: [
      { student_id: { $regex: search, $options: "i" } },
      { first_name: { $regex: search, $options: "i" } },
      { last_name: { $regex: search, $options: "i" } },
    ]}).limit(10);
  return NextResponse.json({status: HttpStatusCode.Ok, data: students});
}