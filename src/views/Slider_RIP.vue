<template>
    <div class="content">
      <v-sheet v-for="(group, groupIndex) in imageGroups" :key="groupIndex" class="image-container">
        <v-row>
          <v-col v-for="(item, index) in group" :key="index" class="image-col">
            <div class="image-wrapper">
                <v-img :src="item.image" contain class="v-image" :class="{ 'small-image': item.smallImage, 'smaller-image': item.smallerImage  }"></v-img>
                <div class="image-text" style="white-space: pre;">
                    <div class="text-content">
                        <span class="title">{{ item.title }}</span>
                        <span class="text">{{ item.text }}</span>
                    </div>
                </div>
            </div>
          </v-col>
        </v-row>
      </v-sheet>
      <v-spacer style="background-color: #eaede6; height: 15vh;"></v-spacer>
    </div>
  </template>
  
  
  <script>

  export default {
    data() {
      return {
        imageGroups: [
            [

            ],
            [
                { image: "/portfolio/RIP/RIP_1.png", smallerImage: true}
            ],
            [
                {text: "2022. 03 ~ 2022. 06 \n\n Rest in Plant 비즈니스 모델 작성 및 사업 기획 \n Figma를 활용한 화분장 이후 관리 어플 디자인 \n Adobe Photoshop을 활용한 로고, 화분장 패키지 디자인" }
            ],

            [
                { image: "/portfolio/RIP/RIP_2.png", smallImage: true}
            ],
            [
                { image: "/portfolio/RIP/RIP_3.png", smallImage: true}
            ],
            [
                { image: "/portfolio/RIP/RIP_5.png", smallImage: true},
                { image: "/portfolio/RIP/RIP_6.png", smallImage: true}
            ],

        ]
      }
    },
    mounted() {
    window.scrollTo(0, 0);
    }
  }
  </script>
  
  <style scoped>
  .content {
    background-color: #eaede6;
  }
  
  .v-image {
    width: 100%;
    height: 100%;
  }
  
  .image-container {
    padding: 3% 10% 3% 10%;
    background-color: transparent;
  }

  .image-wrapper {
    text-align: center; /* 이미지와 텍스트 가로로 중앙 정렬 */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  
  .small-image {
    width: 75%;
    height: 75%;
  }

  .smaller-image {
    width: 25%;
    height: 25%;
  }
  
  .image-text {
    text-align: center;
    color: #000000;
  }
  
  .text-content {
    margin: -20% 0 5% 0 ; 
  }

  .title {
  font-size: 30px;
  font-family: 'GothicA1-ExtraBold', sans-serif;
  /* 추가로 원하는 스타일을 적용하세요 */
}

.text {
  font-size: 13px;
  font-family: 'GothicA1-Bold', sans-serif;
  line-height: 200%;
  /* 추가로 원하는 스타일을 적용하세요 */
}
  </style>