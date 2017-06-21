<template>
  <div class="songList-container">
    <header class="featured_songs">
      <div class="blur-background"></div>
      <a href="javascript:;" class="songs_box">
        <div class="featured_songs_img">
          <img src="http://p1.music.126.net/Dvndq-PqlUvzRrhMg6aX4g==/18969874114219922.jpg" alt="台湾原住民音乐地图">
        </div>
        <div class="featured_songs_info">
          <h3 class="featured_songs_label">精品歌单</h3>
          <h4 class="featured_songs_title">台湾原住民音乐地图</h4>
          <p class="featured_songs_desc">
            台湾有多少原住民歌手？这个数字或许很难统计。张惠妹、A-Lin、温岚、动力火车、张雨生、张震岳、萧敬腾、蔡依林等原住民或有原住民血统的知名歌手可谓不胜枚举。不过，这个歌单不打算收录上述人的作品，因为他们的作品绝大多数是走的国语流行路线，是非常主流的音乐。这里收录的歌手，大多时候还保留有原住民特色，要么以演唱民歌/民谣为主，要么作品已非常时尚，但仍多以母语演唱。 —————— 偏民歌/民谣的如： 胡德夫，卑南族/排湾族，被誉为“台湾民歌之父”，不仅是民歌运动的推动者，更是当代华语流行音乐的启蒙人，没有胡德夫可能就没有今天的华语音乐。 郭英男，阿美族，被族人尊称为“阿公”，可能是最著名的原住民歌手，为推广本族音乐作出非常重要的贡献，一曲《老人饮酒歌》更是唱响海外。 陈建年，卑南族，民谣大师陆森宝的传人，也是除胡德夫之外，今天原住民音乐最重要的代表，带出了纪晓君、家家、吴昊恩、南王姐妹花等重要卑南族歌手。 林广财，排湾族，贵族头目，为挽救衰落的排湾文化，亲身大力传播排湾古谣。与胡德夫、云力思一起，被誉为台湾当代最美的声音。 云力思，泰雅族，用八年时间打动部落长老，破除了女人不允许唱古谣的禁忌，收集整理并重新诠释了许多泰雅古谣。 纪晓君，卑南族，实在太会唱歌，嗓音犹如天籁，民族之美在她身上体现得淋漓尽致。 巴奈，卑南族/阿美族，流浪与生存的困苦，不再是男人的专利，她用低沉的嗓音，唱出了城市与故乡之间深深的孤独。 —————— 偏现代的如： 查劳·巴西瓦里，阿美族，既有非常深情的民歌，也有非常潮的波萨诺瓦风情。 以莉·高露，阿美族，嗓音和唱腔令人惊艳的爵士歌手。 欧开合唱团，泰雅族，获得过世界大奖的阿卡贝拉合唱团。 —————— 太多了，不一而足，所以这个歌单以后还会壮大的。郭英男、纪晓君、以莉·高露等歌手网易缺了部分版权，以后有的话这里也会补上。 封面是吴昊恩《洄游》专辑的封面（部分）。
          </p>
        </div>
      </a>
    </header>
  </div>
</template>
<script>
export default {
  name: 'songList',
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
.songList-container {
  .featured_songs {
    padding-top: torem(20px);
    position: relative;
    .blur-background {
      background-image: url(http://p1.music.126.net/Dvndq-PqlUvzRrhMg6aX4g==/18969874114219922.jpg);
      background-position: 50%;
      -webkit-filter: blur(.6rem) brightness(.6);
      filter: blur(.6rem) brightness(.6);
      position: absolute;
      width: 100%;
      top: 0;
      left: 0;
      height: 100%;
    }
  }
  .songs_box {
    display: flex;
    padding: torem(16px);
    .featured_songs_img {
      width: torem(160px);
      height: torem(160px);
      padding-right: torem(16px);
    }
    .featured_songs_info {
      flex: 1 1 auto;
      width: 1%;

      font-weight: 400;
      .featured_songs_label {
        color: #fff;
        @include ell;
        font-size: torem(32px);
      }
      .featured_songs_title {
        color: #fff;
        @include ell;
        font-size: torem(28px);
      }
      .featured_songs_desc {
        color: #fff;
        line-height: 1.2;
        @include ell;
        font-size: torem(24px);
      }
    }
  }
}
</style>

