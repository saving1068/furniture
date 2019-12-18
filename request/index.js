
let request = ({
  url,
  data,
  method = 'POST',
  header,
  isShowLoading = false
})=>{
  return new Promise((resolve, reject) => {
    //显示loading效果
    if (isShowLoading) {
      wx.showToast({
        title: '加载中'
      })
    }
    console.log(data)
    const baseUrl = 'http://2821r97k36.wicp.vip/mine/'
    wx.request({
      url: baseUrl+url,
      data,
      method,
      header,
      success: function (res) {
        // return res.data.data
        let obj = {
          data: res.data.data,
          web: res.data.web
        }
        resolve(obj)
      },
      fail: function (err) {

        wx.showToast({
          title: err.errMsg,
          icon:'none'
        })
        reject(err);
       
      },
      complete: function (e) {

        if (isShowLoading) {
          wx.hideLoading();
        }

      }
    })
  })
}

module.exports ={ request} 
