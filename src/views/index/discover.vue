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
<style lang="scss">
.parent-container {
    display: flex;
    flex-direction: column;
}
</style>

<style lang="scss" scoped>
@import 'SRC/assets/scss/variables.scss';
@import 'SRC/assets/scss/mixin.scss';
$navbar-height: 80px;

.navbar {
  display: flex;
  background-color: #fff;
  position: relative;
  & .nav-item {
    flex: 1;
    text-align: center;
    a {
      position: relative;
      display: inline-block;
      font-size: torem(30px);
      color: #333;
      padding: torem(20px) torem(10px);
    }
    &.active {
      a {
        &:after {
          position: absolute;
          content: "";
          left: 0;
          right: 0;
          bottom: -1px;
          height: 4px;
          transform: scaleY(.5);
          background-color: $red;
        }
      }
    }
  }
}
</style>

