import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'


import Admin from './pages/admin'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route path="/home" component={Home} /> */}
        <Route path="/" component={Admin} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
