<template>
    <div class="portfolio-header"># PORTFOLIO.</div>

<div id="slider">
<swiper :slides-per-view="1" :space-between="50" @swiper="onSwiper" @slideChange="onSlideChange" :navigation="swiperOptions" ref="mySwiper">
  <swiper-slide v-for="(slide, index) in slides" :key="index">
    <div class="port-custom-card" :style="{ backgroundColor: slide.backgroundColor }">
      <div class="swiper-button-prev"></div>
      <v-row justify="center">
        <v-col cols="3" class="custom-col">
          <div class="port-header2" style="white-space: pre;">{{ slide.title }}</div>
          <div class="port-content" style="white-space: pre;">{{ slide.content }}</div>
          <v-btn class="read-more-button" @click="movePage(slide.link)">자세히 보기</v-btn>
        </v-col>
        <v-col cols="5">
          <div class="port-img-container">
            <v-img class="port-img" :src="slide.image" ></v-img>
          </div>
        </v-col>
      </v-row>
      <div class="swiper-button-next"></div>
    </div>
  </swiper-slide>
</swiper>
</div>


</template>

<script>

import { defineComponent} from 'vue'; // ref 가져오기
import PortfolioSlider from './PortfolioSlider.vue';
import aos from "aos";

//swiper 컴포넌트 import
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css'; // Swiper CSS 가져오기
import SwiperCore, { Navigation } from 'swiper/core';

SwiperCore.use([Navigation]);

export default defineComponent({
  data() {
    return {
        slides: [
        {
          title: 'BOOK & MUSIC \nLOVERS (CLUB)',
          content: '#Vue-js  #Figma \n \n 책을 읽으면서 음악도 들을 수 있는 공간 \n 본인의 책과 음원을 등록하고 수익을 얻을 수 있는 공간',
          link: '/portfolio1',
          image: require ('@/assets/B&L_M.png'),
          backgroundColor: '#f2f3f0',
        },
        {
          title: 'BEHIND GALLERY',
          content: '#Wordpress  #Adobe XD \n #Adobe Photoshop #Adobe AfterEffects \n \n \n 모네, 고흐, 고갱, 클림트의 명화를 온라인으로 볼 수 있고, \n VR 기능을 통해 실제 전시장처럼 관람할 수 있는 전시회',
          link: '/다른페이지',
          image: require ('@/assets/Behind_M2.png'),
          backgroundColor: '#dadada',
        },
        {
          title: '다른 슬라이드 제목',
          content: '다른 슬라이드 내용',
          link: '/다른페이지',
          image: require ('@/assets/Plants_M.png'),
          backgroundColor: '#eaede6',
        },
        {
          title: '다른 슬라이드 제목',
          content: '다른 슬라이드 내용',
          link: '/다른페이지',
          image: require ('@/assets/Kemoa_M.png'),
          backgroundColor: '#e8f8ff',
        },
        {
          title: '다른 슬라이드 제목',
          content: '다른 슬라이드 내용',
          link: '/다른페이지',
          image: require ('@/assets/Bbang_M.png'),
          backgroundColor: '#f7ecdf',
        },
      ],
    }
  },

  //swiper 컴포넌트 
  components: {
    Swiper,
    SwiperSlide,
  },

  setup() {
    const swiperOptions = {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    };
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      swiperOptions,
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
});

</script>

<style lang="less">

.portfolio-header {
        font-size: 30px;
        font-weight: bold;
        color: #ffffff;
        text-align: center;
        background-color: #000000;
      }

/* Swiper Container */
#slider {
  width: 100%;
  height: 100vh;
  background-color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-container {
  width: 100%; /* 슬라이더 컨테이너를 가로로 꽉 차게 설정 */
  margin-top: -5%;
}

/* Swiper Slide */
.swiper-slide {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
}

/* Image Container */
.port-img-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center; /* 가로 가운데 정렬 */
  align-items: center; /* 세로 가운데 정렬 */
  padding-left: 7%;
}

/* Slide Image */
.port-img {
  max-width: 90%;
  max-height: 90%;
}

/* Custom Card */
.port-custom-card {
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between; /* 여백 추가 */
}

/* Header and Content */
.port-header2, .port-content {
  padding-left: 10%;
  color: #000000;
  text-align: left;
  display: flex;
}

.port-header2 {
  margin-top: 30%;
  font-size: 32px;
  font-weight: bold;
  line-height: 1.3;
}

.port-content {
  margin-top: 30%;
  font-size: 13px;
  font-weight: 600;
}

/* Read More Button */
.read-more-button {
  background-color: #000000;
  color: #ffffff !important;
  padding: 5px 20px;
  text-align: center;
  cursor: pointer;
  margin-top: 15%;
  margin-left: 11%;
}

.read-more-button:hover {
  background-color: #333333; /* 버튼에 호버 효과 적용 */
}


/* 이전 화살표 (prev) */
.swiper-button-prev {
  content: '\2039'; /* 이전 화살표 모양 */
  font-size: 70px; /* 폰트 크기 */
  color: #000000; /* 검은색 */
  position: absolute;
  top: 50%; /* 중앙에서 수직 정렬 */
  left: 60px; /* 왼쪽 여백 */
  transform: translateY(-50%); /* 수직 중앙 정렬 */
  z-index: 10; /* 다른 요소 위에 위치 */
  cursor: pointer; /* 포인터 커서 효과 */
}

/* 다음 화살표 (next) */
.swiper-button-next {
  content: '\203A'; /* 다음 화살표 모양 */
  font-size:  70px; /* 폰트 크기 */
  color: #000000; /* 검은색 */
  position: absolute;
  top: 50%; /* 중앙에서 수직 정렬 */
  right: 60px; /* 오른쪽 여백 */
  transform: translateY(-50%); /* 수직 중앙 정렬 */
  z-index: 10; /* 다른 요소 위에 위치 */
  cursor: pointer; /* 포인터 커서 효과 */
}

/* 화살표에 호버 (마우스 오버) 효과 추가 */
.swiper-button-prev:hover,
.swiper-button-next:hover {
  color: #333333; /* 검은색에서 어두운 회색으로 변경 */
}

</style>