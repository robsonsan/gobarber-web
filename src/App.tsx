import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from './styles/global';
import Routes from './routes';

import AppProviders from './hooks';

const App: React.FunctionComponent = () => (
  <Router>
    <GlobalStyle />
    <AppProviders>
      <Routes />
    </AppProviders>
  </Router>
);

export default App;
