// components/step/step.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    currStep: {
      type: Number,
      value: 1
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeStep(e) {
      const idx = e.currentTarget.dataset.idx;
      let pages = getCurrentPages();
      let currPage = pages[pages.length - 1];
      currPage.setData({
        currStep: idx
      })
     
    },
  }
})
