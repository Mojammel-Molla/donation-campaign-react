import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Home from '../Pages/Home/Home';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
// import Donation from '../Pages/Donation/Donation';
import Statistics from '../Pages/Statistics/Statistics';
import DonationCard from '../DonationCard/DonationCard';
import DonatedItems from '../DonatedItems/DonatedItems';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/donation.json'),
      },
      {
        path: '/donation',
        element: <DonatedItems></DonatedItems>,
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>,
      },
      {
        path: '/donation/:id',
        element: <DonationCard></DonationCard>,
        loader: () => fetch('/donation.json'),
      },
    ],
  },
]);
export default Router;
