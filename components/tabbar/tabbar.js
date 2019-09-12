// components/tabbar/tabbar.js
// components/tabbar/tabbar.js
const app = getApp();
const API = require('../../utils/api.js')
Component({
  /**
   * 组件的属性列表
   */
  properties: {
  },
  lifetimes: {
    attached: function () {
      // 在组件实例进入页面节点树时执行
      this.editTabbar();
    },
  },
  /**
   * 组件的初始数据
   */
  data: {
    isIphoneX: app.globalData.isIphoneX,
    tabBar: {
      "color": "#ccc",
      "selectedColor": "#00BADB",
      "borderStyle": "white",
      "list": [
        {
          'iconClass':'icon-discern',
          "pagePath": "/pages/index/index",
          "text": "拍照识别"
        },
        {
          'iconClass': 'icon-news',
          "pagePath": "/pages/news/news",
          "text": "行业资讯"
        },
        {
          'iconClass': 'icon-confuse',
          "pagePath": "/pages/confusion/confusion",
          "text": "专家解惑"
        },
        {
          'iconClass': 'icon-center',
          "pagePath": "/pages/mine/mine",
          "text": "个人中心"
        }

      ]
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handelTopage(e) {//跳转页面
      const url = e.currentTarget.dataset.url;
      wx.switchTab({
        url: url,
      })
    },
    editTabbar: function (tabbar) { //底部自定义tabbar
      let currentPages = getCurrentPages();
      let _this = currentPages[currentPages.length - 1];
      let pagePath = _this.route;
      (pagePath.indexOf('/') != 0) && (pagePath = '/' + pagePath);
      let tabBar = this.data.tabBar;
      for (let i in tabBar.list) {
        tabBar.list[i].selected = false;
        (tabBar.list[i].pagePath == pagePath) && (tabBar.list[i].selected = true);
      }
      this.setData({
        tabBar: tabBar
      })
    },

  }
})
