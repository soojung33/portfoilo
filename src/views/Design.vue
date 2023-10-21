<template>
    <div id="portfolio">
    <div class="header"># DESIGN.</div>

    <div class="list">
      <div class="item" data-aos="fade-up"
        style="background-image:url(/portfolio/img1.gif)"></div>
      <div class="item" data-aos="fade-up" style="background-image:url(/portfolio/img3.gif)"></div>
      <div class="item" data-aos="fade-up" style="background-image:url(/portfolio/img6.gif)"></div>
      <div class="item" data-aos="fade-up" style="background-image:url(/portfolio/magic.gif)"></div>
      <div class="item" data-aos="fade-up" style="background-image:url(/portfolio/img4.gif)"></div>
      <div class="item" data-aos="fade-up" style="background-image:url(/portfolio/love.gif)"></div>
      <div class="item" data-aos="fade-up" style="background-image:url(/portfolio/green1.gif)"></div>
      <div class="item" data-aos="fade-up" style="background-image:url(/portfolio/winter.gif)"></div>
      <div class="item" data-aos="fade-up" style="background-image:url(/portfolio/img2.gif)"></div>
    </div>

    <v-spacer style="background-color: #000000; height: 20vh;"></v-spacer>

    <div class="header"># EVENT DESIGN.</div>

    <div class="list2">
      <div class="item2" @click="openItem2Popup('IM')" data-aos="fade-up" style="background-image:url(/portfolio/IM_p.gif)" @mouseover="showText" @mouseout="hideText">
        <div class="text" v-show="showOverlay"> 임영웅 B-day Event in 커먼 그라운드 현수막</div>
      </div>
      <div class="item2" @click="openItem2Popup('EJ')" data-aos="fade-up" style="background-image:url(/portfolio/EJ_p.jpg)" @mouseover="showText" @mouseout="hideText">
        <div class="text" v-show="showOverlay">정은지 Ktown4u in Coex 네컷프레임</div>
      </div>
      <div class="item2" @click="openItem2Popup('JM')" data-aos="fade-up" style="background-image:url(/portfolio/JM_p.jpg)" @mouseover="showText" @mouseout="hideText">
        <div class="text" v-show="showOverlay">NCT JAEMIN B-day Cafe & Exhibition</div>
      </div>
    </div>
    <Item2_IM ref="item2Popup_IM"></Item2_IM>
    <Item2_EJ ref="item2Popup_EJ"></Item2_EJ>
    <Item2_JM ref="item2Popup_JM"></Item2_JM>
  </div>

  <v-spacer style="background-color: #000000; height: 20vh;"></v-spacer>

</template>

<script>
import { defineComponent} from 'vue'; // ref 가져오기
import Item2_IM from "../views/Item2_IM.vue";
import Item2_EJ from "../views/Item2_EJ.vue";
import Item2_JM from "../views/Item2_JM.vue";

//스크롤할 때 애니메이션 효과 주는 라이브러리
import aos from "aos";

export default defineComponent({  
    components:{
     Item2_IM,
     Item2_EJ,
     Item2_JM
    },
    data() {
    return {
      showOverlay: false,
      dialog: false
    };
    },
    //aos 
    mounted() {
        aos.init();
    },
    methods: {
    openItem2Popup(itemType) {
      if (itemType === 'IM') {
        this.$refs.item2Popup_IM.openDialog(0);
      } else if (itemType === 'EJ') {
        this.$refs.item2Popup_EJ.openDialog(0);
      } else if (itemType === 'JM') {
        this.$refs.item2Popup_JM.openDialog(0);
      } 
    },
     showText() {
      this.showOverlay = true;
    },
    hideText() {
      this.showOverlay = false;
    },
    },
})

</script>

<style lang="less">
    #portfolio {
  background-color: #000000;
  color: #ffffff !important;

  .header {
    text-align: center;
    font-size: 30px;
    font-family: 'GothicA1-ExtraBold', sans-serif;
    margin-bottom: 4%;
  }

  .list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 4%;
    justify-content: center; /* 가로 가운데 정렬 */
    align-content: center; /* 세로 가운데 정렬 */
    padding: 0 25%; /* 좌우 여백 설정 */

    .item {
      width: 35vh;
      height: 35vh;
      background-position: center center;
      background-size: cover;
      border-radius: 20px;
    }
  }

  .list2 {
  display: flex;
  flex-wrap: wrap; /* 아이템이 여러 행에 걸쳐 나타날 수 있도록 설정 */
  justify-content: center; /* 요소 사이의 공간을 최대화하여 4열로 배치 */
  align-content: center; /* 세로 가운데 정렬 */
  padding: 0 25px; /* 좌우 여백 설정 */
  }

  .item2 {
    width: 130vh; /* 가로 크기를 화면의 세로 크기인 100vh로 설정 */
    height: 25vh; /* 세로 크기를 30vh로 설정 */
    display: flex;
    align-items: center; /* 수직 중앙 정렬 */
    background-position: center center;
    background-size: cover;
    margin: 1.5%; /* 아이템 간 여백 설정 */
  }

.text {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  font-size: 16px;
  font-weight: semi-bold;
  opacity: 0;
  transition: opacity 0.3s;
}

.item2:hover .image {
  filter: brightness(0.7); /* 이미지 어두워지게 만드는 스타일 */
}

.item2:hover .text {
  opacity: 1; /* 텍스트 표시 */
}
  
}
</style>