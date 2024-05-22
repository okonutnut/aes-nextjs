import connectDB from "@/libs/mongodb";
import Student from "@/model/student.model";
import { HttpStatusCode } from "axios";
import { NextResponse } from "next/server";

export async function POST(request) {
	const {student_id} = await request.json();
	await connectDB();
	const data = await Student.findOne({ student_id : student_id }, { _id: 0, __v: 0 })
	return NextResponse.json(
		data ? 
		{
			status: HttpStatusCode.Ok,
			data: data,
		} : {status: HttpStatusCode.NotFound, message: `Student ID ${id} not found`}
	)
}