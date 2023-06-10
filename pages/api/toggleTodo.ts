import { prisma } from "@/prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { id, completed } = req.body;
    // @ts-ignore
    await prisma.todo.update({ data: { completed }, where: { id } });
    return res.status(200).json({ message: "Todo successfully deleteded" });
  } catch (err: any) {
    return res.status(410).json({ message: err.message });
  }
}
