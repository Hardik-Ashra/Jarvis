import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";

const Homepage = () => {
  const [typingStatus, setTypingStatus] = useState("human1");

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 flex flex-col items-center justify-between px-4 py-8 sm:px-6 md:px-8 lg:px-12 xl:px-24 2xl:px-32 relative overflow-hidden">
      <img
        src="/orbital.png"
        alt="Orbital"
        className="absolute inset-0  object-cover opacity-[0.07] z-0 animate-orbital-glow"
      />
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center flex-grow w-full max-w-sm xs:max-w-md sm:max-w-xl md:max-w-4xl lg:max-w-6xl xl:max-w-7xl 2xl:max-w-[80rem] mx-auto gap-y-10 md:gap-y-0 md:gap-x-16 lg:gap-x-24 xl:gap-x-28 2xl:gap-x-32 py-10 sm:py-16 md:py-20 lg:py-24">
        <div className="left flex flex-col items-center md:items-start text-center md:text-left space-y-4 sm:space-y-5 lg:space-y-6 flex-1">
          <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[5.5rem] 2xl:text-[6.5rem] font-extrabold text-blue-400 drop-shadow-lg animate-fade-in-down leading-tight">
            JARVIS
          </h1>
          <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[2.8rem] 2xl:text-[3.5rem] font-bold text-gray-50 leading-snug sm:leading-tight animate-fade-in-up delay-200">
            Supercharge your creativity and productivity
          </h2>
          <h3 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-xl 2xl:text-xl text-gray-300 max-w-[280px] xs:max-w-[320px] sm:max-w-md lg:max-w-lg xl:max-w-[38rem] 2xl:max-w-[42rem] animate-fade-in-up delay-400">
            Dive into the future of AI. Seamlessly integrate powerful tools to enhance your daily workflow and unlock new possibilities.
          </h3>
          <Link
            to="/dashboard"
            className="mt-6 px-6 py-2.5 sm:px-8 sm:py-3 md:px-10 md:py-4 lg:px-12 lg:py-5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 animate-fade-in-up delay-600 text-base sm:text-lg lg:text-xl xl:text-lg 2xl:text-xl"
          >
            Get Started
          </Link>
        </div>

        <div className="right flex-1 flex justify-center items-center relative pt-8 pb-16 md:py-0">
          <div className="imgContainer relative w-60 h-60 xs:w-72 xs:h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px] xl:w-[480px] xl:h-[480px] 2xl:w-[550px] 2xl:h-[550px] flex justify-center items-center">
            <div className="absolute inset-0 rounded-full animate-pulse-slow blur-2xl bg-gradient-to-br from-blue-500 to-purple-600 opacity-40"></div>
            <div className="absolute inset-0 rounded-full animate-pulse-slow-reverse blur-xl bg-gradient-to-tl from-green-400 to-teal-500 opacity-30"></div>
            <img
              src="/bot1.png"
              alt="Bot"
              className="relative z-10 w-full h-full object-contain rounded-full shadow-2xl  animate-scale-in"
            />
            <div className=" hidden sm:flex  chat absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 sm:translate-y-2/5 md:translate-y-1/3 lg:translate-y-1/4 xl:translate-y-[15%] 2xl:translate-y-[12%] bg-gray-800 border border-gray-700 rounded-lg px-3 py-1.5 sm:px-4 sm:py-2  items-center space-x-2 shadow-xl max-w-[200px] xs:max-w-[240px] sm:max-w-[280px] md:max-w-xs lg:max-w-sm xl:max-w-md 2xl:max-w-lg z-20 animate-slide-in-up delay-1000">
              <img
                src={
                  typingStatus === "human1"
                    ? "/human1.jpeg"
                    : typingStatus === "human2"
                      ? "/human2.jpeg"
                      : "/bot.png"
                }
                alt="Chat Avatar"
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full object-cover border-2 border-blue-500"
              />
              <TypeAnimation
                sequence={[
                  "User: Hello",
                  1500,
                  () => { setTypingStatus("bot"); },
                  1000,
                  "Bot: Hi! How can I help you?",
                  1500,
                  () => { setTypingStatus("human1"); },
                  1000,
                  "User: I need some information",
                  1500,
                  () => { setTypingStatus("bot"); },
                  1000,
                  "Bot: Sure, ask me anything!",
                  1500,
                ]}
                wrapper="span"
                repeat={Infinity}
                cursor={true}
                className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-lg 2xl:text-xl font-medium text-white"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="terms relative z-10 flex flex-col md:flex-row items-center justify-center md:justify-between w-full max-w-sm xs:max-w-md sm:max-w-xl md:max-w-4xl lg:max-w-6xl xl:max-w-7xl 2xl:max-w-[80rem] mx-auto py-6 border-t border-gray-700 mt-10 sm:mt-12 md:mt-16 lg:mt-20">
        <img src="/logo.png" alt="Logo" className="h-8 sm:h-10 md:h-12 lg:h-14 mb-3 md:mb-0 animate-fade-in delay-1500" />
        <div className="links flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 text-sm sm:text-base md:text-lg xl:text-base 2xl:text-lg text-gray-400 animate-fade-in delay-1700">
          <Link to="/" className="hover:text-blue-400 transition-colors duration-300">
            Terms of Service
          </Link>
          <span className="text-gray-500 hidden sm:block">|</span>
          <Link to="/" className="hover:text-blue-400 transition-colors duration-300">
            Privacy Policy
          </Link>
        </div>
      </div>

      <style jsx>{`
        /* Existing Animations */
        @keyframes fadeInDown { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes pulseSlow { 0%, 100% { transform: scale(1); opacity: 0.4; } 50% { transform: scale(1.05); opacity: 0.6; } }
        @keyframes pulseSlowReverse { 0%, 100% { transform: scale(1.05); opacity: 0.3; } 50% { transform: scale(1); opacity: 0.5; } }
        .animate-fade-in-down { animation: fadeInDown 1s ease-out forwards; }
        .animate-pulse-slow { animation: pulseSlow 4s infinite ease-in-out; }
        .animate-pulse-slow-reverse { animation: pulseSlowReverse 4s infinite ease-in-out; }

        /* NEW ANIMATIONS */
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slideInUp { from { opacity: 0; transform: translateY(50px) translateX(-50%); } to { opacity: 1; transform: translateY(var(--tw-translate-y, 0)) translateX(-50%); } }
        @keyframes scaleIn { from { opacity: 0; transform: scale(0.8); } to { opacity: 1; transform: scale(1); } }
      @keyframes orbitalGlowRotate {
0% { opacity: 0.07; transform: scale(1) rotate(0deg); }
50% { opacity: 0.1; transform: scale(1.01) rotate(180deg); }
100% { opacity: 0.07; transform: scale(1) rotate(360deg); }
}
        .animate-fade-in { animation: fadeIn 0.8s ease-out forwards; }
        .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
        .animate-slide-in-up { animation: slideInUp 0.8s ease-out forwards; }
        .animate-scale-in { animation: scaleIn 0.8s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards; }
       /* Combined Orbital Animation (Glow + Rotate) /

.animate-orbital-glow { animation: orbitalGlowRotate 20s infinite linear; }
        /* Delay utilities - Keep these */
        .delay-200 { animation-delay: 0.2s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-800 { animation-delay: 0.8s; }
        .delay-1000 { animation-delay: 1s; }
        .delay-1200 { animation-delay: 1.2s; }
        .delay-1500 { animation-delay: 1.5s; }
        .delay-1700 { animation-delay: 1.7s; }
        .delay-2000 { animation-delay: 2s; }

        /* Ensure animations are not visible initially */
        .animate-fade-in-down,
        .animate-fade-in-up,
        .animate-slide-in-up,
        .animate-scale-in,
        .animate-fade-in {
          opacity: 0;
        }

      `}</style>
    </div>
  );
};

export default Homepage;