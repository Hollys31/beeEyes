// pages/mine/record.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: [{ 'name': '果品大小', 'type': 'size' }, { 'name': '拍照数果', 'type': 'num' }, { 'name': '种植品种', 'type': 'sort' }, { 'name': '植物健康', 'type': 'health' }],
    currTab: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  changetab(e) {
    const idx = e.currentTarget.dataset.idx;
    this.setData({
      currTab: idx
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