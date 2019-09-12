// components/modal/modal.js
Component({
  /**
   * 组件的属性列表
   */
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  properties: {
    btnText:{
      type:String,
      value:'完成'
    },
    iconClass:{
      type:String,
      value:'icon-ok'
    },
    iconColor:{
      type: String,
      value: '#00BADB'
    },
    show:{
      type:Boolean,
      value:false
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
    handelButton(){
      this.triggerEvent('modalEvent')
  
    }
  }
})
