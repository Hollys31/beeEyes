// pages/recognition/recognition.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
   type:'num',
  count:0,
   fruit:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(options.type){
      this.setData({
        type: options.type,
        fruit: app.globalData.fruit
      })
      this.jumpingCount(app.globalData.fruit.fruitAmount);
    }
    
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },
  jumpingCount(num){
    const _this = this;
    let progressNum = 0;
    var timer = setInterval(function () {
      progressNum++;
      if (progressNum >= num) {
        clearInterval(timer)
      }
      _this.setData({
        count: progressNum
      })
    }, 50)
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