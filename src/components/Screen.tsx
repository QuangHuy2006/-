import { useEffect, useRef, useState } from "react";
export default function Viewer() {
  const socketId = new URLSearchParams(window.location.search).get("socketId");
  const imgRef = useRef<HTMLImageElement>(null);
  const [status, setStatus] = useState<"connecting" | "connected" | "error">("connecting");
  const getVideoStreamUrl = (i: string, l: string, u: string) => `https://api.raia.edu.vn/api/exam/videos/stream?studentId=${i}&examRoomId=${l}&fileName=${encodeURIComponent(u)}`;
  
  useEffect(() => {
    const es = new EventSource(`https://api.raia.edu.vn/api/rikkei-education-gateway/stream-screen-frame?socketId=${socketId}`);

    es.onopen = () => setStatus("connected");
    es.onmessage = (e) => {
      const data = JSON.parse(e.data);
      if (data.type === "screen_frame" && data.data && imgRef.current) {
        imgRef.current.src = `data:image/jpeg;base64,${data.data}`;
      }
    };
    es.onerror = () => {
      setStatus("error");
      es.close();
    };

    return () => es.close();
  }, [socketId]);
  return (
    <div className="flex flex-col items-center" >
      {status === "connecting" && <p>Đang kết nối...</p>}
      {status === "error" && <p>Lỗi kết nối</p>}
      <img ref={imgRef} style={{ width: "80%", background: "#000" }} alt="Screen" />
    </div>
  );
}
