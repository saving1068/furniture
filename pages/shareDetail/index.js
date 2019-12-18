// pages/shareDetail/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectList: [
      { picUrl: '../../images/product.png', modelNo: '沙发萨芬' },
      { picUrl: '../../images/product.png', modelNo: '沙发萨芬' },
      { picUrl: '../../images/product.png', modelNo: '沙发萨芬' }
    ]
  },
  onShareAppMessage(res){
    let shareInfo = {
      title:'的撒打算',
      path:'../shareDetail/index',
      imageUrl:this.data.selectList[0].picUrl
    }
    return shareInfo
      
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
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

})