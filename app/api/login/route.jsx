import connectDB from "@/libs/mongodb";
import Admin from "@/model/admin.model";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { admin_id, password } = await request.json();
  await connectDB();
  return NextResponse.json({
    status: await Admin.findOne({ admin_id, password }) ? "Success" : "Failed" 
  });
}