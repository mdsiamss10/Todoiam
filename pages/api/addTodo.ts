import { prisma } from "@/prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";
import { authOptions } from "./auth/[...nextauth]";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions);
  try {
    const { todoText } = req.body;
    const user = await prisma.user.findUnique({
      where: { email: session?.user?.email! },
    });
    // @ts-ignore
    await prisma.todo.create({ data: { todo: todoText, userId: user?.id } });
    return res.status(200).json({ message: "Todo successfully created" });
  } catch (err: any) {
    return res.status(410).json({ message: err.message });
  }
}
