<template>
  <div id="app" v-scroll="">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'app',
  data() {
    return {
      goTop: false
    }
  },
  computed: {},
  mounted() {

  },
  methods: {
    // 显示返回顶部按钮
    showTop() {
      if (document.body.scrollTop > 200) {
        this.goTop = true
      } else {
        this.goTop = false
      }
    },
    // 返回顶部
    goTop() {
      let speed = 10
      const timer = setInterval(() => {
        if (window.body.scrollTop > 0) {
          document.body.scrollTop = document.body.scrollTop - speed > 0 ? document.body.scrollTop - speed : 0
          speed += 20
        } else {
          clearInterval(timer)
        }
      }, 16)
    }
  }
}
</script>
<style lang="scss">
@import 'assets/scss/base.scss';
@import 'assets/scss/mixin.scss';
@import 'assets/scss/variables.scss';
@import url('http://at.alicdn.com/t/font_wmjemf1ohe0cnmi.css');
</style>

