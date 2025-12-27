import { useEffect } from "react";
import axios from "axios";
type Props = {
    socketId?: string | number;
}
export default function StudentScreen({ socketId }: Props) {
  useEffect(() => {
    async function startCapture() {
      const stream = await navigator.mediaDevices.getDisplayMedia({ video: true });
      const video = document.createElement("video");
      video.srcObject = stream;
      video.play();

      const canvas = document.createElement("canvas");
      canvas.width = 1280;
      canvas.height = 720;
      const ctx = canvas.getContext("2d")!;

      const student = { studentId: socketId, fullName: "Student " + socketId };

      const sendFrame = () => {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const data = canvas.toDataURL("image/jpeg", 0.6).split(",")[1];
        axios.post("http://localhost:4000/api/stream-screen-frame", { socketId, data, student });
        requestAnimationFrame(sendFrame);
      };

      sendFrame();
    }

    startCapture();
  }, [socketId]);

  return <div>Student screen capture running...</div>;
}
