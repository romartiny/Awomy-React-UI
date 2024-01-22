import React from 'react';
import { HomePage } from '../../../pages/HomePage';
import {Navigate} from "react-router-dom";

export const routeConfig = {
  main: {
    path: '/',
    element: <HomePage />
  }
};
