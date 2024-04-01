import { ROUTES_PATH } from 'constants/routes';
import Edit from 'pages/Edit';
import Error from 'pages/Error';
import Home from 'pages/Home';
import NotFound from 'pages/NotFound';
import Onboarding from 'pages/Onboarding';
import Question from 'pages/Question';
import Result from 'pages/Result';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Root from './Root';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Home /> },
        { path: ROUTES_PATH.onboarding, element: <Onboarding /> },
        { path: ROUTES_PATH.question, element: <Question /> },
        { path: ROUTES_PATH.result, element: <Result /> },
        { path: ROUTES_PATH.edit, element: <Edit /> },
        { path: ROUTES_PATH.error, element: <Error /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
