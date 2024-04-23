import connectDB from "@/libs/mongodb";
import Admins from "@/model/admin.model";
import { NextResponse } from "next/server";

export async function POST(request) {
  const {
    admin_id, name, email, password, role
  } = await request.json();

  await connectDB();
  return NextResponse.json(
    await Admins.create(
      {
        admin_id: admin_id,
        name: name,
        email: email,
        password: password,
        role: role
      }
    ) ? { status: "Success" } : { status: "Failed" }
  );
}