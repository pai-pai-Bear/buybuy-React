import React from 'react'
// import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { Link, withRouter } from 'react-router-dom'



import './Footer.css'

const Footer = () => {
  return (
    <footer id="footer">
      <div>
        <Link to="/home">
          <span className="item">
            <i className="iconfont iconshouye"></i>
            <span>首页</span>
          </span>
        </Link>
      </div>
      <div>
        <Link to="/category">
          <span className="item">
            <i className="iconfont iconchouti"></i>
            <span>分类</span>
          </span>
        </Link>
      </div>
      <div>
        <span className="item">
          <i className="iconfont iconshitu"></i>
          <span>识物</span>
        </span>
      </div>
      <div>
        <span className="item">
          <i className="iconfont icongouwuche"></i>
          <span>购物车</span>
        </span>
      </div>
      <div>
        <span className="item">
          <i className="iconfont icongeren"></i>
          <span>个人</span>
        </span>
      </div>
    </footer>
  )
}

export default Footer
