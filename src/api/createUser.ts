"use server";
import { prisma } from "@/lib/db";

interface CreateUserInput {
  name: string;
  phone: string;
  email: string;
}

export async function createUser(data: CreateUserInput) {
  try {
    const user = await prisma.users.create({
      data: {
        name: data.name,
        phone: data.phone,
        email: data.email,
      },
    });
    return user;
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    return { status: "error" };
  }
}
