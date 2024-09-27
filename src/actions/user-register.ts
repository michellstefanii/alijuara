"use server";

import prisma from "@/lib/db";

interface CreateUserInput {
  name: string;
  phone: string;
  email: string;
}

export async function handler(req: CreateUserInput) {
  try {
    await prisma.users.create({
      data: {
        name: req.name,
        phone: req.phone,
        email: req.email,
      },
    });

    return { success: true };
  } catch (error) {
    return error;
  }
}
