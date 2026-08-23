import express from "express";

const app = express();

app.use(express.json());

app.get("/health", async (req, res) => {
  res.status(200).json({
    message: "this route is healthy",
  });
});

app.listen(3000, () => {
  console.log("server is connected on port 3000");
});
