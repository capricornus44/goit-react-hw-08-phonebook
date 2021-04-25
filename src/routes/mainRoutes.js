import { lazy } from 'react';

export const mainRoutes = [
  {
    path: '/',
    name: 'Home',
    exact: true,
    component: lazy(() => import('../pages/homePage/HomePage')),
    private: false,
    restricted: false,
  },
  {
    path: '/contacts',
    name: 'Contacts',
    exact: false,
    component: lazy(() => import('../pages/contactsPage/ContactsPage')),
    private: true,
    restricted: false,
  },
  // {
  //   path: '/signup',
  //   name: 'Sign Up',
  //   exact: false,
  //   component: lazy(() => import('../components/auth/AuthForm')),
  //   private: false,
  //   restricted: true,
  // },
  // {
  //   path: '/signin',
  //   name: 'Sign In',
  //   exact: false,
  //   component: lazy(() => import('../components/auth/AuthForm')),
  //   private: false,
  //   restricted: true,
  // },
];
