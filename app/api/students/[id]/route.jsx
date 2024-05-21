import connectDB from "@/libs/mongodb";
import Student from "@/model/student.model";
import { HttpStatusCode } from "axios";
import { NextResponse } from "next/server";

export async function POST(params, request) {
	const id = params.id;
	await connectDB();
	const data = await Student.findOne({ id }, { _id: 0, __v: 0 })
	return NextResponse.json(
		await data ? 
		{
			status: HttpStatusCode.Ok,
			data: data,
		} : {status: HttpStatusCode.NotFound, message: "Student not found"}
	)
}