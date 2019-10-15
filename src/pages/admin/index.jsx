import React, { Component, Suspense } from 'react'
import { Switch, Route, Redirect } from "react-router-dom"

// import Footer from '../../components/Footer/Footer.jsx'
// import Home from '../../pages/Home/Home.jsx'
// import Category from '../../pages/Category/Category.jsx'
// import KnewThings from '../../pages/KnewThings/KnewThings.jsx'
// import Personal from '../../pages/Personal/Personal.jsx'
// import Cart from '../../pages/Cart/Cart.jsx'
const Footer = React.lazy(() => import('../../components/Footer/Footer.jsx'))
const Home = React.lazy(() => import('../../pages/Home/Home.jsx'))
const Category = React.lazy(() => import('../../pages/Category/Category.jsx'))
const KnewThings = React.lazy(() => import('../../pages/KnewThings/KnewThings.jsx'))
const Personal = React.lazy(() => import('../../pages/Personal/Personal.jsx'))
const Cart = React.lazy(() => import('../../pages/Cart/Cart.jsx'))
export default class index extends Component {

  render() {
    return (
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/category" component={Category} />
            <Route path="/knewThings" component={KnewThings} />
            <Route path="/personal" component={Personal} />
            <Route path="/cart" component={Cart} />
            <Redirect to="/home" />
          </Switch>
        </Suspense>
        <Footer path={this.props.location.pathname}/>
      </div>
      
    )
  }
}
