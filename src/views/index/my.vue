<template>
  <div>
    <ul class="menu_list">
      <li class="menu_item">
        <a href="javascript:;">
          <i class="iconfont icon-yinle"></i>
          <span class="title">本地音乐</span>
        </a>
      </li>
      <li class="menu_item">
        <a href="javascript:;">
          <i class="iconfont icon-zuijinbofang"></i>
          <span class="title">最近播放</span>
        </a>
      </li>
      <li class="menu_item">
        <a href="javascript:;">
          <i class="iconfont icon-xiazai"></i>
          <span class="title">下载管理</span>
        </a>
      </li>
      <li class="menu_item">
        <a href="javascript:;">
          <i class="iconfont icon-diantai"></i>
          <span class="title">我的电台</span>
        </a>
      </li>
      <li class="menu_item">
        <a href="javascript:;">
          <i class="iconfont icon-shoucang"></i>
          <span class="title">我的收藏</span>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'my',
  data() {
    return {}
  }
}
</script>
<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';
@import '../../assets/scss/mixin.scss';
$menu-item-height: 60px;
.menu_list {
  .menu_item {
    position: relative;

    & a {
      position: relative;
      display: flex;
      height: torem($menu-item-height);
      justify-content: space-between;
      align-items: center;
      padding: torem(20px) torem(30px);
      &:before {
        content: "";
        position: absolute;
        left: torem(30px);
        top: 0;
        right: 0;
        height: 1px;
        z-index: 2;
        transform-origin: 0 0;
        transform: scaleY(.5);
        background-color: #e5e5e5;
      }
      & i {
        vertical-align: top;
        box-sizing: content-box;
        width: torem(50px);
        padding-right: torem(20px);
        font-size: torem(40px);
        color: $red;
      }
      & .title {
        flex: 1 1 auto;
        font-size: torem(34px);
        color: #333;
        @include ell;
      }
    }
  }
}
</style>
