const HTTP = require('./http.js');
const API_BASE_URL = "http://192.168.2.114:9999/api"
module.exports = {
  getOpenId: (params = {}) => {//获取openid
    return HTTP({
      url: API_BASE_URL + '/img' + params.code,
      method: 'GET',
      data: {}
    })
  },
  uploadPhoto: (params = {}) => {//照片上传
    return HTTP({
      url: API_BASE_URL + '/fruit/v1/image/upload',
      method: 'POST',
      data: params
    })
  },
  recognitionResult: (params = {}) => {//识别结果
    return HTTP({
      url: API_BASE_URL+'/fruit/v1/image/imgResults',
      method: 'POST',
      data: params
    })
  },

}
