import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { getHashOfUser, registerUser } from "../dao/registerUser.js";

export const usersRouter = express.Router();

type UserRegistrationBody = {
  username: string;
  password: string;
};

usersRouter.post("/register", async (req, res) => {
  const body: UserRegistrationBody = req.body;
  const hash = await bcrypt.hash(body.password, 10);

  const success = await registerUser(body.username, hash);

  // Return 409 Conflict if username is presumably taken
  res.sendStatus(success ? 200 : 409);
});

usersRouter.post("/login", async (req, res) => {
  const body: UserRegistrationBody = req.body;
  const hash = await getHashOfUser(body.username);

  if (hash && (await bcrypt.compare(body.password, hash))) {
    // TODO: implement user sessions via JWT
    const token = jwt.sign(
      { username: body.username },
      process.env.FSC_SECRET_KEY as string, // may fail
      { expiresIn: "1h" },
    );

    res
      .cookie("session_token", token, {
        httpOnly: true,
        sameSite: "lax",
        expires: new Date(Date.now() + 3600000),
      })
      .sendStatus(200);
  } else {
    res.sendStatus(400);
  }
});
