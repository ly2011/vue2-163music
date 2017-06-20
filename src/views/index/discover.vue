<template>
  <div class="parent-container">
    <header class="second-nav">
      <ul class="navbar">
        <li class="nav-item" :class="{'active': $route.name == 'recommend'}" @click="$router.replace({name:'recommend'})">
          <a href="javascript:;">个性推荐</a>
        </li>
        <li class="nav-item" :class="{'active': $route.name == 'songList'}" @click="$router.replace({name:'songList'})">
          <a href="javascript:;">歌单</a>
        </li>
        <li class="nav-item">
          <a href="javascript:;">电台</a>
        </li>
        <li class="nav-item">
          <a href="javascript:;">排行榜</a>
        </li>
      </ul>
    </header>
    <transition>
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'discover',
  data() {
    return {}
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
@import 'SRC/assets/scss/variables.scss';
@import 'SRC/assets/scss/mixin.scss';
$navbar-height: 80px;
.navbar {
  display: flex;
  background-color: #fff;
  position: relative;
  height: torem($navbar-height);
  &:after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 1px;
    height: 1px;
    z-index: 3;
    transform-origin: 0 0;
    transform: scaleY(.5);
    background-color: #999;
  }
  & .nav-item {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    height: 100%;
    text-align: center;
    a {
      position: relative;
      display: inline-block;
      font-size: torem(30px);
      color: #333;
      height: 100%;
      padding: torem(20px) 5px;
      box-sizing: border-box;
    }
    &.active {
      a {
        &:after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 4px;
          z-index: 3;
          transform-origin: 0 0;
          transform: scaleY(.5);
          background-color: $red;
        }
      }
    }
  }
}
</style>

