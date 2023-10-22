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
      <v-spacer style="background-color: #f7ecdf; height: 15vh;"></v-spacer>
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
                { image: "/portfolio/BB/BB_1.png", smallerImage: true}
            ],
            [
                { text: "2022. 03 ~ 2022. 06 \n\n 빵달곰 비즈니스 모델 작성 및 사업 기획 \n Adobe Photoshop을 활용한 로고 디자인 \n Figma 활용한 빵달곰 어플 디자인 및 프로토타입 \n Figma 활용한 빵달곰 사장님 어플 디자인 및 프로토타입" }
            ],
            [
                { image: "/portfolio/BB/BB_2.png", smallImage: true}
            ],
            [
                { image: "/portfolio/BB/BB_3.png", smallImage: true}
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
    background-color: #f7ecdf;
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
    width: 20%;
    height: 20%;
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