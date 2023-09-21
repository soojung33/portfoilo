<template>
  <div id="top">
    <swiper :slides-per-view="1" :space-between="50" @swiper="onSwiper" @slideChange="onSlideChange">
      <swiper-slide style="background-image:url(/img3.gif)" class="slide">
        <div class="header">명지전문대 정보통신공학과 허수정</div>
      </swiper-slide>

      <swiper-slide style="background-image:url(/img2.gif)" class="slide">
        <div class="header">명지전문대 정보통신공학과 허수정</div>
      </swiper-slide>

      <swiper-slide style="background-image:url(/img1.gif)" class="slide">
        <div class="header">명지전문대 정보통신공학과 허수정</div>
      </swiper-slide>

    </swiper>
  </div>

  <div id="portfolio">
    <div class="header"> 포트폴리오 </div>

    <div class="list">
      <div class="item" @click="movePage('/portfolio1')" data-aos="fade-up" style="background-image:url(/img1.gif)"></div>
      <div class="item" data-aos="fade-up" style="background-image:url(/img3.gif)"></div>
      <div class="item" data-aos="fade-up" style="background-image:url(/img7.gif)"></div>
      <div class="item" data-aos="fade-up" style="background-image:url(/img2.gif)"></div>
      <div class="item" data-aos="fade-up" style="background-image:url(/img4.gif)"></div>
      <div class="item" data-aos="fade-up" style="background-image:url(/img6.gif)"></div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

//swiper 컴포넌트 import
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

//스크롤할 때 애니메이션 효과 주는 라이브러리
import aos from "aos";

// Components
import HelloWorld from '../components/HelloWorld.vue';

export default defineComponent({
  //swiper 컴포넌트 
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
    };
  },
  //aos 
  mounted() {
    aos.init();
  },
  methods: {
    movePage(path) {
      this.$router.push(path);
    }
  },
  name: 'HomeView',

});
</script>

<style lang="less">
#top {
  height: 90vh;

  .swiper {
    height: 80vh;

    .slide {
      background-position: center center;
      background-size: cover;
      text-align: center;
      vertical-align: middle;

      .header {
        font-size: 30px;
        font-weight: 600;
        display: inline-block;
        height: 100%;
        vertical-align: middle;
        align-items: center;

      }
    }
  }
}

#portfolio {
  .header {
    text-align: center;
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 50px;
  }

  width: 1000px;
  margin: 0 auto;

  .list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;

    .item {
      height: 300px;
      background-position: center center;
      background-size: cover;
      border-radius: 20px;

      //1:1 비율이 되도록
      aspect-ratio: 1/1;
    }

  }

  margin-bottom: 100px;
}
</style>
