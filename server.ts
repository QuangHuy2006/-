import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: "20mb" }));

interface StreamData {
  frame: string;
  student?: { studentId: string; fullName: string };
}

const streams: Record<string, StreamData> = {};

// Nhận frame từ student
app.post("/api/stream-screen-frame", (req, res) => {
  const { socketId, data } = req.body;
  streams[socketId] = data;
  res.sendStatus(200);
});

// SSE cho viewer
app.get("/api/stream-screen-frame", (req, res) => {
  const { socketId } = req.query as { socketId: string };
  if (!socketId) return res.sendStatus(400);

  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  const interval = setInterval(() => {
    const streamData = streams[socketId];
    if (streamData) {
      res.write(
        `data: ${JSON.stringify({
          type: "screen_frame",
          data: streamData.frame,
          student: streamData.student,
        })}\n\n`
      );
      console.log(res);
    }
  }, 100); // 10 fps

  req.on("close", () => clearInterval(interval));
});

app.listen(4000, () => console.log("Backend running on http://localhost:4000"));
