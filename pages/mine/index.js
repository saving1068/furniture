// pages/mine/index.js
import api from '../../api/profile.js'
import util from '../../utils/util.js'
import WxParse from '../../wxParse/wxParse.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail: {},
    showPopup: false,
    phone: null,
    wxParseData: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getAboutUs()
  },
  getAboutUs(){
    api.getAboutUs({}).then((res)=>{
      res.data.picUrl = util.completion(res.web, res.data.picUrl)
      this.setData({
        detail:res.data
      })
      
    })
  },
  openMap(){
    let obj = {
      latitude: 22.95,
      longitude: 113.35,
      scale:18,
      name: this.data.detail.name,
      address: this.data.detail.address
    }
    wx.openLocation({
      ...obj,
      success:((res)=>{
        console.log(res)
      }),
      error:((e)=>{
        console.log(e)
      })
    })
  },
  phoneCall(){
    wx.makePhoneCall({
      phoneNumber: '1340000' //仅为示例，并非真实的电话号码
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