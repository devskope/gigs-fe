import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import CreateGig from './pages/gigs/CreateGig';
import GigList from './pages/gigs/GigList';

const RouteWithSubRoutes = (route) => (
  <Route
    path={route.path}
    exact={route.exact}
    render={(props) => (
      <route.component
        {...props}
        {...route.componentProps}
        routes={route.routes}
      />
    )}
  />
);

export const RenderRoutes = ({ routes }) => (
  <Switch>
    {routes.map((route) => (
      <RouteWithSubRoutes key={route.key} {...route} />
    ))}
    <Route render={() => <h1>Requested resource not found!</h1>} />
  </Switch>
);
export const routes = [
  {
    path: '/',
    key: 'home',
    component: Dashboard,
    exact: true,
  },
  {
    path: '/gigs',
    key: 'gigs',
    component: RenderRoutes,
    routes: [
      {
        path: '/gigs',
        key: 'gigList',
        component: GigList,
        exact: true,
      },
      {
        path: '/gigs/new',
        key: 'createGig',
        component: CreateGig,
      },
    ],
  },
];
