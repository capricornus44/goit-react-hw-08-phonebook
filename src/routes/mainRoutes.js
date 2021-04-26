import { lazy } from 'react';

export const mainRoutes = [
  {
    path: '/',
    name: 'Home',
    exact: true,
    component: lazy(() =>
      import('../pages/homePage/HomePage' /* webpackChunkName: "Home" */),
    ),
    isPrivate: false,
    isRestricted: false,
  },
  {
    path: '/contacts',
    name: 'Contacts',
    exact: false,
    component: lazy(() =>
      import(
        '../pages/contactsPage/ContactsPage' /* webpackChunkName: "Contacts" */
      ),
    ),
    isPrivate: true,
    isRestricted: false,
  },
  {
    path: '/signup',
    name: 'Sign Up',
    exact: false,
    component: lazy(() =>
      import('../pages/authPage/AuthPage' /* webpackChunkName: "Sign up" */),
    ),
    isPrivate: false,
    isRestricted: true,
  },
  {
    path: '/signin',
    name: 'Sign In',
    exact: false,
    component: lazy(() =>
      import('../pages/authPage/AuthPage' /* webpackChunkName: "Sign in" */),
    ),
    isPrivate: false,
    isRestricted: true,
  },
];
