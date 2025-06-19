// src/pages/dashboard/DashboardLayout.js

import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";
import { useEffect } from "react";
// import ChatList from "../../components/chatList/ChatList";


const DashboardLayout = () => {
  const { userId, isLoaded } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (isLoaded && !userId) {
      navigate("/sign-in");
    }
  }, [isLoaded, userId, navigate]);
  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-950">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <div className="h-screen w-full grid md:grid-cols-[300px_1fr] bg-gray-950 text-gray-100">
      
      {/* Left Column: Chat List Menu */}
      {/* This container will handle its own scrolling if the chat list is long */}
      {/* <div className="menu hidden md:flex flex-col h-full bg-gray-900/50 border-r border-gray-800">
        <ChatList />
      </div> */}

      {/* Right Column: Main Content */}
      {/* The Outlet renders the active nested route (e.g., the chat interface) */}
      {/* overflow-y-auto allows this panel to scroll independently */}
      <div className="content w-full h-full overflow-y-auto">
        <Outlet />
      </div>

    </div>
  );
};

export default DashboardLayout;