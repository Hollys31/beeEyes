const HTTP = amount => {
  return new Promise(function (resolve, reject) {
    wx.request({
      header: {
        'content-type': 'application/x-www-form-urlencoded',
      },
      ...amount,
      success: function (res) {
        if (res.data.status == 200 || res.data.status == 999064) {
          resolve(res.data);
        }
      },
      fail: function (err) {
        wx.showToast({
          title: '请求出错',
          icon: 'none',
          duration: 2000
        })
        reject();
      },
      complete: function () {
        wx.hideLoading();
      }
    })
  })

}
module.exports = HTTP;

