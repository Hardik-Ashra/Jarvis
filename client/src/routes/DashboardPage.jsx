import React from 'react';
import { SendHorizonal } from 'lucide-react';

const DashboardPage = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="flex-1 flex flex-col items-center justify-center w-full max-w-sm sm:max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-3xl gap-y-12 sm:gap-y-16 lg:gap-y-20">
        <div className="flex items-center gap-2 opacity-20"> 
          <img src="/logo.png" alt="JARVIS Logo" className="w-16 h-16 object-contain" />
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold dashboard-gradient-text">
            JARVIS
          </h1>
        </div>
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-10">
          <div className="option flex flex-col gap-3 font-light text-sm p-4 border border-border-medium rounded-2xl flex-1 text-center items-center cursor-pointer hover:bg-background-tertiary transition-colors duration-200">
            <img src="/logo.png" alt="AI Option" className="w-10 h-10 object-cover rounded-md" />
            <span>Generate Slogans</span>
          </div>
          <div className="option flex flex-col gap-3 font-light text-sm p-4 border border-border-medium rounded-2xl flex-1 text-center items-center cursor-pointer hover:bg-background-tertiary transition-colors duration-200">
            <img src="/code.png" alt="Code Option" className="w-10 h-10 object-cover rounded-md" />
            <span>Write Code Snippets</span>
          </div>
          <div className="option flex flex-col gap-3 font-light text-sm p-4 border border-border-medium rounded-2xl flex-1 text-center items-center cursor-pointer hover:bg-background-tertiary transition-colors duration-200">
            <img src="/image.png" alt="Text Option" className="w-10 h-10 object-cover rounded-md" />
            <span>Summarize Documents</span>
          </div>
        </div>
      </div>


      <div className="w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl bg-background-tertiary rounded-2xl flex mb-4">
        <form className="w-full h-full flex items-center justify-between ">
          <input
            type="text"
            placeholder="Ask JARVIS anything..."
            className="flex-1 px-4 bg-transparent border-none outline-none text-text-primary placeholder-text-secondary"
          />
          <button
            type="submit"
            className="bg-accent hover:bg-accent-light text-text-inverted rounded-full border-none cursor-pointer p-3 sm:p-4 flex items-center justify-center mr-2 sm:mr-3 transition-colors duration-200"
            aria-label="Send message"
          >
            <SendHorizonal size={20} className="text-white" />
          </button>
        </form>
      </div>
      <style jsx>{`
        .dashboard-gradient-text {
          background: linear-gradient(to right, #217bfe, #e55571);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
      `}</style>
    </div>
  );
};

export default DashboardPage;
