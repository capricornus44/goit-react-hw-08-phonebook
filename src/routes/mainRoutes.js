import { lazy } from 'react';

export const mainRoutes = [
  {
    path: '/',
    name: 'Home',
    exact: true,
    component: lazy(() => import('../pages/homePage/HomePage')),
  },
  {
    path: '/contacts',
    name: 'Contacts',
    exact: false,
    component: lazy(() => import('../pages/contactsPage/ContactsPage')),
  },
  {
    path: '/signup',
    name: 'Sign Up',
    exact: false,
    component: lazy(() => import('../components/auth/AuthForm')),
  },
  {
    path: '/signin',
    name: 'Sign In',
    exact: false,
    component: lazy(() => import('../components/auth/AuthForm')),
  },
];
