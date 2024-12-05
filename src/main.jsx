import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import MainLayout from './MainLayout';
import HomePage from './pages/HomePage';
import AddVisaPage from './pages/AddVisaPage';
import AllVisaPage from './pages/AllVisaPage';
import MyAddedVisaPage from './pages/MyAddedVisaPage';
import MyVisaApplicationPage from './pages/MyVisaApplicationPage';
import ErrorPage from './pages/ErrorPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';

const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout></MainLayout>,
      children: [
        {
          path: '/',
          element: <Navigate to='/homePage' />,
        },
        {
          path: '/homePage',
          element: <HomePage></HomePage>,
        },
        {
          path: '/addVisaPage',
          element: <AddVisaPage></AddVisaPage>,
        },
        {
          path: '/allVisaPage',
          element: <AllVisaPage></AllVisaPage>,
        },
        {
          path: '/myAddedVisaPage',
          element: <MyAddedVisaPage></MyAddedVisaPage>,
        },
        {
          path: '/myVisaApplicationPage',
          element: <MyVisaApplicationPage></MyVisaApplicationPage>,
        },
        {
          path: '/registerPage',
          element: <RegisterPage></RegisterPage>,
        },
        {
          path: '/loginPage',
          element: <LoginPage></LoginPage>,
        }
      ]
    },
    {
      path: '/*',
      element: <ErrorPage></ErrorPage>
    }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
