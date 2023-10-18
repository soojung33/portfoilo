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
               <v-img :src="item.image" class="item-image"></v-img>
              </v-col>
              <v-col cols="12">
                <div class="item-name">{{ item.name }}</div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
  </div>

  <v-spacer style="background-color: #000000; height: 20vh;"></v-spacer>

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

// Import Swiper styles
import 'swiper/css';

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
  };
},
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
      this.$router.push('path');
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
