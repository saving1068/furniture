// pages/picture/index.js
import api from "../../api/picture.js"
import util from '../../utils/util.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageList:[
      {
        path: '../../images/product.png'
      },
      {
        path: '../../images/picture.png'
      },
      {
        path: '../../images/profile.png'
      },
    ],
    image:[
      '../../images/product.png', '../../images/picture.png', '../../images/profile.png'
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getImagesList(10,1)
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  getImagesList(limit, page){
    let obj = {
      page, limit
    }
    api.getPictrue(obj).then((res)=>{
      res.data.map(item => {
        item.typePic = util.completion(res.web, item.typePic)
      })
      console.log(res)
    })
  },
  getImage(e){
    wx.previewImage({
      current: e.currentTarget.dataset.path, // 当前显示图片的http链接
      urls: this.data.image, // 需要预览的图片http链接列表
      success:((e)=>{
        console.log(e)
      }),
      fail:((e)=>{
        console.log(e)
      })
    })
    console.log(e)
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