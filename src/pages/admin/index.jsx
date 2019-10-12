import React, { Component } from 'react'
import { Switch, Route, Redirect } from "react-router-dom"

import Footer from '../../components/Footer/Footer.jsx'
import Home from '../../pages/Home/Home.jsx'
import Category from '../../pages/Category/Category.jsx'
import KnewThings from '../../pages/KnewThings/KnewThings.jsx'
import Personal from '../../pages/Personal/Personal.jsx'
import Cart from '../../pages/Cart/Cart.jsx'
export default class index extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/category" component={Category} />
          <Route path="/knewThings" component={KnewThings} />
          <Route path="/personal" component={Personal} />
          <Route path="/cart" component={Cart} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
      
    )
  }
}
