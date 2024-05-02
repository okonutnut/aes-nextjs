import connectDB from "@/libs/mongodb";
import Student from "@/model/student.model";
import { NextResponse } from "next/server";

export async function POST(request) {
	const id = await request.json()
	await connectDB();
	const data = await Student.findOne({ id }, { _id: 0, __v: 0 })
	return NextResponse.json(
		await data ? 
		{
			status: "Success",
			data: data,
		} : {status: "Error"}
	)
}