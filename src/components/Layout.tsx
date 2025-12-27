import type { PropsWithChildren } from "react";
export default function Layout({ children }: PropsWithChildren) {
  return (
    <div>
      <header className="sticky top-0 z-50 border-b bg-gray-800 border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-white">RAIA QL v2</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button
                className="p-2 rounded-lg transition-all duration-300 hover:scale-110 bg-yellow-500 text-yellow-900 hover:bg-yellow-400"
                title="Chuyển sang sáng mode"
              >
                <span className="text-lg">☀️</span>
              </button>
              <div className="text-sm text-gray-300">
                Xin chào, <span className="font-medium">???</span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className=" p-4">{children}</main>
    </div>
  );
}
