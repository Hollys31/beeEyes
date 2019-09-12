// pages/takePhoto/takePhoto.js
const app = getApp();
const API = require('../../utils/api.js')
const funs = require('../../utils/fun.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    modules: [{ 'name': '果品大小', 'type': 'size' }, { 'name': '拍照数果', 'type': 'num' }, { 'name': '种植品种', 'type': 'sort' }, { 'name': '植物健康', 'type': 'health' }],
    currType: null,
    src: '',
    hasFlash: false,
    show: false,
    clickCount: 0,
    timmer: null,
    recognitTime: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.type) {
      this.setData({
        currType: options.type
      })
    } else {
      this.setData({
        currType: 'num'
      })
    }
  },

  rePhoto() {//重新拍摄
    this.setData({
      src: '',
      show: false
    })
  },
  handleFlash() {//闪光灯切换
    this.setData({
      hasFlash: !this.data.hasFlash
    })
  },
  changetype(e) {//识别类型切换
    const type = e.currentTarget.dataset.type;
    this.setData({
      currType: type
    })
  },
  viewAlbums() {//浏览相册
    const _this = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        const tempFilePaths = res.tempFilePaths[0];
        _this.setData({
          src: tempFilePaths
        })
      }
    })
  },
  takePhoto() {//拍照
    const _this = this;
    const ctx = wx.createCameraContext();
    ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        const url = res.tempImagePath;
        _this.setData({
          src: url
        })
      }
    })
  },
  downloadFile: function () {/* 文件上传 */
    const _this = this;
    console.log(_this.data.src);
    return new Promise(function (resolve, reject) {
      wx.uploadFile({
        url: 'http://192.168.2.114:9999/api/fruit/v1/image/upload',
        filePath: _this.data.src,
        name: 'file',
        formData: {
          openId: 'ajkkjdgidg1123'
        },
        header: {
          "Content-Type": "multipart/form-data"
        },
        success(res) {
          console.log(res);
          // app.globalData.imgId = result.data.imgId;
          resolve(JSON.parse(res.data));
        },
        fail(e) {
          _this.setData({
            show: true
          })
          reject();
        },
        complete() {

        }
      })
    })
  },

  error(e) {
    console.log(e.detail)
  },
  canclePhoto() {//取消
    this.setData({
      src: ''
    })
  },
  toDiscern: funs.throttle(function(){//确定识别
    const _this = this;
    this.downloadFile().then(res => {
      console.log(res);
      if (res.data.imgId) {
        const imgId = parseInt(res.data.imgId);
        wx.showToast({
          title: '识别中',
          icon: 'loading',
        })
        const timmer = setTimeout(function () {
          _this.recognitionResult(imgId)
        }, 1000)
      }

    })
  }),
  recognitionResult(imgId) {//识别结果查询
    const _this = this;
    API.recognitionResult({
      imgId: imgId
    }).then(res => {
      wx.hideToast();
      if (res.data.imgStatus === 'Y') {
        app.globalData.fruit = res.data;
        wx.navigateTo({
          url: '/pages/recognition/recognition?type=num',
        })
      } else {
        _this.data.recognitTime++;
        if (_this.data.recognitTime < 5) {
          let timer = setTimeout(function () {
            _this.recognitionResult(imgId)
          }, 3000)
        }else{
          _this.setData({
            show: true
          })
        }
      }
    })
  },

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