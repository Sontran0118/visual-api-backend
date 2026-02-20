import { Request, Response } from "express";
import { prisma } from "../db/client";
import { z } from "zod";

export async function GetUsers(req: Request, res: Response) {
  const schema = z.object({
  email: z.string()
});
  const input = schema.parse(req.body);
  const result = await prisma.users.findMany();
  const transformed = {
  email: result.email
};
  return res.status(200).json({
  data: transformed.result
});
}
