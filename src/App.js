import React from 'react';
import { render } from 'react-dom';
import Layout from './hoc/layout/Layout';
import Home from './containers/Home/Home';
import Todos from './containers/Todos/Todos';
import { Redirect, Route, Switch } from 'react-router-dom';
const App = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/todos" component={Todos}></Route>
        <Redirect to="/" />
      </Switch>
    </Layout>
  );
};

export default App;
