import React from 'react'
// import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { Link } from 'react-router-dom'



import './Footer.styl'

const Footer = (props) => {
  const path = props.path
  return (
    <footer id="footer">
      <div >
        <Link to="/home" className={path === '/home' ? "active" : ""}>
          <span className="item">
          {/* <span className="item"> */}
            <i className="iconfont iconshouye"></i>
            <span>首页</span>
          </span>
        </Link>
      </div>
      <div>
        <Link to="/category" className={path === '/category' ? "active" : ""}>
          <span className="item">
            <i className="iconfont iconchouti"></i>
            <span>分类</span>
          </span>
        </Link>
      </div>
      <div>
        <Link to="/knewThings" className={path === '/knewThings' ? "active" : ""}>
          <span className="item">
            <i className="iconfont iconshitu"></i>
            <span>识物</span>
          </span>
        </Link>
      </div>
      <div>
        <Link to="/cart" className={path === '/cart' ? "active" : ""}>
          <span className="item">
            <i className="iconfont icongouwuche"></i>
            <span>购物车</span>
          </span>
        </Link>
      </div>
      <div>
        <Link to='/personal' className={path === '/personal' ? "active" : ""}>
          <span className="item">
            <i className="iconfont icongeren"></i>
            <span>个人</span>
          </span>
        </Link>
      </div>
    </footer>
  )
}

export default Footer
