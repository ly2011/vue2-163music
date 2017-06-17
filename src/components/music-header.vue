<template>
<nav class="parent-nav">
  <div class="tab">
    <div class="nav-left">
      <i class="iconfont icon-list"></i>
      <!--<i class="iconfont icon-fanhui"></i>-->
    </div>
    <div class="navbar">
      <div class="navbar__item"><i class="iconfont icon-yinle"></i></div>
      <div class="navbar__item"><i class="iconfont icon-yunyinyue"></i></div>
      <div class="navbar__item"><i class="iconfont icon-haoyou"></i></div>
    </div>
    <div class="nav-right"><i class="iconfont icon-chaxun"></i></div>
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
@import '../assets/scss/mixin.scss';
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
  height: torem($header-height);
  width: 100%;
  position: relative;
  color: #fff;
  display: flex;
}
.navbar {
  width: 50%;
  height: 100%;
  display: flex;
  // flex: 1 1 50%;
  align-content: space-between;
  align-items: center;
  & > .navbar__item {
    height: 100%;
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    & > i {
      color: #fff;
      font-weight: 700;
      font-size: torem(48px);
    }
  }
}
.nav-left {
  display: flex;
  align-content: flex-start;
  align-items: center;
  padding-left: torem(20px);
  flex: 1;
  & > i {
    font-size: torem(32px);
  }
}
.nav-right {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  flex: 1;
  & > i {
    color: #fff;
    font-size: torem(32px);
    padding-right: torem(20px);
  }
}
</style>

