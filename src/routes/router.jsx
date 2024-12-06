import { createBrowserRouter, Navigate } from 'react-router-dom'
import MainLayout from '../MainLayout';
import HomePage from '../pages/HomePage';
import AddVisaPage from '../pages/AddVisaPage';
import AllVisaPage from '../pages/AllVisaPage';
import MyAddedVisaPage from '../pages/MyAddedVisaPage';
import MyVisaApplicationPage from '../pages/MyVisaApplicationPage';
import ErrorPage from '../pages/ErrorPage';
import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';
import PrivateRoute from './PrivateRoute';

const root_dir = 'http://localhost:5000';

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
          path: '/allVisaPage',
          element: <AllVisaPage></AllVisaPage>,
          loader: () => fetch(`${root_dir}/visas`)
        },
        {
            path: '/addVisaPage',
            element: <PrivateRoute>
              <AddVisaPage></AddVisaPage>
            </PrivateRoute>,
        },
        {
          path: '/myAddedVisaPage',
          element: <PrivateRoute>
            <MyAddedVisaPage></MyAddedVisaPage>
          </PrivateRoute>,
        },
        {
          path: '/myVisaApplicationPage',
          element: <PrivateRoute>
            <MyVisaApplicationPage></MyVisaApplicationPage>
          </PrivateRoute>,
        },
        {
          path: '/registerPage',
          element: <RegisterPage></RegisterPage>,
        },
        {
          path: '/loginPage',
          element: <LoginPage></LoginPage>,
        },
      ]
    },
    {
      path: '/*',
      element: <ErrorPage></ErrorPage>
    }
]);

export default router;