import connectDB from "@/libs/mongodb";
import Enrollee from "@/model/enrollee.model";
import { HttpStatusCode } from "axios";
import { NextResponse } from "next/server";

export async function POST(params, request) {
	const id = params.id;
	await connectDB();
	const data = await Enrollee.findOne({ id }, {createdAt: 1, year_level: 1, section_name: 1, _id: 0})
	return NextResponse.json(
		await data ? 
		{
			status: HttpStatusCode.Ok,
			data: [data],
		} : {status: HttpStatusCode.NotFound, message: `Student ID ${id} not found`}
	)
}