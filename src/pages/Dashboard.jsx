import { useState } from "react"
import { useSelector } from "react-redux"
import { Outlet } from "react-router-dom"
import { Menu, X } from "lucide-react"
import Sidebar from "../components/core/Dashboard/Sidebar"

function Dashboard() {
  const { loading: profileLoading } = useSelector((state) => state.profile)
  const { loading: authLoading } = useSelector((state) => state.auth)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  if (profileLoading || authLoading) {
    return (
      <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
        <div className="spinner"></div>
      </div>
    )
  }

  return (
    <div className="relative flex h-[calc(100vh-3.5rem)] flex-col md:flex-row">
      {/* Mobile Menu Button (Positioned slightly below navbar) */}
      <button
        className="fixed top-20 left-4 z-50 md:hidden rounded-md bg-white/90 p-2 shadow backdrop-blur-sm"
        onClick={() => setIsSidebarOpen((prev) => !prev)}
      >
        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-40 w-64 transform bg-white shadow-md transition-transform duration-300 md:relative md:translate-x-0 md:shadow-none md:h-full ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Sidebar />
      </div>

      {/* Overlay for mobile when sidebar is open */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black bg-opacity-50 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="mx-auto w-11/12 max-w-[1000px] py-6 sm:py-10">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
