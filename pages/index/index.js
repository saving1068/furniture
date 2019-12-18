//index.js
//获取应用实例
const app = getApp()
import api from '../../api/index.js'
import util from '../../utils/util.js'
Page({
  data: {
    swiperList:[
     
    ],
    series:[]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  goTo(e){
    console.log(e)
      wx.navigateTo({
        url: '../store/index?type=' + e.currentTarget.dataset.type
      })
  },
  getSeries(){
    api.getSeries().then((res)=>{
      console.log(res)
      res.data.map(item => {
        item.typePic = util.completion(res.web, item.typePic)
      })
      this.setData({
        series: res.data
      })
    })
  },
  getSwiper(){
    let obj = {
      limit:5,
      page:1
    }
  api.getSwiperList(obj).then((res)=>{
    console.log(res, '1111')
    res.data.map(item =>{
      item.picUrl = util.completion(res.web, item.picUrl) 
    })
    
    this.setData({
      swiperList: res.data
    })
  })
 
  },
  onLoad: function () {
    this.getSwiper()
    this.getSeries()
  },
  getUserInfo: function(e) {
   
  }
})
