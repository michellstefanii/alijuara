import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  await prisma.users.create({
    data: {
      name: body.name,
      phone: body.phone,
      email: body.email,
    },
  });

  return NextResponse.json({});
}
