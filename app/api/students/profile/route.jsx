import connectDB from "@/libs/mongodb";
import Student from "@/model/student.model";
import { NextResponse } from "next/server";

export async function POST(request) {
	const { id } = request.json()
	await connectDB();
	const data = await Student.findOne({ student_id: id })
	return NextResponse.json(
		await data ? 
		{
			status: "Success",
			data: data,
		} : {status: "Error"}
	)
}