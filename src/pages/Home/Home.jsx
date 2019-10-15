import React, { Component } from 'react'
import BScroll from '@better-scroll/core'
import { chunk } from 'lodash'

import Swiper from 'swiper'

import { reqHomeData } from '../../api/index'

import 'swiper/css/swiper.min.css'
import './Home.styl'

export default class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      isActive: false,
      homeData: {}
    }

    this.toggleRef = React.createRef()
  }

  /*
  * 获取home页面数据
  */
  async getHomeData() {
    const result = await reqHomeData()
    if (result.code === 0) {
      this.setState({
        homeData: result.data
      }, () => {
        new BScroll('.navLeft', {
          scrollX: true,
          click: true
        })

        new Swiper('.swiper-container', {
          autoplay: true,
          loop: true,
          pagination: {
            el: '.swiper-pagination',
          }
        })

        new Swiper('.sr-swiper-container', {
          autoplay: true,
          pagination: {
            el: '.sr-swiper-pagination',
          }
        })

      })
      
    }
  }

  rotate = () =>{
    this.setState(state => ({
      isActive: !state.isActive
    }))
  }

  componentDidMount () {

    this.getHomeData() 

    

    
  }

  render() {
    const {isActive} = this.state
    const { focusList, kingKongModule, personalShop } = this.state.homeData
    let perArr = chunk( personalShop, 3 )
    return (
      <div>
        <div className="header-wrap" style={{height:150 + 'px'}}>
          <header id="header">
            <div className="search">
              <a href="##" className="logo">
                <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png" alt="1"/>
              </a>
              <div className="jumpSearch">
                <i className="iconfont iconsousuo"></i>
                <span>搜索商品，共23072款好物</span>
              </div>
              <button>登录</button>
            </div>
            <div className="nav">
              <ul className="pp" style={!isActive ? { display: 'none' } : { } }>
                <li className="action">
                  <span >推荐</span>
                </li>
                {
                  kingKongModule ? kingKongModule.kingKongList.map((item, index) => (
                    <li key={index * 1.2}>
                      {item.text}
                    </li>
                  )
                  ) : ''
                }

              </ul>
              <div className="navLeft">
                <ul className="dd">
                  <li style={{ width: 55 + 'px' }} className="action">
                    <span >推荐</span>
                  </li>
                  { 
                    kingKongModule?kingKongModule.kingKongList.map((item, index) => (
                      <li key={index} >
                          {item.text}
                        </li>
                      )
                    ):''
                  }
                </ul>
                <div className="normal" style={!isActive ? { display: 'none' } : {}}>
                  <p>全部频道</p>
                </div>
              </div>
              <div className="navRight">
                <div className="liner"></div>
                <div className={isActive ? "toggleWrap rotate" : "toggleWrap"} onClick={this.rotate}>
                  <i className="iconfont iconkm-under" ></i>
                </div>
              </div>
            </div>
          </header>
        </div>

        <div className="mask" style={!isActive ? { display: 'none' } : {}}></div>

        <div className="swiper-container">
          <div className="swiper-wrapper">
            {
              focusList?focusList.map(item => (
                <div className="swiper-slide" key={item.id}>
                  <img src={item.picUrl} alt="1"/>
                </div>
              )):''
            }
          </div>
          <div className="swiper-pagination"></div>
        </div>  

        <ul className="promise">
          <li style={{float:'left'}}>
            <i className="iconfont iconziying"></i>
            <span>网易自营品牌</span>
          </li>
          <li>
            <i className="iconfont iconwuyoubaozhuangxiuanquanbaozhang"></i>
            <span>30天无忧退货</span>
          </li>
          <li>
            <i className="iconfont icontuikuan"></i>
            <span>48小时快速退款</span>
          </li>
        </ul>

        <div className="category-list">
          <ul className="category-thing">
            <li>
              <img src="http://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt="1"/>
              <span>新品首发</span>
            </li>
            <li>
              <img src="http://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt="1"/>
              <span>新品首发</span>
            </li>
            <li>
              <img src="http://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt="1"/>
              <span>新品首发</span>
            </li>
            <li>
              <img src="http://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt="1"/>
              <span>新品首发</span>
            </li>
            <li>
              <img src="http://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt="1"/>
              <span>新品首发</span>
            </li>
            <li>
              <img src="http://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt="1"/>
              <span>新品首发</span>
            </li>
            <li>
              <img src="http://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt="1"/>
              <span>新品首发</span>
            </li>
            <li>
              <img src="http://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt="1"/>
              <span>新品首发</span>
            </li>
            <li>
              <img src="http://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt="1"/>
              <span>新品首发</span>
            </li>
            <li>
              <img src="http://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt="1"/>
              <span>新品首发</span>
            </li>
          </ul>

          <div className="category-banner">
            <img src="https://yanxuan.nosdn.127.net/9229d2b8f7a2e16471f8002314634a72.gif" className="img" data-reactid=".0.5.0.2.0.0" alt="1"/>
          </div>

          <div className="srdz">
            <div className="sr-item ltd">
              <div className="lt">
                <p className="pt">9.9超值专区</p>
                <p className="pb">190款商品定价直降</p>
              </div>
              <div className="lb">
                  <img src="https://yanxuan-item.nosdn.127.net/b2065eab67acc5923a8ec71167a35f6a.png?imageView&amp;thumbnail=150x150&amp;quality=75" className="pic" alt="1"/>
                <img src="https://yanxuan-item.nosdn.127.net/569ab2c87df93c56de39b8c890463242.png?imageView&amp;thumbnail=150x150&amp;quality=75" className="pic" alt="1"/>
              </div>
            </div>
            <div className="sr-item ltd">
              <div className="lt">
                <p className="pt">9.9超值专区</p>
                <p className="pb">190款商品定价直降</p>
              </div>
              <div className="lb">
                <img src="https://yanxuan-item.nosdn.127.net/b2065eab67acc5923a8ec71167a35f6a.png?imageView&amp;thumbnail=150x150&amp;quality=75" className="pic" alt="1"/>
                <img src="https://yanxuan-item.nosdn.127.net/569ab2c87df93c56de39b8c890463242.png?imageView&amp;thumbnail=150x150&amp;quality=75" className="pic" alt="1"/>
              </div>
            </div>
            <div className="sr-item ltd">
              <div className="lt">
                <p className="pt">9.9超值专区</p>
                <p className="pb">190款商品定价直降</p>
              </div>
              <div className="lb">
                <img src="https://yanxuan-item.nosdn.127.net/b2065eab67acc5923a8ec71167a35f6a.png?imageView&amp;thumbnail=150x150&amp;quality=75" className="pic" alt="1"/>
                <img src="https://yanxuan-item.nosdn.127.net/569ab2c87df93c56de39b8c890463242.png?imageView&amp;thumbnail=150x150&amp;quality=75" className="pic" alt="1"/>
              </div>
            </div>
            <div className="sr-item ltd">
              <div className="lt">
                <p className="pt">9.9超值专区</p>
                <p className="pb">190款商品定价直降</p>
              </div>
              <div className="lb">
                <img src="https://yanxuan-item.nosdn.127.net/b2065eab67acc5923a8ec71167a35f6a.png?imageView&amp;thumbnail=150x150&amp;quality=75" className="pic" alt="1"/>
                <img src="https://yanxuan-item.nosdn.127.net/569ab2c87df93c56de39b8c890463242.png?imageView&amp;thumbnail=150x150&amp;quality=75" className="pic" alt="1"/>
              </div>
            </div>
          </div>

          <div className="srdz-s">
            <p>私人定制</p>
            <div className="srdz-swiper">
              <div className="sr-swiper-container">
                <div className="swiper-wrapper">
                  {
                    perArr ? perArr.map((item, index) => (
                      <div className="swiper-slide" key={index + 1.1}>
                        {
                          item.map(i => (
                            <div className="swiper-item" key={i.id}>
                              <div>
                                <img src={i.primaryPicUrl} alt="1"/>
                              </div>
                              <div className="swiper-name">
                                <span className="item-name">{i.name}</span>
                                <span className="price">¥{i.retailPrice}</span>
                              </div>
                            </div>
                          ))
                        }
                      </div>
                    )) : ''
                  }
                </div>
                <div className="sr-swiper-pagination"></div>
              </div>
            </div>
          </div>
          
          <div className="srdz-b">
            <p>
              <span>限时购</span>
              <span className="more">
                更多
                <i className="iconfont iconyoujiantou"></i>
              </span>
            </p>
            <ul className="b-list">
              <li>
                <div className="img-wrap">
                  <img src="https://yanxuan-item.nosdn.127.net/374a1ff28dc0a394bc035b934c3071b6.png?imageView&amp;thumbnail=216x216&amp;quality=75" className="img" alt="1"/>
                </div>          
                <div className="text-wrap">
                  <span className="new">¥52.8</span>
                  <span className="old">¥76</span>
                </div>
              </li>
              <li>
                <div className="img-wrap">
                  <img src="https://yanxuan-item.nosdn.127.net/374a1ff28dc0a394bc035b934c3071b6.png?imageView&amp;thumbnail=216x216&amp;quality=75" className="img" alt="1" />
                </div>          
                <div className="text-wrap">
                  <span className="new">¥52.8</span>
                  <span className="old">¥76</span>
                </div>
              </li>
              <li>
                <div className="img-wrap">
                  <img src="https://yanxuan-item.nosdn.127.net/374a1ff28dc0a394bc035b934c3071b6.png?imageView&amp;thumbnail=216x216&amp;quality=75" className="img" alt="1"/>
                </div>          
                <div className="text-wrap">
                  <span className="new">¥52.8</span>
                  <span className="old">¥76</span>
                </div>
              </li>
              <li>
                <div className="img-wrap">
                  <img src="https://yanxuan-item.nosdn.127.net/374a1ff28dc0a394bc035b934c3071b6.png?imageView&amp;thumbnail=216x216&amp;quality=75" className="img" alt="1"/>
                </div>          
                <div className="text-wrap">
                  <span className="new">¥52.8</span>
                  <span className="old">¥76</span>
                </div>
              </li>
              <li>
                <div className="img-wrap">
                  <img src="https://yanxuan-item.nosdn.127.net/374a1ff28dc0a394bc035b934c3071b6.png?imageView&amp;thumbnail=216x216&amp;quality=75" className="img" alt="1"/>
                </div>          
                <div className="text-wrap">
                  <span className="new">¥52.8</span>
                  <span className="old">¥76</span>
                </div>
              </li>
              <li>
                <div className="img-wrap">
                  <img src="https://yanxuan-item.nosdn.127.net/374a1ff28dc0a394bc035b934c3071b6.png?imageView&amp;thumbnail=216x216&amp;quality=75" className="img" alt="1"/>
                </div>          
                <div className="text-wrap">
                  <span className="new">¥52.8</span>
                  <span className="old">¥76</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="srdz-b big">
            <p>
              <span>新品首发</span>
              <span className="more">
                更多
                <i className="iconfont iconyoujiantou"></i>
                </span>
            </p>
            <ul className="b-list">
              <li>
                <div className="img-wrap">
                  <img src="https://yanxuan-item.nosdn.127.net/374a1ff28dc0a394bc035b934c3071b6.png?imageView&amp;thumbnail=216x216&amp;quality=75" className="img" alt="1"/>
                </div>          
                <div className="name">
                  <span>网易智造EMS颈椎按摩仪</span>
                  <span>    </span>
                  <span className="price">¥329</span>
                </div>
              </li>
              <li>
                <div className="img-wrap">
                  <img src="https://yanxuan-item.nosdn.127.net/374a1ff28dc0a394bc035b934c3071b6.png?imageView&amp;thumbnail=216x216&amp;quality=75" className="img" alt="1"/>
                </div>          
                <div className="name">
                  <span>网易智造EMS颈椎按摩仪</span>
                  <span>    </span>
                  <span className="price">¥329</span>
                </div>
              </li>
              <li>
                <div className="img-wrap">
                  <img src="https://yanxuan-item.nosdn.127.net/374a1ff28dc0a394bc035b934c3071b6.png?imageView&amp;thumbnail=216x216&amp;quality=75" className="img" alt="1"/>
                </div>          
                <div className="name">
                  <span>网易智造EMS颈椎按摩仪</span>
                  <span>    </span>
                  <span className="price">¥329</span>
                </div>
              </li>
              <li>
                <div className="img-wrap">
                  <img src="https://yanxuan-item.nosdn.127.net/374a1ff28dc0a394bc035b934c3071b6.png?imageView&amp;thumbnail=216x216&amp;quality=75" className="img" alt="1" />
                </div>          
                <div className="name">
                  <span>网易智造EMS颈椎按摩仪</span>
                  <span>    </span>
                  <span className="price">¥329</span>
                </div>
              </li>
              <li>
                <div className="img-wrap">
                  <img src="https://yanxuan-item.nosdn.127.net/374a1ff28dc0a394bc035b934c3071b6.png?imageView&amp;thumbnail=216x216&amp;quality=75" className="img" alt="1"/>
                </div>          
                <div className="name">
                  <span>网易智造EMS颈椎按摩仪</span>
                  <span>    </span>
                  <span className="price">¥329</span>
                </div>
              </li>
              <li>
                <div className="img-wrap">
                  <img src="https://yanxuan-item.nosdn.127.net/374a1ff28dc0a394bc035b934c3071b6.png?imageView&amp;thumbnail=216x216&amp;quality=75" className="img" alt="1"/>
                </div>          
                <div className="name">
                  <span>网易智造EMS颈椎按摩仪</span>
                  <span>    </span>
                  <span className="price">¥329</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="srdz-t">
            <p>
              <span>人气推荐</span>
              <span className="more">
                更多
                <i className="iconfont iconyoujiantou"></i>
                </span>
            </p>
            <div className="t-wrap">
              <div className="i-wrap">
                <img data-original="https://yanxuan-item.nosdn.127.net/5eddd1f59c340f6455b561268cae736d.png?imageView&amp;quality=65&amp;thumbnail=280x280" data-src="https://yanxuan-item.nosdn.127.net/5eddd1f59c340f6455b561268cae736d.png?imageView&amp;quality=65&amp;thumbnail=280x280" className="swiper-lazy" data-reactid=".0.5.4.1.0.0.0" src="https://yanxuan-item.nosdn.127.net/5eddd1f59c340f6455b561268cae736d.png?imageView&amp;quality=65&amp;thumbnail=280x280" alt="1"/>
              </div>
              <div className="t-r-wrap">
                <div className="one">
                  <span>国庆节特惠</span>
                </div>
                <div className="two">冬夏两用 护脊椰棕弹簧床垫</div>
                <div className="three">硬度偏好者优选</div>
                <div className="four">￥1679</div>
              </div>
            </div>
            <div className="b-wrap">
              <div className="b-item">
                <div className="item-i">
                  <img data-original="https://yanxuan-item.nosdn.127.net/a29e50a8f4286ca54d696e7d6bc10afd.png?imageView&amp;quality=65&amp;thumbnail=330x330" data-src="https://yanxuan-item.nosdn.127.net/a29e50a8f4286ca54d696e7d6bc10afd.png?imageView&amp;quality=65&amp;thumbnail=330x330" className="swiper-lazy" data-reactid=".0.5.4.2.0.$0.0.0.0.0.0" src="https://yanxuan-item.nosdn.127.net/a29e50a8f4286ca54d696e7d6bc10afd.png?imageView&amp;quality=65&amp;thumbnail=330x330" alt="1"/>
                </div>
                <div className="name">
                  <span>
                    网易智造3D揉捏按摩肩带
                    <span style={{color:'#b4282d'}}>￥399</span>
                  </span>
                  <div>满赠</div>
                </div>
              </div>
              <div className="b-item">
                <div className="item-i">
                  <img data-original="https://yanxuan-item.nosdn.127.net/a29e50a8f4286ca54d696e7d6bc10afd.png?imageView&amp;quality=65&amp;thumbnail=330x330" data-src="https://yanxuan-item.nosdn.127.net/a29e50a8f4286ca54d696e7d6bc10afd.png?imageView&amp;quality=65&amp;thumbnail=330x330" className="swiper-lazy" data-reactid=".0.5.4.2.0.$0.0.0.0.0.0" src="https://yanxuan-item.nosdn.127.net/a29e50a8f4286ca54d696e7d6bc10afd.png?imageView&amp;quality=65&amp;thumbnail=330x330" alt="1"/>
                </div>
                <div className="name">
                  <span>
                    网易智造3D揉捏按摩肩带
                    <span style={{color:'#b4282d'}}>￥399</span>
                  </span>
                  <div>满赠</div>
                </div>
              </div>
              <div className="b-item">
                <div className="item-i">
                  <img data-original="https://yanxuan-item.nosdn.127.net/a29e50a8f4286ca54d696e7d6bc10afd.png?imageView&amp;quality=65&amp;thumbnail=330x330" data-src="https://yanxuan-item.nosdn.127.net/a29e50a8f4286ca54d696e7d6bc10afd.png?imageView&amp;quality=65&amp;thumbnail=330x330" className="swiper-lazy" data-reactid=".0.5.4.2.0.$0.0.0.0.0.0" src="https://yanxuan-item.nosdn.127.net/a29e50a8f4286ca54d696e7d6bc10afd.png?imageView&amp;quality=65&amp;thumbnail=330x330" alt="1"/>
                </div>
                <div className="name">
                  <span>
                    网易智造3D揉捏按摩肩带
                    <span style={{color:'#b4282d'}}>￥399</span>
                  </span>
                  <div>满赠</div>
                </div>
              </div>
            </div>
          </div>

          <div className="srdz-b">
            <p>
              <span>限时购</span>
              <span className="more">
                更多
                <i className="iconfont iconyoujiantou"></i>
                </span>
            </p>
            <ul className="b-list">
              <li>
                <div className="img-wrap">
                  <img src="https://yanxuan-item.nosdn.127.net/374a1ff28dc0a394bc035b934c3071b6.png?imageView&amp;thumbnail=216x216&amp;quality=75" className="img" data-reactid=".0.5.2.1.$0.0.0"  alt="1"/>
                </div>          
                <div className="text-wrap">
                  <span className="new">¥52.8</span>
                  <span className="old">¥76</span>
                </div>
              </li>
              <li>
                <div className="img-wrap">
                  <img src="https://yanxuan-item.nosdn.127.net/374a1ff28dc0a394bc035b934c3071b6.png?imageView&amp;thumbnail=216x216&amp;quality=75" className="img" data-reactid=".0.5.2.1.$0.0.0" alt="1"/>
                </div>          
                <div className="text-wrap">
                  <span className="new">¥52.8</span>
                  <span className="old">¥76</span>
                </div>
              </li>
              <li>
                <div className="img-wrap">
                  <img src="https://yanxuan-item.nosdn.127.net/374a1ff28dc0a394bc035b934c3071b6.png?imageView&amp;thumbnail=216x216&amp;quality=75" className="img" data-reactid=".0.5.2.1.$0.0.0" alt="1"/>
                </div>          
                <div className="text-wrap">
                  <span className="new">¥52.8</span>
                  <span className="old">¥76</span>
                </div>
              </li>
              <li>
                <div className="img-wrap">
                  <img src="https://yanxuan-item.nosdn.127.net/374a1ff28dc0a394bc035b934c3071b6.png?imageView&amp;thumbnail=216x216&amp;quality=75" className="img" data-reactid=".0.5.2.1.$0.0.0" alt="1"/>
                </div>          
                <div className="text-wrap">
                  <span className="new">¥52.8</span>
                  <span className="old">¥76</span>
                </div>
              </li>
              <li>
                <div className="img-wrap">
                  <img src="https://yanxuan-item.nosdn.127.net/374a1ff28dc0a394bc035b934c3071b6.png?imageView&amp;thumbnail=216x216&amp;quality=75" className="img" data-reactid=".0.5.2.1.$0.0.0" alt="1"/>
                </div>          
                <div className="text-wrap">
                  <span className="new">¥52.8</span>
                  <span className="old">¥76</span>
                </div>
              </li>
              <li>
                <div className="img-wrap">
                  <img src="https://yanxuan-item.nosdn.127.net/374a1ff28dc0a394bc035b934c3071b6.png?imageView&amp;thumbnail=216x216&amp;quality=75" className="img" data-reactid=".0.5.2.1.$0.0.0" alt="1"/>
                </div>          
                <div className="text-wrap">
                  <span className="new">¥52.8</span>
                  <span className="old">¥76</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer">
      <div className="btn">
        <span style={{marginRight:50 + 'px'}}>下载APP</span>
        <span>电脑版</span>
      </div>
      <p>
        <span>网易公司版权所有 © 1997-2019</span>
        <span>食品经营许可证：JY13301080111719</span>
      </p>
    </div>
      </div>
    )
  }
}
