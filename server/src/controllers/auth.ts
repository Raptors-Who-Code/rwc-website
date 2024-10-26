import { Request, Response } from "express";
import { prismaClient } from "..";
import { hashSync, compareSync } from "bcrypt";
import * as jwt from "jsonwebtoken";
import { JWT_SECRET } from "../secrets";

export const signup = async (req: Request, res: Response) => {
  const { email, password, name } = req.body;

  let user = await prismaClient.user.findFirst({
    where: { email: email },
  });

  if (user) {
    throw Error("User already exists");
  }

  user = await prismaClient.user.create({
    data: {
      name,
      email,
      password: hashSync(password, 10),
    },
  });

  // Do not send back hashed password back to frontend
  const { password: _, ...userWithoutPassword } = user;
  res.json(userWithoutPassword);
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  let user = await prismaClient.user.findFirst({
    where: { email: email },
  });

  if (!user) {
    throw Error("User does not exist");
  }

  if (!compareSync(password, user.password)) {
    throw Error("Incorrect password!");
  }

  const token = jwt.sign({ userId: user.id }, JWT_SECRET);

  // Do not send back hashed password back to frontend
  const { password: _, ...userWithoutPassword } = user;

  res.json({ user: userWithoutPassword, token });
};
