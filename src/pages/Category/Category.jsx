import React, { Component } from 'react'

import { reqCategory } from '../../api'

import './Category.styl'

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state= {
      category: {},
      index: 0
    }
  }

  getIndex (i) {
    this.setState({
      index: i
    })
  }

  async componentWillMount(){
    const result = await reqCategory()
    if(result.code === 0) {
      this.setState({
        category: result.data,
      })
    }
  }

  render() {
    const {index} = this.state
    const { categoryL1List } = this.state.category
    if(categoryL1List) {
      var sub = categoryL1List[index].subCateList
    }    
    return (
      <div id="cateWrap">
        <header>
          <div className="title">
            <i className="iconfont iconsousuo"></i>
            <span>
              搜索商品，共23155款好物
            </span>
          </div>
        </header>

        <div className="cate-list" ref="ll">
          <ul ref="YList">
            {
              categoryL1List? categoryL1List.map((cate, index) => (
                <li key={cate.id} onClick={() => { this.getIndex(index) }}>
                  {cate.name}
                </li>
              )) : ''
            }
          </ul>
        </div>

        <div ref="rr" style={{height:1140 + 'px'}}>
          <div className="cate-showlist">
            <img src={categoryL1List?categoryL1List[index].bannerUrl: ''} alt="1"/>
            <ul ref="things">
              {
                sub ? sub.map((item, index) => (
                  <li key={index}>
                    <div className="i-wrap">
                      <img src={item.bannerUrl} alt="1" />
                    </div>
                    <div className="t-wrap">
                      {item.name}
                    </div>
                  </li>
                )) : ''
              }
            </ul>
          </div >
        </div >

      </div >
    )
  }
}
