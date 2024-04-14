import connectDB from "@/libs/mongodb";
import Admin from "@/model/admin.model";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { admin_id, password } = await request.json();
  await connectDB();
  const data = await Admin.findOne({ admin_id, password });
  return NextResponse.json(
    await data ? {data: data, status: "Success"} : {status: "Failed"}
  );
}