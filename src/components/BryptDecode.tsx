// BCryptDemo.jsx
import { useState } from "react";
import bcrypt from "bcryptjs";

export default function BCryptDemo() {
  const [password, setPassword] = useState("");
  const [hash, setHash] = useState("");
  const [verifyResult, setVerifyResult] = useState<boolean | null>(null);
  const [logRounds, setLogRounds] = useState(10);

  const handleHash = () => {
    if (!password) return alert("Nhập mật khẩu trước!");

    // 1. Tạo salt (ngẫu nhiên, 22-char base64 bên trong)
    const salt = bcrypt.genSaltSync(logRounds);

    // 2. Hash mật khẩu
    const hashed = bcrypt.hashSync(password, salt);

    setHash(hashed);
    setVerifyResult(null);
  };

  const handleVerify = () => {
    if (!hash) return alert("Chưa có hash để verify!");
    const ok = bcrypt.compareSync(password, hash);
    setVerifyResult(ok);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px" }}>
      <h2>BCrypt Hash Demo</h2>

      <label>Mật khẩu:</label>
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ width: "100%", marginBottom: "10px" }}
      />

      <label>Work factor (log_rounds):</label>
      <input
        type="number"
        value={logRounds}
        min={4}
        max={15}
        onChange={(e) => setLogRounds(parseInt(e.target.value))}
        style={{ width: "100%", marginBottom: "12px" }}
      />

      <button onClick={handleHash} style={{ marginRight: "10px" }}>
        Tạo BCrypt Hash
      </button>

      <button onClick={handleVerify}>Verify mật khẩu</button>

      <div style={{ marginTop: "20px" }}>
        <h4>Hash (lưu vào DB):</h4>
        <textarea
          value={hash}
          rows={3}
          style={{ width: "100%" }}
        />
      </div>

      {verifyResult !== null && (
        <h4>
          Kết quả verify:{" "}
          <span style={{ color: verifyResult ? "green" : "red" }}>
            {verifyResult ? "ĐÚNG MẬT KHẨU" : "SAI MẬT KHẨU"}
          </span>
        </h4>
      )}
    </div>
  );
}
