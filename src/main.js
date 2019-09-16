import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */)

import headers from '@/components/Header'
Vue.component('Headers',headers)

import Axios from 'axios'
Vue.prototype.$axios=Axios
Axios.defaults.baseURL="http://txrui.cn/api"
// http://dt.zcmax.top/api
//token
Axios.interceptors.request.use(function(config){
  // console.log(config.url)
  if(config.url!='/users/login'){
    const AUTH_TOKEN = localStorage.getItem('token')
    config.headers["Authorization"] = AUTH_TOKEN
  }
  return config
},function(error){
  return Promise.reject(error)
})
Axios.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
 
  return response;
}, function (error) {
      router.push({name:'login'})
  return Promise.reject(error);
})



// import vUploader from 'v-uploader';
// const userId = localStorage.getItem('userId')
// const uploaderConfig = {
//   // file uploader service url
//   uploadFileUrl: 'http://dt.zcmax.top/api/users/upload/'+userId,
//   // file delete service url
//   // deleteFileUrl: 'http://xxx/upload/deleteUploadFile',
//   // set the way to show upload message(upload fail message)
//   showMessage: (vue, message) => {
//       //using v-dialogs to show message
//       console.log(message)
//       console.log(vue)
//       vue.$dlg.alert(message, {messageType: 'error'});
//   }
// };

// install plugin with options
// Vue.use(vUploader, uploaderConfig);

Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
