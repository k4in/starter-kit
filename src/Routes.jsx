import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import PageLayout from './layout/PageLayout';
import SiteLayout from './layout/SiteLayout';

const routes = createBrowserRouter([
  { path: '/', element: <SiteLayout />, children: [{ index: true, element: <PageLayout /> }] },
]);

export default function Routes() {
  return <RouterProvider router={routes} />;
}
