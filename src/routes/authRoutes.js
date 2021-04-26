import { lazy } from 'react';

export const authRoutes = [
  {
    path: '/signup',
    name: 'Sign up',
    exact: false,
    component: lazy(() =>
      import('../components/auth/AuthForm' /* webpackChunkName: "Register" */),
    ),
    private: false,
    restricted: true,
  },
  {
    path: '/signin',
    name: 'Sign in',
    exact: false,
    component: lazy(() =>
      import('../components/auth/AuthForm' /* webpackChunkName: "Login" */),
    ),
    private: false,
    restricted: true,
  },
];
