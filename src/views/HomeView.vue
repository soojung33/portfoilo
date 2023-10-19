<template>
  <div id="home" style="background-color: #000000; display: flex; justify-content: center; align-items: center; height: 100vh;">
    <v-img src="@/assets/main2.png" alt="Main Image" style="max-width: 65%; max-height: 65%;"></v-img>
  </div>

  <div id="portfolio-skill">
    <div class="header">S K I L L S</div>
      <v-row justify="center">
        <v-col cols="3" v-for="(item, index) in portfolioItems" :key="index">
         <v-card class="custom-card">
            <v-row no-gutters>
              <v-col cols="12">
               <v-img :src="item.image" class="item-image" data-aos="fade-up"></v-img>
              </v-col>
              <v-col cols="12">
                <div class="item-name" data-aos="fade-up">{{ item.name }}</div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
  </div>

  <v-spacer style="background-color: #000000; height: 20vh;"></v-spacer>

  <div class="portfolio-header"># PORTFOLIO.</div>

  <div id="slider">
  <swiper :slides-per-view="1" :space-between="50" @swiper="onSwiper" @slideChange="onSlideChange" :navigation="swiperOptions" ref="mySwiper">
    <swiper-slide v-for="(slide, index) in slides" :key="index">
      <div class="port-custom-card" :style="{ backgroundColor: slide.backgroundColor }">
        <div class="swiper-button-prev"></div>
        <v-row justify="center">
          <v-col cols="3" class="custom-col">
            <div class="port-header2">{{ slide.title }}</div>
            <div class="port-content" style="white-space: pre;">{{ slide.content }}</div>
            <v-btn class="read-more-button" @click="movePage(slide.link)">자세히 보기</v-btn>
          </v-col>
          <v-col cols="5">
            <div class="port-img-container">
              <v-img class="port-img" :src="slide.image"></v-img>
            </div>
          </v-col>
        </v-row>
        <div class="swiper-button-next"></div>
      </div>
    </swiper-slide>
  </swiper>
  </div>

  <div id="portfolio">
    <div class="header"> 포트폴리오 </div>

    <div class="list">
      <div class="item" @click="movePage('/portfolio1')" data-aos="fade-up"
        style="background-image:url(/portfolio/B&L.gif)"></div>
      <div class="item" data-aos="fade-up" style="background-image:url(/portfolio/Behind_1.gif)"></div>
      <div class="item" data-aos="fade-up" style="background-image:url(/portfolio/makeit.gif)"></div>
      <div class="item" data-aos="fade-up" style="background-image:url(/portfolio/img2.gif)"></div>
      <div class="item" data-aos="fade-up" style="background-image:url(/portfolio/img4.gif)"></div>
      <div class="item" data-aos="fade-up" style="background-image:url(/portfolio/img6.gif)"></div>
    </div>
  </div>
</template>

<script>
import { defineComponent} from 'vue'; // ref 가져오기

//swiper 컴포넌트 import
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css'; // Swiper CSS 가져오기
import SwiperCore, { Navigation } from 'swiper/core';

SwiperCore.use([Navigation]);

//스크롤할 때 애니메이션 효과 주는 라이브러리
import aos from "aos";

// Components
import HelloWorld from '../components/HelloWorld.vue';

export default defineComponent({
  data() {
  return {
    portfolioItems: [
      { name: 'Adobe Photoshop', image: require ('@/assets/adobe-photoshop.png')},
      { name: 'Adobe Illustrator', image: require ('@/assets/adobe-AI.png')},
      { name: 'Adobe XD', image: require ('@/assets/adobe-xd.png')},
      { name: 'Figma', image: require ('@/assets/figma.png')},
      { name: 'Html', image: require ('@/assets/html.png') },
      { name: 'Css', image: require ('@/assets/css.png')},
      { name: 'Java', image: require ('@/assets/java.png') },
      { name: 'Vue-js', image: require ('@/assets/vue-js.png') },
    ],
    slides: [
        {
          title: 'BOOK & MUSIC LOVERS (CLUB)',
          content: '#Vue-js #Figma \n \n 책을 읽으면서 음악도 들을 수 있는 공간 \n 본인의 책과 음원을 등록하고 수익을 얻을 수 있는 공간',
          link: '/portfolio1',
          image: require ('@/assets/B&L_M.png'),
          backgroundColor: '#f2f3f0',
        },
        {
          title: '다른 슬라이드 제목',
          content: '다른 슬라이드 내용',
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
      ],
  };
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
  name: 'HomeView',

});

</script>

<style lang="less">

#home {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start; /* 이미지를 위쪽으로 정렬 */
  background-color: #000000;
  margin-top: -2%; 

  img {
    max-width: 100%;
    max-height: 100%;
  }
}

#portfolio-skill {

  background-color: #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ffffff;

  .header {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 5%;
  }

  .item-container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

  .item-image {
    width: 70%;
    height: 70%;
    display: block; /* 이미지를 블록 요소로 만듭니다. */
    margin: 0 auto; /* 이미지를 수평으로 가운데 정렬합니다. */
}

  .custom-card {
    margin-bottom: 20%;
    background-color: #000000;
  }

  .item-name {
    font-weight: medium;
    font-size: 15px;
    color: #ffffff;
    text-align: center; /* 텍스트를 가운데 정렬합니다. */
  }
}
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
  margin-left: 10%;
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


#portfolio {
  .header {
    text-align: center;
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 10%;
    margin-top: 10%;
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
    }

  }

  margin-bottom: 100px;
}
</style>