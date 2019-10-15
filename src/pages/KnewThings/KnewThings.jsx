import React, { Component } from 'react'
import { bs } from '../../Util'
import { reqKnewTab, reqKnewThings } from '../../api'

import './KnewThings.styl'
export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state= {
      tab:[],
      index: 0,
      things: []
    }

    this.navRef = React.createRef()
  }

  showTap(i) {
    this.setState({
      index: i
    })
  }

  
  async componentWillMount() {
    const result = await reqKnewTab()
    const back = await reqKnewThings()
    if(result.code === '200' && back.code === '200') {
      this.setState({
        tab: result.data,
        things: back.data
      }, () => {
        bs(this.navRef.current, true)
      })
    }
  }

  renderNav () {
    const { tab, index } = this.state
    console.log(this.navRef.current)
      return tab? tab.map((t, i) => (
        <span key={t.tabId} onClick={() => { this.showTap(i) }} className={i === index ? 'active' : ''}>
          {t.tabName}
        </span>
      )) : ''
  }

  renderList () {
    const { things } = this.state
    return   things ? things.map((thing,index) => (
      <React.Fragment key={Date.now()+ index}>
        {
          thing.topics.map((item, index )=> (
            <React.Fragment key={Date.now()+index}>
              {
                item.style === 2 &&
                <div className="p1" key={item.topicId + index}>
                  <div className="pl">
                    <div className="plt">
                      <img src={item.avatar} alt="1" />
                      <span>{item.nickname}</span>
                    </div>
                    <div className="plm">
                      <span>{item.title}</span>
                      <span className="slim">{item.subTitle}</span>
                    </div>
                    <div className="plb">
                      <i className="iconfont"></i>
                      <span>{item.readCount}</span>
                      <span>人看过</span>
                    </div>
                  </div>
                  <div className="pr">
                    <img src={item.picUrl} alt="1" />
                  </div>
                </div>
              }
              {
                item.style === 3 &&
                <div className="p2" key={item.topicId +1}>
                  <div className="pt">
                    <img src={item.avatar} alt="1" />
                    <span>{item.nickname}</span>
                  </div>
                  <div className="pp">
                    {item.title}
                  </div>
                  <div className="pi">
                    <img src={item.picUrl} alt="1" />
                  </div>
                  <div className="pk">
                    <span>{item.readCount}</span>
                    <span>人看过</span>
                  </div>
                </div>
              }
              {
                item.style === 3 &&
                <div className="p3" key={item.topicId+2}>
                  <div className="ppp">
                    {item.title}
                  </div>
                  <div className="ppt">
                    {item.subTitle}
                  </div>
                  <div className="ppl">
                    <ul>
                      {
                        item.itemList ? item.itemList.map((i, index) => (
                          <li key={i.primarySkuId + index}>
                            <img src={i.itemUrl} alt="1" />
                          </li>
                        )) : ''
                      }
                    </ul>
                  </div>
                  <div className="ppk">
                    <span>{item.readCount}</span>
                    <span>人看过</span>
                  </div>
                </div>
              }
            </React.Fragment>
          ))
        }
      </React.Fragment>
    )) : ''
            
  }



  render() {

    return (
      <div className="knew-wrap">
        <header>
          <div className="k-search">
            <i className="iconfont iconshouye" ></i>
            <p>发现 
              <span style={{width:20+'px', display:'inline-block'}}></span>
              <span>
                甄选家
              </span>
            </p>
            <div>
              <i className="iconfont iconsousuo" style={{ marginRight: 25 + 'px' }}></i>
              <i className="iconfont icongouwuche"></i>
            </div>
          </div>
        </header >

        <div className="k-nav">
          <div className="k-navLeft" ref={this.navRef}>
            <div className="dd">
              {this.renderNav()}
              
            </div>
          </div>
        </div>

        <div className="s-wrap" ref="list">
          <div className="banner">
            <img src="https://yanxuan.nosdn.127.net/9b83d46a01159e7a42d97598dc442172.jpg?imageView&amp;quality=65&amp;thumbnail=690y376" alt="1" width="100%" height="100%"/>
          </div>
          <div className="kList" >
            { this.renderList() }
          </div>
        </div> 
        
      </div>
    )
  }
}
