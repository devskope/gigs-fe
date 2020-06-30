import React from 'react';
import { CssBaseline, makeStyles } from '@material-ui/core';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import useMuiTheme from '@devskope/use-mui-theme';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import themes from './lib/themes';
import { RenderRoutes, routes } from './router';

const useStyles = makeStyles(() => ({
  app: {
    background: '#FBFBFF',
    display: 'grid',
    gridTemplateColumns: '250px 1fr',
    height: '100%',
  },
  content: {
    display: 'grid',
    gridTemplateRows: '7rem 1fr',
  },
}));

const App = () => {
  const [theme, setTheme] = useMuiTheme(themes.light);
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className={classes.app}>
          <Sidebar />
          <div className={classes.content}>
            <Header />
            <RenderRoutes routes={routes} />
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
