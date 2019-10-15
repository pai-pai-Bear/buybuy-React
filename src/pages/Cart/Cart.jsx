import React, { Component } from 'react'


import './Cart.styl'
export default class Cart extends Component {
  render() {
    return (
      <div>
        <header className="cat">
          <p>购物车</p>
          <span>领卷</span>
        </header>
        <ul className="promise">
          <li style={{ float: 'left'}}>
            <i></i>
            <span>30天无忧退货</span>
          </li>
          <li>
            <i></i>
            <span>48小时快速退款</span>
          </li>
          <li>
            <i style={{ marginLeft:35+'px'}}></i>
            <span >满88元免邮费</span>
          </li>
        </ul>
        <div className="container">
          <div className="bg">
            <div className="bg-img"></div>
            <div className="bg-txt">去添加点什么吧</div>
            <div className="btn">登录</div>
          </div>
        </div>
      </div>
    )
  }
}
