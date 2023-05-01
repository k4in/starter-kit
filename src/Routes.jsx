import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from './RootLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <p>Not Found</p>,
  },
]);

export default function Routes() {
  return <RouterProvider router={router} />;
}
