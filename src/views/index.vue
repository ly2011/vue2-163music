<template>
  <div class="parent-container">
    <music-header></music-header>
    <section name="second-container" class="has-footbar">
      <transition name="router-slide" mode="out-in">
        <router-view></router-view>
      </transition>
    </section>
    <keep-alive>
      <music-footer></music-footer>
    </keep-alive>
  </div>
</template>
<script>
import musicHeader from 'SRC/components/music-header'
import musicFooter from 'SRC/components/music-footer'
export default {
  name: 'index',
  data() {
    return {}
  },
  components: {
    musicHeader,
    musicFooter
  },
  mounted() { }

}
</script>
