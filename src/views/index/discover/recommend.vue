<template>
  <div class="recomment-container">
    <div class="home_recommend">
      <h2 class="remd_title">推荐歌单</h2>
      <div class="remd_songs">
        <ul class="remd_ul">
          <li class="remd_li">
            <a href="javascript:;">
              <div class="remd_logo">
                <img src="" alt="">
                <span class="remd_lnum">2535万</span>
              </div>
              <p class="remd_text">麻麻，我想跟他们合唱！| 我想和你唱特辑</p>
            </a>
          </li>
          <li class="remd_li">
            <a href="javascript:;">
              <div class="remd_logo">
                <img src="" alt="">
                <span class="remd_lnum">2535万</span>
              </div>
              <p class="remd_text">麻麻，我想跟他们合唱！| 我想和你唱特辑</p>
            </a>
          </li>
          <li class="remd_li">
            <a href="javascript:;">
              <div class="remd_logo">
                <img src="" alt="">
                <span class="remd_lnum">2535万</span>
              </div>
              <p class="remd_text">麻麻，我想跟他们合唱！| 我想和你唱特辑</p>
            </a>
          </li>
          <li class="remd_li">
            <a href="javascript:;">
              <div class="remd_logo">
                <img src="" alt="">
                <span class="remd_lnum">2535万</span>
              </div>
              <p class="remd_text">麻麻，我想跟他们合唱！| 我想和你唱特辑</p>
            </a>
          </li>

          <li class="remd_li">
            <a href="javascript:;">
              <div class="remd_logo">
                <img src="" alt="">
                <span class="remd_lnum">2535万</span>
              </div>
              <p class="remd_text">麻麻，我想跟他们合唱！| 我想和你唱特辑</p>
            </a>
          </li>
          <li class="remd_li">
            <a href="javascript:;">
              <div class="remd_logo">
                <img src="" alt="">
                <span class="remd_lnum">2535万</span>
              </div>
              <p class="remd_text">麻麻，我想跟他们合唱！| 我想和你唱特辑</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'recommend',
  data() {
    return {}
  },
  components: {
  },
}
</script>
<style lang="scss" scoped>
@import 'SRC/assets/scss/variables.scss';
@import 'SRC/assets/scss/mixin.scss';
.home_recommend {
  padding-top: torem(40px);
  .remd_title {
    position: relative;
    height: torem(40px);
    line-height: torem(40px);
    font-size: torem(34px);
    padding-left: torem(18px);
    font-weight: normal;
    margin-bottom: torem(28px);
    &:after {
      content: "";
      position: absolute;
      top: 50%;
      left: 0;
      margin-top: torem(-16px);
      height: torem(32px);
      width: torem(4px);
      background-color: $red;
    }
  }
  .remd_songs {
    padding-bottom: torem(48px);
    .remd_ul {
      display: flex;
      flex-wrap: wrap;
      padding-bottom: torem(32px);
      .remd_li {

        flex: 1 1 33.333333%;
        width: 1%;
        margin-right: torem(6px);
        >a {
          display: block;
          .remd_logo {
            .remd_lnum {
              font-size: torem(24px);
              color: #fff;
            }
          }
          .remd_text {
            color: #333;
            font-size: torem(26px);
          }
        }
      }
    }
  }
}
</style>

