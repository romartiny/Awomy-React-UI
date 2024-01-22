import React from 'react';
import './assets/styles/App.scss';
import { AppRouter } from './providers/router';
import ConnectionDetector from '../components/ConnectionDetector';
import {HeaderBlock} from "../components/Header/HeaderBlock";

function App () {
  return (
    <ConnectionDetector>
        <HeaderBlock />
      <AppRouter/>
    </ConnectionDetector>
  );
}

export default App;
