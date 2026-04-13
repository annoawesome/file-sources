import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export type AuthPayload = {
  authPayload: jwt.JwtPayload;
};

export default function authenticate(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const cookies = req.cookies;
  const token: string | undefined = cookies.session_token;

  if (!token) {
    res.sendStatus(401);
    return;
  }

  try {
    const decoded = jwt.verify(token, process.env.FSC_SECRET_KEY as string);

    (req as Request & AuthPayload).authPayload = decoded as jwt.JwtPayload;
    next();
  } catch {
    res.sendStatus(403);
  }
}
