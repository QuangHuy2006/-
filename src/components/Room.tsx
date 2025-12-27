import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

type Socket = {
  socketId: string;
  studentName: string;
  studentId: number;
};
type StudentItem = {
  id: number;
  examRoomId: number;
  studentId: number;
  student: {
    id: number;
    fullName: string;
    avatar: string;
    email: string;
    studentCode: string;
    studentId: string; // cái này là mã định danh khác
    phone?: string;
    dob?: string;
  };
};
const sendMessageToStudent = (s: string, t: string, e: string) =>
  axios.post(
    `https://api.raia.edu.vn/api/rikkei-education-gateway/send-message-event`,
    {
      eventName: s,
      socketId: t,
      data: e,
    }
  );
type ExamRoomResponse = {
  id: number;
  testName: string;
  testStart: string;
  testEnd: string;
  ExamRoomStudent: StudentItem[];
};
export default function Students() {
  const [data, setData] = useState<ExamRoomResponse | null>(null);
  const [socketData, setSocketData] = useState([]);
  const [currentRender, setCurrentRender] = useState("all");
  const [text, setText] = useState("");
  const [socket, setSocket] = useState("");
  const roomID = useSearchParams()[0].get("roomID");
  const API = `https://api.raia.edu.vn/api/exam/${roomID}`;
  const socketAPI =
    "https://api.raia.edu.vn/api/rikkei-education-gateway/list-students";
  const sentVideoAPI = (socket: string) => {
    axios.post(
      "https://api.raia.edu.vn/api/rikkei-education-gateway/send-message-event",
      { eventName: "start_screen_sharing", socketId: socket, data: "" }
    );
  };
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${API}`).then((res) => setData(res.data));
    axios.get(`${socketAPI}?examRoomId=${roomID}`).then((res) => {
      setSocketData(res.data);
    });
  }, []);
  useEffect(() => {
    console.log(currentRender);
  }, [currentRender]);
  const isStudentOnline = (studentName: string) => {
    return socketData.some((s: Socket) => s.studentName === studentName);
  };
  const findStudentSocket = (studentName: string) => {
    const student = socketData.find(
      (s: Socket) => s.studentName === studentName
    );
    return student ? student.socketId : null;
  };
  console.log(socketData);

  return (
    <div className="relative">
      <select onChange={(e) => setCurrentRender(e.target.value)}>
        <option value="all">Tất cả sinh viên</option>
        <option value="online">Sinh viên online</option>
      </select>
      <div
        className="modal hidden fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                bg-white z-50 border-2 p-4 w-fit h-fit 
                flex-col gap-4 rounded-lg shadow-lg border-gray-300"
      >
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>

        <button
          onClick={() => {
            sendMessageToStudent("inbound_msg", socket, text);
            document.querySelector(".modal")?.classList.add("hidden");
            document.querySelector(".modal")?.classList.remove("flex");
          }}
          className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Sent
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 bg-gray-900">
        {currentRender === "all"
          ? data?.ExamRoomStudent?.slice() // clone mảng
              .sort((a, b) => {
                const aOnline = isStudentOnline(a.student.fullName);
                const bOnline = isStudentOnline(b.student.fullName);

                return Number(bOnline) - Number(aOnline);
              })
              .map((st) => (
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border-2 transition-all duration-300 hover:shadow-xl border-red-200 hover:border-red-300">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="relative">
                      <img
                        alt=""
                        className="w-16 h-16 rounded-full border-4 border-white shadow-md"
                        src=""
                      />
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full border-2 border-white flex items-center justify-center">
                        {isStudentOnline(st.student.fullName) ? "🟢" : "🔴"}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                        {st.student.fullName}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {st.student.studentCode}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-500">
                        {st.student.email}
                      </p>
                    </div>
                    <div
                      className="bg-red-100 text-red-800 px-3 py-1 rounded-full cursor-pointer hover:bg-red-200 transition-colors"
                      title="Click để xem chi tiết vi phạm"
                    >
                      <span className="text-sm font-semibold">⚠️ 2</span>
                    </div>
                  </div>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Trạng thái:</span>
                      <span
                        className={`text-sm font-semibold ${
                          isStudentOnline(st.student.fullName)
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {isStudentOnline(st.student.fullName)
                          ? "🟢 Online"
                          : "🔴 Offline"}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Socket ID:</span>
                      <span className="text-xs text-gray-500 font-mono">
                        {findStudentSocket(st.student.fullName)}
                      </span>
                    </div>
                    <div className="mt-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                      <div className="text-xs font-medium text-blue-800 dark:text-blue-200 mb-2">
                        📶 Thông tin kết nối
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-blue-700 dark:text-blue-300">
                            WiFi:
                          </span>
                          <span className="text-xs text-blue-800 dark:text-blue-200 font-mono">
                            Nguyen lam huy
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-blue-700 dark:text-blue-300">
                            BSSID:
                          </span>
                          <span className="text-xs text-blue-800 dark:text-blue-200 font-mono">
                            f4:27:56:14:03:c0
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-blue-700 dark:text-blue-300">
                            OS:
                          </span>
                          <span className="text-xs text-blue-800 dark:text-blue-200 font-medium">
                            Windows
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        className={`px-3 py-2 text-xs font-medium rounded-md transition-colors bg-yellow-100 text-yellow-700  ${
                          isStudentOnline(st.student.fullName)
                            ? "hover:bg-yellow-200"
                            : "opacity-50 cursor-not-allowed"
                        }`}
                        disabled={isStudentOnline(st.student.fullName)}
                      >
                        🔒 Khóa màn hình
                      </button>
                      <button
                        className={`px-3 py-2 text-xs font-medium rounded-md transition-colors bg-green-100 text-green-700  ${
                          isStudentOnline(st.student.fullName)
                            ? "hover:bg-green-200"
                            : "opacity-50 cursor-not-allowed"
                        }`}
                        disabled={isStudentOnline(st.student.fullName)}
                      >
                        🔓 Mở khóa màn hình
                      </button>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        className={`px-3 py-2 text-xs font-medium rounded-md transition-colors bg-blue-100 text-blue-700  ${
                          isStudentOnline(st.student.fullName)
                            ? "hover:bg-blue-200"
                            : "opacity-50 cursor-not-allowed"
                        }`}
                        disabled={isStudentOnline(st.student.fullName)}
                      >
                        🔗 Mở trình duyệt
                      </button>
                      <button
                        className={`px-3 py-2 text-xs font-medium rounded-md transition-colors bg-cyan-100 text-cyan-700  ${
                          isStudentOnline(st.student.fullName)
                            ? "hover:bg-cyan-200"
                            : "opacity-50 cursor-not-allowed"
                        }`}
                        disabled={isStudentOnline(st.student.fullName)}
                      >
                        📁 Mở folder video trên máy sinh viên
                      </button>
                    </div>
                    <div className="grid grid-cols-1 gap-2 mt-2">
                      <button
                        className={`px-3 py-2 text-xs font-medium rounded-md transition-colors bg-purple-100 text-purple-700  ${
                          isStudentOnline(st.student.fullName)
                            ? "hover:bg-purple-200"
                            : "opacity-50 cursor-not-allowed"
                        }`}
                        disabled={isStudentOnline(st.student.fullName)}
                      >
                        🎥 Xem Video Máy Sinh Viên
                      </button>
                    </div>
                    <div className="grid grid-cols-1 gap-2 mt-2">
                      <button
                        className={`px-3 py-2 text-xs font-medium rounded-md transition-colors bg-indigo-100 text-indigo-700  ${
                          isStudentOnline(st.student.fullName)
                            ? "hover:bg-indigo-200"
                            : "opacity-50 cursor-not-allowed"
                        }`}
                        disabled={!isStudentOnline(st.student.fullName)}
                        onClick={() => {
                          setSocket(findStudentSocket(st.student.fullName));
                          document
                            .querySelector(".modal")
                            ?.classList.toggle("flex");
                          document
                            .querySelector(".modal")
                            ?.classList.toggle("hidden");
                        }}
                      >
                        ✉️ Gửi tin nhắn
                      </button>
                    </div>
                    <div className="grid grid-cols-1 gap-2 mt-2">
                      <button
                        className={`px-3 py-2 text-xs font-medium rounded-md transition-colors bg-purple-100 text-purple-700  ${
                          isStudentOnline(st.student.fullName)
                            ? "hover:bg-purple-200"
                            : "opacity-50 cursor-not-allowed"
                        }`}
                        disabled={!isStudentOnline(st.student.fullName)}
                        onClick={() => {
                          sentVideoAPI(findStudentSocket(st.student.fullName));
                          navigate(
                            `/screen/?socketId=${findStudentSocket(
                              st.student.fullName
                            )}`
                          );
                        }}
                      >
                        📺 Xem live màn hình
                      </button>
                    </div>
                  </div>
                </div>
              ))
          : socketData?.map((st: Socket) => (
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border-2 transition-all duration-300 hover:shadow-xl border-red-200 hover:border-red-300">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="relative">
                    <img
                      alt=""
                      className="w-16 h-16 rounded-full border-4 border-white shadow-md"
                      src=""
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full border-2 border-white flex items-center justify-center bg-green-500">
                      {isStudentOnline(st.studentName) ? "🟢" : "🔴"}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                      {st.studentName}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400"></p>
                    <p className="text-xs text-gray-500 dark:text-gray-500"></p>
                  </div>
                  <div
                    className="bg-red-100 text-red-800 px-3 py-1 rounded-full cursor-pointer hover:bg-red-200 transition-colors"
                    title="Click để xem chi tiết vi phạm"
                  >
                    <span className="text-sm font-semibold">⚠️ 2</span>
                  </div>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Trạng thái:</span>
                    <span
                      className={`text-sm font-semibold ${
                        isStudentOnline(st.studentName)
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {isStudentOnline(st.studentName)
                        ? "🟢 Online"
                        : "🔴 Offline"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Socket ID:</span>
                    <span className="text-xs text-gray-500 font-mono">
                      {st.socketId}
                    </span>
                  </div>
                  <div className="mt-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                    <div className="text-xs font-medium text-blue-800 dark:text-blue-200 mb-2">
                      📶 Thông tin kết nối
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-blue-700 dark:text-blue-300">
                          WiFi:
                        </span>
                        <span className="text-xs text-blue-800 dark:text-blue-200 font-mono">
                          Nguyen lam huy
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-blue-700 dark:text-blue-300">
                          BSSID:
                        </span>
                        <span className="text-xs text-blue-800 dark:text-blue-200 font-mono">
                          f4:27:56:14:03:c0
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-blue-700 dark:text-blue-300">
                          OS:
                        </span>
                        <span className="text-xs text-blue-800 dark:text-blue-200 font-medium">
                          Windows
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="grid grid-cols-2 gap-2">
                    <button className="px-3 py-2 text-xs font-medium rounded-md transition-colors bg-yellow-100 text-yellow-700 hover:bg-yellow-200">
                      🔒 Khóa màn hình
                    </button>
                    <button className="px-3 py-2 text-xs font-medium rounded-md transition-colors bg-green-100 text-green-700 hover:bg-green-200">
                      🔓 Mở khóa màn hình
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <button className="px-3 py-2 text-xs font-medium rounded-md transition-colors bg-blue-100 text-blue-700 hover:bg-blue-200">
                      🔗 Mở trình duyệt
                    </button>
                    <button className="px-3 py-2 text-xs font-medium rounded-md transition-colors bg-cyan-100 text-cyan-700 hover:bg-cyan-200">
                      📁 Mở folder video trên máy sinh viên
                    </button>
                  </div>
                  <div className="grid grid-cols-1 gap-2 mt-2">
                    <button className="px-3 py-2 text-xs font-medium rounded-md transition-colors bg-purple-100 text-purple-700 hover:bg-purple-200">
                      🎥 Xem Video Máy Sinh Viên
                    </button>
                  </div>
                  <div className="grid grid-cols-1 gap-2 mt-2">
                    <button
                      className="px-3 py-2 text-xs font-medium rounded-md transition-colors bg-indigo-100 text-indigo-700 hover:bg-indigo-200"
                      onClick={() => {
                        setSocket(st.socketId);
                        document
                          .querySelector(".modal")
                          ?.classList.toggle("flex");
                        document
                          .querySelector(".modal")
                          ?.classList.toggle("hidden");
                      }}
                    >
                      ✉️ Gửi tin nhắn
                    </button>
                  </div>
                  <div className="grid grid-cols-1 gap-2 mt-2">
                    <button
                      className="px-3 py-2 text-xs font-medium rounded-md transition-colors bg-purple-100 text-purple-700 hover:bg-purple-200"
                      onClick={() => {
                        sentVideoAPI(st.socketId);
                        navigate(
                          `/screen/?socketId=${st.socketId}&studentId=${st.studentId}&examRoomId=${roomID}&fileName=screen.mp4`
                        );
                      }}
                    >
                      📺 Xem live màn hình
                    </button>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
}
