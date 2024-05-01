import connectDB from "@/libs/mongodb";
import Enrollee from "@/model/enrollee.model";
import { NextResponse } from "next/server";

export async function POST(request) {
    const {student_id} = await request.json();
    await connectDB();
    const data = await Enrollee.findOne({student_id});
    return NextResponse.json(
        await data ? {data: data, status: "Success"} : {status: "Failed"}
    );
}