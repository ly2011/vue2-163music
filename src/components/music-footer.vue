<template>
  <footer class="tabbar" :show="isShow" style="display: none;">
    <div class="pic">
      <img src="" alt="">
    </div>
    <div class="desc">
      <p>请选择要播放的音乐</p>
      <span>歌手</span>
    </div>
    <div class="bar">
      <i></i>
      <i></i>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'music-footer',
  data() {
    return {
      isShow: false
    }
  }
}
</script>
<style lang="scss">

</style>
