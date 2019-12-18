// pages/profile/index.js
import api from '../../api/profile.js'
import util from '../../utils/util.js'
import WxParse from '../../wxParse/wxParse.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    content:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getIntro()
  },
  getIntro(){
    let obj = {

    }
    api.getIntro(obj).then((res)=>{
      console.log(res)
      console.log(WxParse)
      
      // let content = WxParse.wxParse('article', 'html', res.data, this, 5);
      // console.log(content)
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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