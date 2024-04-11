import connectDB from "@/libs/mongodb";
import Admin from "@/model/admin";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { admin_id, password } = await request.json();
  await connectDB();
  return NextResponse.json({
      data: await Admin.findOne({ admin_id, password }) ? {status: "Success"} : { status: "Failed" } 
    });
}