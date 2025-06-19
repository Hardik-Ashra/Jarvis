import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './routes/homepage/HomePage.jsx'
import DashboardPage from './routes/dashboardPage/DashboardPage.jsx'
import ChatPage from './routes/chatPage/ChatPage.jsx'
import RootLayout from './layouts/rootLayout/RootLayout.jsx'
import DashboardLayout from './layouts/dashboardLayout.jsx/DashboardLayout.jsx'
import SignInPage from './routes/signInPage/signInPage.jsx'
import SignUpPage from './routes/signUpPage/signUpPage.jsx'
import '@fontsource/inter/400.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
       {
        path: "/sign-in/*",
        element: <SignInPage />,
      },
      {
        path: "/sign-up/*",
        element: <SignUpPage />,
      },
      {
        element: <DashboardLayout />,
        children: [
          {
            path: "/dashboard",
            element: <DashboardPage />,
          },
          {
            path: "/dashboard/chats/:id",
            element: <ChatPage />,
          },
        ],
      },
    ],
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
