import React, {Suspense} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Mock from './mock/mockServer'
import './mock/data/homeData.json'
import './mock/data/category.json'
import './mock/data/categoryList.json'

import Admin from './pages/admin'
// const Admin = React.lazy(() => import('./pages/admin'))

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          {/* <Route path="/home" component={Home} /> */}
          <Route path="/" component={Admin} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
