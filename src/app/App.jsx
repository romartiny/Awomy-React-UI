import React from 'react';
import './assets/styles/App.scss';
import { AppRouter } from './providers/router';
import ConnectionDetector from '../components/ConnectionDetector';

function App () {
  return (
    <ConnectionDetector>
      <AppRouter/>
    </ConnectionDetector>
  );
}

export default App;
