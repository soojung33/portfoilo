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
  <PortfolioSlider v-if="showPortfolioSlider" />
  <Design v-if="showDesign" />
</template>

<script>
import { defineComponent} from 'vue'; // ref 가져오기

import PortfolioSlider from '@/views/PortfolioSlider.vue';
import Design from '@/views/Design.vue';

//스크롤할 때 애니메이션 효과 주는 라이브러리
import aos from "aos";

// Components
import HelloWorld from '../components/HelloWorld.vue';

export default defineComponent({
  components:{
    PortfolioSlider,
    Design,
    },
  data() {
  return {
    showPortfolioSlider: true, // PortfolioSlider 표시 여부
      showDesign: true, // Design 표시 여부
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
 //aos 
 mounted() {
    aos.init();
  },
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
    font-family: 'GothicA1-ExtraBold', sans-serif;
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

</style>