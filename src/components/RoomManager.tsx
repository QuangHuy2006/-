import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from 'lucide-react';

const API = "https://api.raia.edu.vn/api/exam";
type Room = {
  classCode: string;
  classId: number;
  className: string;
  courseCode: string;
  courseId: number;
  courseName: string;
  examRoomType: string;
  id: number;
  status: string;
  testEnd: Date;
  testName: string;
  testStart: Date;
  type: string;
};
export default function Students() {
  const navigate = useNavigate();
  const [data, setData] = useState<Room[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;
  useEffect(() => {
    axios.get(`${API}?page=${currentPage}&limit=10`).then((res) => setData(res.data));
  }, [currentPage]);

  return (
    <div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Thông Tin Kỳ Thi
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Thời gian
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Lớp & Khóa học
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Trạng thái
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Hoạt động
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data?.data?.map((room: Room) => (
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap">
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <div className="text-sm font-medium text-gray-900">
                      {room.testName} {room.type}
                    </div>
                    <span className="inline-flex items-center px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                      🏫 🏫 Học
                    </span>
                  </div>
                  <div className="text-sm text-gray-500">
                    ID: {room.id} • Loại: {room.examRoomType}
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900 space-y-1">
                  <div>
                    <span className="font-medium">Bắt đầu:</span>
                    <div className="text-gray-500">
                      {new Date(room.testStart).toLocaleString("vi-VN", {
                        hour: "2-digit",
                        minute: "2-digit",
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric",
                      })}
                    </div>
                  </div>
                  <div>
                    <span className="font-medium">Kết thúc:</span>
                    <div className="text-gray-500">
                      {new Date(room.testEnd).toLocaleString("vi-VN", {
                        hour: "2-digit",
                        minute: "2-digit",
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric",
                      })}
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900 space-y-1">
                  <div>
                    <span className="font-medium">Lớp:</span>
                    <div className="text-gray-500">
                      {room.className} ({room.classCode})
                    </div>
                  </div>
                  <div>
                    <span className="font-medium">Khóa học:</span>
                    <div className="text-gray-500">
                      [{room.courseCode}] - {room.courseName} ({room.courseId})
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span
                  className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                    room.status === "CLOSE"
                      ? "bg-red-100 text-red-800"
                      : "bg-green-100 text-green-800"
                  }`}
                >
                  {room.status === "CLOSE"
                    ? "🔴 Đã kết thúc buổi học"
                    : "🟢 Online"}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center space-x-2">
                  <button
                    className="px-3 py-1 text-sm font-medium text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-md transition-colors"
                    title="Mở quản lý phòng thi trong tab mới"
                    onClick={() => navigate(`/students/?roomID=${room.id}`)}
                  >
                    🆕 Mở quản lý
                  </button>
                  <button
                    className="px-2 py-1 text-xs font-medium text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                    title="Ẩn phòng thi này khỏi danh sách"
                  >
                    👁️‍🗨️ Ẩn
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="w-8 h-8 flex items-center justify-center rounded border border-transparent text-white hover:text-red-500 hover:border-red-500 disabled:text-gray-600 disabled:hover:border-transparent disabled:hover:text-gray-600 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-8 h-8 flex items-center justify-center rounded border transition-colors ${
                page === currentPage
                  ? "bg-red-500 border-red-500 text-white"
                  : "bg-[#242837] border-transparent text-white hover:border-red-500 hover:text-red-500"
              }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="w-8 h-8 flex items-center justify-center rounded border border-transparent text-white hover:text-red-500 hover:border-red-500 disabled:text-gray-600 disabled:hover:border-transparent disabled:hover:text-gray-600 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
