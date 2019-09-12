//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    show:false,
    modules: [{ 'name': '果品大小','type':'size'}, { 'name': '拍照数果','type':'num' }, { 'name': '种植品种','type':'sort' }, { 'name': '植物健康','type':'health'}]
   /*  canIUse: wx.canIUse('button.open-type.getUserInfo') */
  },
  onLoad: function () {
    wx.hideTabBar();
  },
  cancelModal(){//关闭提示模态框
    this.setData({
      show:false
    })
  },
  showTips() {//开启提示模态框
    this.setData({
      show:true
    })  
  },
})
