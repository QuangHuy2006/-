import React, { useState } from "react";
import bcrypt from "bcryptjs";

export default function GeneratePassword() {
  const [password, setPassword] = useState("");
  const [hashed, setHashed] = useState("");
  const [bcryptInput, setBcryptInput] = useState("");

  // Random password
  const generateRandomPassword = (length = 12) => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
    let pass = "";
    for (let i = 0; i < length; i++) {
      pass += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return pass;
  };

  // Generate & hash
  const generateAndHash = () => {
    const newPass = generateRandomPassword(12);
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(newPass, salt);
    setPassword(newPass);
    setHashed(hash);
  };

  return (
    <div style={{ padding: 20, fontFamily: "sans-serif" }}>
      <h2>🔐 Generate & Bcrypt Password</h2>

      <textarea
        placeholder="Nhập bcrypt để kiểm tra..."
        style={{ width: "100%", padding: 10 }}
        value={bcryptInput}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          setBcryptInput(e.target.value)
        }
      ></textarea>

      <button
        onClick={generateAndHash}
        style={{
          marginTop: 10,
          padding: "10px 20px",
          background: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Generate Password
      </button>

      <button
        onClick={() => {
          const match = bcrypt.compareSync(password, bcryptInput);
          alert(match ? "🎉 Khớp!" : "❌ Không khớp.");
        }}
        style={{
          marginTop: 10,
          padding: "10px 20px",
          background: "green",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Check Match
      </button>

      {password && (
        <div style={{ marginTop: 20 }}>
          <p><strong>Mật khẩu:</strong> {password}</p>
          <p><strong>Bcrypt Hash:</strong></p>
          <textarea
            rows={3}
            style={{ width: "100%" }}
            value={hashed}
            readOnly
          ></textarea>
        </div>
      )}
    </div>
  );
}
