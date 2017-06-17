import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './config'

// 自定义滚动指令
Vue.directive('scroll', {
  bind(el, binding) {
    window.addEventListener('scroll', () => {
      const fnc = binding.value
      fnc && fnc(el)
    })
  }
})

const app = new Vue({
  router,
  render: h => h(App)
})
export {app, router}
