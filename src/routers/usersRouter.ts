import express from "express";

export const usersRouter = express.Router();

usersRouter.post("/register", async (req, res) => {
  // TODO: implement user registration
  res.sendStatus(501);
});

usersRouter.post("/login", async (req, res) => {
  // TODO: implement user login
  res.sendStatus(501);
});
