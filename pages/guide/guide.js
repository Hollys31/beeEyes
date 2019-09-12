// pages/guide/guide.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currStep: 1,
    type: 'size'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options);
    if(options.type){
     this.setData({
       type: options.type
     })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },
  switchTabPage(e) {
    const currStep=e.detail.current+1;
    this.setData({
      currStep: currStep
    })
  },
  changeGoodsSwipe(detail) {
    if (detail.detail.source == "touch") {
      if (detail.detail.current == 0) {
        let swiperError = this.data.swiperError;
        swiperError += 1
        this.setData({
          swiperError: swiperError
        })
        if (swiperError >= 3) { //在开关被触发3次以上
          console.error(this.data.swiperError)
          this.setData({
            currType: 1
          }); //，重置current为正确索引
          this.setData({
            swiperError: 0
          })
        }
      } else { //正常轮播时，记录正确页码索引
        this.setData({
          preIndex: detail.detail.current
        });
        //将开关重置为0
        this.setData({
          swiperError: 0
        })
      }
    }
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})