// pages/productDetail/index.js
import api from "../../api/product.js"
import util from '../../utils/util.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail:{},
    nav:[]
  },  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id)
    api.getSeries().then((res) => {
        this.data.nav = res.data;
    }).then(()=>{
      this.getproductDetail(options.id)
    })
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },
  getproductDetail(id){
    let obj = {
      id
    }
    api.productDetail(obj).then((res)=>{
      console.log(res)
      res.data.picUrl = util.completion(res.web, res.data.picUrl)
      res.data.pdType = util.changeString(res.data.pdType,)
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
  
  }
})