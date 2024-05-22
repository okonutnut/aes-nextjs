import connectDB from "@/libs/mongodb";
import Student from "@/model/student.model";
import { HttpStatusCode } from "axios";
import { NextResponse } from "next/server";

export async function POST(params, request) {
	const id = params.id;
	await connectDB();
	const data = await Student.findOne({ id })
	return NextResponse.json(
		await data ? 
		{
			status: HttpStatusCode.Ok,
			data: data,
		} : {status: HttpStatusCode.NotFound, message: `Student ID ${id} not found`}
	)
}