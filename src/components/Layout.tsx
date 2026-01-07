import { NavLink } from "react-router-dom";
import { useEffect, type PropsWithChildren, useState } from "react";
import axios from "axios";

export default function Layout({ children }: PropsWithChildren) {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition
     ${
       isActive
         ? "bg-blue-600 text-white"
         : "text-gray-300 hover:bg-gray-700 hover:text-white"
     }`;
  const [data, setData] = useState([]);
  const [token, setToken] = useState("")
  const auth_token = "https://api.raia.edu.vn/api/auth/test-schedule";
  useEffect(() => {
    axios
      .get(`${auth_token}`, {
        headers: {
          Authorization: "Beare " + token,
        },
      })
      .then((res) => setData(res.data));
      localStorage.setItem("token", token);
  }, [token, data]);

  return (
    <div>
      <header className="sticky top-0 z-50 border-b bg-gray-800 border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-semibold text-white">RICẶC</h1>
            <div>
              <input type="text" value={token} className="rounded" onChange={(e) => setToken(e.target.value)}/>
            </div>

            {/* NAV */}
            <nav className="flex gap-2">
              <NavLink to="/" className={linkClass}>
                Trang chủ
              </NavLink>

              <NavLink to="/teacherData" className={linkClass}>
                Giáo viên
              </NavLink>

              <NavLink to="/students" className={linkClass}>
                Học sinh
              </NavLink>

              <NavLink to="/room" className={linkClass}>
                Phòng
              </NavLink>

              <NavLink to="/screen" className={linkClass}>
                Screen
              </NavLink>
            </nav>
          </div>
        </div>
      </header>

      <main className="p-4">{children}</main>
    </div>
  );
}
