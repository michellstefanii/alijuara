"use server";
import { prisma } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

interface CreateUserInput {
  name: string;
  phone: string;
  email: string;
}

export async function POST(req: NextRequest) {
  const body: CreateUserInput = await req.json();
  console.log(body, "data");
  try {
    const user = await prisma.users.create({
      data: {
        name: body.name,
        phone: body.phone,
        email: body.email,
      },
    });

    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}
