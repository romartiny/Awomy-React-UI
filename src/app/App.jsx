import React from 'react';
import './assets/styles/App.scss';
import { AppRouter } from './providers/router';
import ConnectionDetector from '../components/ConnectionDetector';
import {HomePageAsync} from "../pages/HomePage/ui/HomePage.async";

function App () {
  return (
    <ConnectionDetector>
        <HomePageAsync />
      <AppRouter/>
    </ConnectionDetector>
  );
}

export default App;
