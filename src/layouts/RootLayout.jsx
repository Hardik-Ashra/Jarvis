import { Link, Outlet } from 'react-router-dom';
import { ClerkProvider, SignedIn, UserButton } from "@clerk/clerk-react";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

const RootLayout = () => {
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl='/'>
      <div className="min-h-screen flex flex-col bg-gray-950 text-gray-100 font-sans antialiased">
        <header className="px-4 sm:px-8 py-3 flex items-center justify-between border-b border-gray-800 backdrop-blur-lg bg-gray-950/60 z-20 max-md:justify-end">
          <Link
            to="/"
            className="hidden md:flex items-center gap-3 font-bold text-xl text-indigo-300 tracking-tight transition-colors duration-300 hover:text-indigo-200"
          >
            <img src="/logo.png" alt="JARVIS Logo" className="w-9 h-9 object-contain" />
            <span>JARVIS</span>
          </Link>
          <div >
            <SignedIn>
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: "!w-10 !h-10",
                  },
                }}
              />
            </SignedIn>
          </div>
        </header>
        <main className="flex-1 flex items-center justify-center p-0">
          <div className="w-full h-full">
            <Outlet />
          </div>
        </main>
      </div>
    </ClerkProvider >
  );
};

export default RootLayout;