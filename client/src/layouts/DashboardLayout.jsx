import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import { Menu, X} from 'lucide-react';
import ChatList from "../components/ChatList"; // Assuming ChatList is in ../components/

const DashboardLayout = () => {
  const { userId, isLoaded } = useAuth();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (isLoaded && !userId) {
      navigate("/sign-in");
    }
  }, [isLoaded, userId, navigate]);

  if (!isLoaded) {
    return (
      <div className="flex h-[90%] items-center justify-center  bg-gray-950 font-sans">
        <div className="flex flex-col items-center space-y-4"> {/* Slightly adjusted spacing */}
          <div className="relative w-16 h-16"> {/* Smaller, more minimalistic spinner */}
            <div className="absolute inset-0 rounded-full border-4 border-t-4 border-blue-600 animate-spin-slow-simple"></div>
          </div>
          <span className="text-gray-400 text-base sm:text-lg font-medium tracking-wide">Loading JARVIS...</span> {/* Subtler text */}
        </div>
        <style jsx>{`
          @keyframes spin-slow-simple {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          .animate-spin-slow-simple { animation: spin-slow-simple 2s linear infinite; } /* Slower, single-layer spin */
        `}</style>
      </div>
    );
  }

  return (
    <div className="h-[90vh] w-full flex flex-col md:grid md:grid-cols-[280px_1fr]  text-gray-100 font-sans relative overflow-hidden">
      <img
        src="/orbital.png"
        alt="Orbital Background"
        className="absolute inset-0 object-cover opacity-[0.02] z-0 animate-orbital-glow-dashboard" // Reduced opacity
      />
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="md:hidden fixed top-4 left-5 p-2   z-50 text-gray-300" // Added subtle background
        aria-label="Toggle sidebar"
      >
        {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      <div
        className={`fixed top-0 bottom-0 left-0 w-60 bg-gray-900 border-r border-gray-800 z-40 transform transition-transform duration-300 ease-in-out py-6
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:relative md:translate-x-0 md:flex custom-scrollbar overflow-y-auto md:flex-col md:w-[280px] md:bg-gray-950 md:border-r md:border-gray-800`} // Adjusted width and removed max-sm:top-10
      >
        <ChatList setIsSidebarOpen={setIsSidebarOpen} /> 
      </div>

      {isSidebarOpen && (
        <div
          className="fixed inset-0  bg-opacity-60 md:hidden z-30" 
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

 
      <div className="content relative z-10 w-full h-[90vh]  bg-gray-950 p-4 md:p-6 lg:p-8">
        <Outlet />
      </div>

      {/* Specific orbital glow animation for dashboard */}
      <style jsx>{`
        /* Existing Animations for Loading Spinner */
        @keyframes spin-slow-simple {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-spin-slow-simple { animation: spin-slow-simple 2s linear infinite; }

        /* Dashboard specific orbital glow - even more subtle rotation and opacity change */
        @keyframes orbitalGlowRotateDashboard {
            0% { opacity: 0.02; transform: scale(1) rotate(0deg); }
            50% { opacity: 0.03; transform: scale(1.002) rotate(180deg); } /* Less scale change */
            100% { opacity: 0.02; transform: scale(1) rotate(360deg); }
        }
        .animate-orbital-glow-dashboard { animation: orbitalGlowRotateDashboard 30s infinite linear; } /* Slower animation */
      `}</style>
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          display: none;
      }
        .custom-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>
    </div>
  );
};

export default DashboardLayout;