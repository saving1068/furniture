// pages/productDetail/index.js
import api from "../../api/product.js"
import util from '../../utils/util.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail:{},
    nav:[],
    id:0
  },  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id)
    this.data.id = options.id
     this.getSeries()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // this.getproductDetail(this.data.id )
  },
   getSeries(){
    api.getSeries().then((res) => {
      this.data.nav = res.data;
      this.getproductDetail(this.data.id,res.web)
      console.log(1111)
    })   
  },
  getproductDetail(id,url){
    let obj = {
      id
    }
    api.productDetail(obj).then((res)=>{
      console.log(res,1111)
      res.data.picUrl = util.completion(url, res.data.picUrl)
      res.data.pdType = util.changeString(res.data.pdType, this.data.nav)
      this.setData({
        detail:res.data
      })
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    let shareInfo = {
      title: this.data.detail.pdType +'型号'+ this.data.detail.modelNo,
      path: '../productDetail/index?id=' + this.data.id,
      imageUrl: this.data.detail.picUrl
    }
    return shareInfo
  }
})