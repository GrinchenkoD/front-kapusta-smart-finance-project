import { lazy } from 'react';

const mainRoutes = [
  {
    name: 'homepage',
    path: '/homepage',
    exact: true,
    component: lazy(() =>
      import(
        '../pages/HomePage/HomePage.jsx' /*webpackChunkName: "registration-page" */
      ),
    ),
    private: false,
    restricted: true,
  },
  {
    name: 'account',
    path: '/account',
    exact: true,
    component: lazy(() =>
      import(
        '../pages/AccountPage/AccountPage.jsx' /*webpackChunkName: "login-page" */
      ),
    ),
    private: true,
    restricted: false,
  },
  {
    name: 'report',
    path: '/report',
    exact: true,
    component: lazy(() =>
      import(
        '../pages/ReportPage/ReportPage.jsx' /*webpackChunkName: "projects-page" */
      ),
    ),
    private: true,
    restricted: false,
  },
];
export default mainRoutes;
