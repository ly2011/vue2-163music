<template>
  <section>
    <ul class="menu_list">
      <li class="menu_item"><a href="javascript:;">
          <dl>
            <dt class="pic"><i></i></dt>
            <dd class="title"></dd>
            <span></span>
          </dl>
        </a></li>
      <li class="menu_item"><a href="javascript:;">
          <dl>
            <dt class="pic"><i></i></dt>
            <dd class="title"></dd>
            <span></span>
          </dl>
        </a></li>
      <li class="menu_item"><a href="javascript:;">
          <dl>
            <dt class="pic"><i></i></dt>
            <dd class="title"></dd>
            <span></span>
          </dl>
        </a></li>
      <li class="menu_item"><a href="javascript:;">
          <dl>
            <dt class="pic"><i></i></dt>
            <dd class="title"></dd>
            <span></span>
          </dl>
        </a></li>
      <li class="menu_item"><a href="javascript:;">
          <dl>
            <dt class="pic"><i></i></dt>
            <dd class="title"></dd>
            <span></span>
          </dl>
        </a></li>
    </ul>
  </section>
</template>
<script>
export default {
  name: 'my',
  data () {
    return {}
  }
}
</script>
<style lang="scss" scoped>
@import '../assets/scss/variables.scss';
@import '../assets/scss/mixin.scss';
$menu-item-height: 100px;
.menu_list {
  .menu_item {
    display: flex;
    height: torem($menu-item-height);
    justify-content: space-between;
    align-items: center;

  }
}
</style>
