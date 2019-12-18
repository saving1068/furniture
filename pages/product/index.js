// pages/product/index.js
import api from "../../api/product.js"
import util from '../../utils/util.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navBar: [],
    navCurrent: 0,
    list: [
    ],
    imageList: [],
    page: 1,
    listRows: 10,
    noData: false,
    ncType: '',
    loadComplete: false,
    canClick: true,
    ifSelect:false,
    selectList:[
      // { picUrl: '../../images/product.png', title: '沙发萨芬' },
      // { coverUrl: '../../images/picture.png', title: '沙发萨芬' },
      // { coverUrl: '../../images/profile.png', title: '沙发萨芬' },
    ],
    page:1,
    total:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(api)
    this.getSeries()
    let obj = {
      pdType: this.data.ncType,
      page: this.data.page
    }
    this.getProduct(obj)
  },
  share(){
    let selectId = [];
    this.data.selectList.forEach((item)=>{
      selectId.push(item.id)
    })
    if (selectId.length<=0){
      return wx.showToast({
        title: '请选入款式',
        icon:'none'
      })
    }
    let obj ={
      ids: selectId.join(',')
    }
    api.selectList(obj).then((res)=>{
      console.log(res)
      wx.navigateTo({
        url: '../share/index?selectId=' + selectId,
      })
    })
    
  },
  reduce(e){
    let index = this.data.selectList.findIndex((item) => item.picUrl == e.currentTarget.dataset.item.picUrl);
    let select = [...this.data.selectList];
    select.splice(index,1)
    this.setData({
      selectList: select
    })
  },
  pushShare(e){
    let item = this.data.selectList.find((item) => item.picUrl == e.currentTarget.dataset.item.picUrl);
    let select = [...this.data.selectList];
    console.log(e.currentTarget.dataset)
    console.log(item)
    
    if(!item){
      select.push(e.currentTarget.dataset.item)
      console.log(select)
      this.setData({
        selectList:select
      })
      
    }else{
      wx.showToast({
        title: '请勿重复添加',
        icon:'none'
      })
    }
  },
  select(){
    this.setData({
      ifSelect:!this.data.ifSelect
    })
  },
  getSeries(){
    api.getSeries().then((res)=>{
      this.setData({
        navBar: res.data
      })
    })
  },
  getProduct(obj){
    this.data.canClick =false;
    wx.showLoading({
      title: '加载中',
      mask:true
    })
    console.log(obj)
    api.getProductList(obj).then((res) => {
      res.data.map(item => {
        item.picUrl = util.completion(res.web, item.picUrl)
      })
      let list = [...this.data.list];
      list = [...list,...res.data];
      list.forEach((item)=>{
        this.data.imageList.push(item.picUrl)
      })
      console.log(list)
      this.setData({
        list: list,
        canClick:true,
        total: res.total
      })
      wx.hideLoading()
    })
  },
  getImage(e){
    console.log(e)
    wx.previewImage({
      current: e.currentTarget.dataset.url, // 当前显示图片的http链接
      urls: this.data.imageList, // 需要预览的图片http链接列表

    })

  },
  navChange(e) {
    if (this.data.canClick) {
      this.setData({
        // canClick: false,
        navCurrent: e.currentTarget.dataset.index,
        ncType: e.currentTarget.dataset.type,
        list: [],
        // noData: false,
        // loadComplete: false,
      })
      let obj = {
        pdType: e.currentTarget.dataset.type,
        page: this.data.page
      }
      this.getProduct(obj)

    }else{
      wx.showToast({
        title:"请勿过快操作",
        icon:'none'
      })
    }
  },
  jump(e) {
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: "../productDetail/index?id=" + id
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
    if (this.data.list.length < this.data.total){
      this.data.page++
      let obj = {
        pdType: this.data.ncType,
        page: this.data.page
      }
      this.getProduct(obj)
    }
    
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})