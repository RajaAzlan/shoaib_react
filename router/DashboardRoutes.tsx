import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { useAppSelector } from 'store/hooks';

import NotFound from 'pages/notFound';
import AdminUsers from 'pages/superAdminUsers';
import AddUser from 'pages/addUser';

function DashboardRoutes() {
  const user = useAppSelector((state) => state.user.value);
  if (user.role === 'super_admin') {
    return (
      <Switch>
        {<Route path="/users" component={AdminUsers} key="AdminUsers" />}
        {<Route path="/add-user" component={AddUser} key="AddUser" />}
      </Switch>
    );
  } else {
    return (
      <Switch>
        <Route path="*" component={NotFound} key="notfound" />
      </Switch>
    );
  }
}

export default DashboardRoutes;
