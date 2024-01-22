import React from 'react';
import { HomePage } from '../../../pages/Home';
import {NotFoundPage} from "../../../pages/NotFound";

export const routeConfig = {
  main: {
    path: '/',
    element: <HomePage />
  },
  notFound: {
    path: '*',
    element: <NotFoundPage />
  }
};
