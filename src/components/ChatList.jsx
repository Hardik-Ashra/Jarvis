import { Link, useLocation } from "react-router-dom";
import { PlusCircle, Compass, Mail, MessageSquare } from 'lucide-react';
import { UserButton } from "@clerk/clerk-react"; // Import UserButton from Clerk

const ChatList = ({ setIsSidebarOpen }) => { // Accept setIsSidebarOpen prop
  const location = useLocation();

  const handleLinkClick = () => {
    if (window.innerWidth < 768) { // Only close sidebar on mobile (md breakpoint is 768px by default in Tailwind)
      setIsSidebarOpen(false);
    }
  };

  return (
    <div className="flex flex-col h-full px-2 max-md:pt-10 ">
      <Link
        to="/dashboard"
        className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200 ease-in-out text-base
          ${location.pathname === "/dashboard"
            ? "bg-blue-900/30 text-blue-300 font-medium" // Simpler active state
            : "hover:bg-gray-850 text-gray-400"}`} // Subtler hover
      >
        <PlusCircle size={18} className={`${location.pathname === "/dashboard" ? "text-blue-400" : "text-gray-500"}`} />
        <span>Create New Chat</span> {/* Shorter text */}
      </Link>
      <Link
        to="/"
        onClick={handleLinkClick}
        className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200 ease-in-out text-base mt-2
          ${location.pathname === "/"
            ? "bg-blue-900/30 text-blue-300 font-medium"
            : "hover:bg-gray-850 text-gray-400"}`}
      >
        <Compass size={18} className={`${location.pathname === "/" ? "text-blue-400" : "text-gray-500"}`} />
        <span>Explore JARVIS</span>
      </Link>
      <Link
        to="/contact"
        onClick={handleLinkClick}
        className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200 ease-in-out text-base mt-2
          ${location.pathname === "/contact"
            ? "bg-blue-900/30 text-blue-300 font-medium"
            : "hover:bg-gray-850 text-gray-400"}`}
      >
        <Mail size={18} className={`${location.pathname === "/contact" ? "text-blue-400" : "text-gray-500"}`} />
        <span>Contact Us</span> {/* Shorter text */}
      </Link>

      <hr className="border-none h-px bg-gray-800 my-6 opacity-60 rounded-full" /> {/* Slightly less opaque */}

      <span className="text-sm font-semibold text-gray-500 uppercase mb-4 tracking-widest"> {/* Adjusted margin-bottom */}
        Recent Chats
      </span>
      <div className="flex flex-col custom-scrollbar overflow-y-scroll flex-grow pr-2 space-y-2">
       
        {[...Array(30)].map((_, index) => (
          <Link
            key={index}
            to={`/chat/${index + 1}`}
            onClick={handleLinkClick}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors duration-200 text-sm
              ${location.pathname === `/chat/${index + 1}`
                ? "bg-blue-900/20 text-blue-400" // Even subtler active state
                : "hover:bg-gray-900 text-gray-400"}`}
          >
            <MessageSquare size={16} className={`${location.pathname === `/chat/${index + 1}` ? "text-blue-500" : "text-gray-600"}`} /> {/* Smaller icon */}
            <span>My Chat {index + 1}</span>
          </Link>
        ))}
      </div>
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

export default ChatList;