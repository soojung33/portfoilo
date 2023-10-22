<template>
    <div>
      <v-dialog v-model="dialog" max-width="130vh" hide-overlay>
        <v-card class="card">
          <v-card-text>
            <v-sheet class="image-container" v-for="(image, index) in images" :key="index">
              <v-img :src="image" contain class="v-image"></v-img>
            </v-sheet>
          </v-card-text>
        </v-card>
      </v-dialog>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        dialog: false,
        selectedImage: null,
        images: [
          '/portfolio/green1.gif',
          '/portfolio/green2.gif',
          '/portfolio/green3.gif',

        ],
      };
    },
    methods: {
      openDialog(imageIndex) {
        this.selectedImage = this.images[imageIndex];
        this.dialog = true;
      },
    },
  };
  </script>
  
  <style scoped>
  .v-image {
    width: 80%;
    height: 80%;
    
  }
  
  .image-container {
    overflow: auto;
    margin-bottom: 2%; /* 이미지 간 여백 설정 */
    background-color: transparent; /* 배경을 투명하게 설정 */
    text-align: center; /* 이미지와 텍스트 가로로 중앙 정렬 */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .card {
    overflow: hidden;
    background-color: transparent; /* 배경을 투명하게 설정 */
    box-shadow: none; /* 그림자 제거 */
    }

    
.card::-webkit-scrollbar {
  display: none;
}
  </style>
  