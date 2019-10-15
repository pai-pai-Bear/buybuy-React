import React, { Component } from 'react'

import './Personal.styl'
export default class Personal extends Component {
  render() {
    return (
      <section style={{ background: '#fff'}}>
        <div className="user-wrap">
          <div className="user-pic">
            <img className="avatar" src="//yanxuan.nosdn.127.net/8945ae63d940cc42406c3f67019c5cb6.png" data-reactid=".0.1.0.0.0.0" alt="1"/>
          </div>
          <div className="user-info">
            <p>immadao</p>
            <span>普通用户</span>
          </div>
        </div>

        <div className="money">
          <div>我的资产</div>
          <ul>
            <li>
              <p>￥<span>0</span></p>
              <span>回馈金</span>
            </li>
            
            <li>
              <p><span>0</span></p>
              <span>红包</span>
            </li>
            
            <li>
              <p><span>0</span></p>
              <span>优惠卷</span>
            </li>
            
            <li>
              <p>￥<span>0</span></p>
              <span>津贴</span>
            </li>
            
            <li>
              <p><span>0</span></p>
              <span>礼品卡</span>
            </li>
          </ul>
        </div>

        <div className="order-list">
          <ul>
            <li>
              <i></i>
              <span>我的订单</span>
            </li>
            <li>
              <i></i>
              <span>我的订单</span>
            </li>
            <li>
              <i></i>
              <span>我的订单</span>
            </li>
            <li>
              <i></i>
              <span>我的订单</span>
            </li>
            <li>
              <i></i>
              <span>我的订单</span>
            </li>
            <li>
              <i></i>
              <span>我的订单</span>
            </li>
            <li>
              <i></i>
              <span>我的订单</span>
            </li>
            <li>
              <i></i>
              <span>我的订单</span>
            </li>
            <li>
              <i></i>
              <span>我的订单</span>
            </li>
            <li>
              <i></i>
              <span>我的订单</span>
            </li>
            <li>
              <i></i>
              <span>我的订单</span>
            </li>

          </ul>
        </div>

        <div className="out">
          <p>退出登录</p>
        </div>
      </section>
    )
  }
}
