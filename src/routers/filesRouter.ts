import express from "express";

export const filesRouter = express.Router();

filesRouter.get("/search", (req, res) => {
  // Temporary, until proper db is implemented
  const mockFileReps = [
    {
      name: "Big Buck Bunny",
      source: "",
    },
    {
      name: "A Bunny's Life",
      source: "",
    },
  ];

  res.status(200).send(JSON.stringify(mockFileReps));
});
