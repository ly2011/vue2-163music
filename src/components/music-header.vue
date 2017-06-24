<template>
  <nav class="parent-nav">
    <div class="tab">
      <div class="nav-left">
        <i class="iconfont icon-list"></i>
        <!--<i class="iconfont icon-fanhui"></i>-->
      </div>
      <div class="navbar">
        <!--$route.matched[1]只有在route mode: 'hash' 下才有，否则会报错-->
        <div class="navbar__item" :class="{'active':$route.name=='my'}" @click="$router.push({name:'my'})">
          <i class="iconfont icon-yinle"></i>
        </div>
        <div class="navbar__item" :class="{'active':$route.name=='discover'}" @click="$router.push({name:'discover'})">
          <i class="iconfont icon-yunyinyue"></i>
        </div>
        <div class="navbar__item">
          <i class="iconfont icon-haoyou"></i>
        </div>
      </div>
      <div class="nav-right">
        <i class="iconfont icon-chaxun"></i>
      </div>
    </div>
    <div class="left_menu">
      <div class="left_menu_mask"></div>
      <div class="left_menu_actionsheet">
        <div class="left_menu_header">
          <div class="left_menu_header_body">
            <div class="user_info">
              <img class="user_avatar" src="../assets/images/default_cover.png" alt="">
              <p class="user_name">请登录</p>
            </div>
          </div>
        </div>
        <div class="left_menu_body"></div>
        <div class="left_menu_footer"></div>
      </div>
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
nav.parent-nav {
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
  display: flex; // flex: 1 1 50%;
  align-content: space-between;
  align-items: center;
  &>.navbar__item {
    height: 100%;
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    &>i {
      color: #ddd;
      font-weight: normal;
      font-size: torem(40px);
    }
    &.active {
      i {
        color: #fff;
        font-weight: bold;
        font-size: torem(48px);
      }
    }
  }
}

.nav-left {
  display: flex;
  align-content: flex-start;
  align-items: center;
  padding-left: torem(20px);
  flex: 1;
  &>i {
    font-size: torem(32px);
    color: #fff;
  }
}

.nav-right {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  flex: 1;
  &>i {
    color: #fff;
    font-size: torem(32px);
    padding-right: torem(20px);
  }
}

.left_menu {
  .left_menu_mask {
    position: fixed;
    z-index: 1000;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(0, 0, 0, .6);
  }
  .left_menu_actionsheet {
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 5000;
    background-color: #efeff4;
    min-width: 80%;
    height: 100%;
    overflow: hidden;

    .left_menu_header {
      display: flex;
      align-items: center;
      height: 20%;
      overflow: hidden;
      padding: 0 torem(40px);
      line-height: 1.4;
      font-size: torem(28px);
      color: #888;
      background-color: #fcfcfd;
      background: url("../assets/images/default_user_bg.jpg") no-repeat center center;
      background-size: cover;
      .left_menu_header_body {
        flex: 1;
        .user_info {
          width: torem(120px);
          text-align: center;
          .user_avatar {
            border-radius: 100%;
          }
          .user_name {
            color: #fff;
          }
        }
      }

    }

    .left_menu_body {
      flex: 1;
      background-color: #efeff4;
    }
    .left_menu_footer {
      margin-top: torem(12px);
      background-color: #fcfcfd;
    }
  }
}

</style>

