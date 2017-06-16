<template>
<nav class="parent-nav">
  <div class="tab">
    <div class="nav-left">
      <i class="iconfont icon-list"></i>
      <i class="iconfont icon-fanhui"></i>
    </div>
    <div class="navbar">
      <div class="navbar__item"><i></i></div>
      <div class="navbar__item"><i></i></div>
      <div class="navbar__item"><i></i></div>
    </div>
    <div class="nav-right"><i></i></div>
  </div>
</nav>
</template>
<script>
export default {
  name: 'music-header',
  data() {
    return {
      showMenu: false
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../assets/scss/variables.scss';
nav.parent-nav{
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  background-color: $red;
}
.tab {
  height: $header_height;
  width: 100%;
  position: relative;
  color: #fff;
  display: flex;
}
.navbar {
  width: 50%;
  height: 100%;

}
</style>

