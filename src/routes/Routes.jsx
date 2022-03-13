import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';

// config
import { PATH_NAME } from 'configs';

// guards
import AuthGuard from './AuthGuard';
import GuestGuard from './GuestGuard';

// layout
import MainLayout from 'layouts/MainLayout';

// pages
const Dashboard = lazy(() => import('pages/Dashboard'));
const Kanban = lazy(() => import('pages/Kanban'));
const ProductAdd = lazy(() => import('pages/Product/ProductAdd'));
const ProductList = lazy(() => import('pages/Product/ProductList'));

const Login = lazy(() => import('pages/Login'));
const Register = lazy(() => import('pages/Register'));
const User = lazy(() => import('pages/User'));
const Playground = lazy(() => import('pages/Playground'));

const routesConfig = [
  {
    path: PATH_NAME.ROOT,
    element: () => <Navigate to={PATH_NAME.DASHBOARD} />,
  },
  {
    path: PATH_NAME.LOGIN,
    guard: GuestGuard,
    element: Login,
  },
  {
    path: PATH_NAME.REGISTER,
    guard: GuestGuard,
    element: Register,
  },
  {
    path: PATH_NAME.DASHBOARD,
    guard: AuthGuard,
    element: Dashboard,
    layout: MainLayout,
  },
  {
    path: PATH_NAME.PRODUCT,
    guard: AuthGuard,
    element: ProductList,
    layout: MainLayout,
  },
  {
    path: PATH_NAME.PRODUCT_ADD,
    guard: AuthGuard,
    element: ProductAdd,
    layout: MainLayout,
  },
  {
    path: PATH_NAME.KANBAN,
    guard: AuthGuard,
    element: Kanban,
    layout: MainLayout,
  },
  {
    path: PATH_NAME.USER,
    guard: AuthGuard,
    element: User,
    layout: MainLayout,
  },
  {
    path: PATH_NAME.PLAYGROUND,
    guard: AuthGuard,
    element: Playground,
    layout: MainLayout,
  },
];

const renderRoutes = (routes) => {
  return (
    <Router>
      <Suspense fallback={<div />}>
        <Routes>
          {routes.map((route, routeIdx) => {
            const Guard = route.guard || React.Fragment;
            const Layout = route.layout || React.Fragment;
            const Component = route.element;

            return (
              <Route
                key={`routes-${routeIdx}`}
                path={route.path}
                element={
                  <Guard>
                    <Layout>
                      <Component />
                    </Layout>
                  </Guard>
                }
              />
            );
          })}
        </Routes>
      </Suspense>
    </Router>
  );
};

function RoutesMain() {
  return renderRoutes(routesConfig);
}

export default RoutesMain;
