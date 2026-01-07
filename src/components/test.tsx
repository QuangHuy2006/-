import { useState, useEffect } from "react";
import { Card, Typography, Space, Spin, Alert } from "antd";

const { Text } = Typography;

const TEST_ID = 177;
interface OptionTest {
  id: number;
  content: string;
  isCorrect: boolean;
  created_at: string;
}
const ACCESS_TOKEN: string =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJpa2tlaXJkQGdtYWlsLmNvbSIsIm5hbWUiOiJSJkQiLCJpZCI6ODMsInJvbGUiOlt7ImlkIjoxLCJuYW1lIjoiQURNSU4ifSx7ImlkIjoyLCJuYW1lIjoiTUFOQUdFUiJ9LHsiaWQiOjMsIm5hbWUiOiJURUFDSEVSIn0seyJpZCI6NCwibmFtZSI6IlRFQUNIRVJfQVNTSVNUQU5UIn0seyJpZCI6NSwibmFtZSI6IkdVRVNUIn1dLCJ0eXBlIjoidXNlciIsImlhdCI6MTc2Nzc4NDQyMSwiZXhwIjoxNzY3ODcwODIxfQ.StE0CLXpl-PnuYXpL3nBLuA-TNFmeNlcrtdWllpUnWQ";
// **************************************************************************
interface QuestionTest {
  id: number;
  content: string;
  type: string; // Vd: "MỘT LỰA CHỌN"
  status: boolean;
  point: number;
  difficulty: number;
  optionTests: OptionTest[];
}
interface TestDetails {
  id: number;
  testName: string;
  status: boolean; // Đã đổi từ string sang boolean
  time: number;
  type: string;
  created_at: string;
  questionTests: QuestionTest[]; // Dữ liệu câu hỏi chi tiết
  // Thêm các trường khác nếu có
  [key: string]: unknown;
}
export default function QuizPage() {
  const [testData, setTestData] = useState<TestDetails | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    async function fetchTest() {
      setLoading(true);
      try {
        const res = await fetch(`/api-rikkei/tests/${TEST_ID}`, {
          headers: {
            Authorization: `Bearer ${ACCESS_TOKEN}`,
            Accept: "application/json",
          },
        });
        const json = await res.json();
        setTestData(json.data);
      } catch {
        setError("Không thể tải đề thi");
      } finally {
        setLoading(false);
      }
    }
    fetchTest();
  }, []);

  if (loading) {
    return <Spin fullscreen tip="Đang tải đề thi..." />;
  }

  if (error) {
    return <Alert type="error" message={error} />;
  }

  if (!testData) return null;

  return (
    <>
      {testData.questionTests.map((q, index) => (
        <Card key={q.id} style={{ marginBottom: 16 }}>
          <Space direction="vertical" style={{ width: "100%" }}>
            <Text strong>
              Câu {index + 1}: {q.content}
            </Text>

            <Space direction="vertical" style={{ width: "100%" }}>
              {q.optionTests.map((opt) => (
                <div
                  key={opt.id}
                  style={{
                    padding: "8px 12px",
                    borderRadius: 6,
                    border: "1px solid",
                    borderColor: opt.isCorrect ? "#b7eb8f" : "#d9d9d9",
                    backgroundColor: opt.isCorrect ? "#f6ffed" : "#fff",
                    color: opt.isCorrect ? "#389e0d" : "#000",
                    fontWeight: opt.isCorrect ? 600 : 400,
                  }}
                >
                  {opt.isCorrect ? "✅ " : ""}
                  {opt.content}
                </div>
              ))}
            </Space>

            <Text type="secondary">Điểm câu này: {q.point}</Text>
          </Space>
        </Card>
      ))}
    </>
  );
}
