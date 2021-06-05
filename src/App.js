import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Layout from './components/layouts/layout';

function App() {
  return (
      <React.Fragment>
        <BrowserRouter>
          <Switch>
            <Route path='/'>
              <Layout/>
            </Route>
            {/* <Redirect path='*' to='/'/> */}
          </Switch>
        </BrowserRouter>
      </React.Fragment>
  );
}

export default App;
