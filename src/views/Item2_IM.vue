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
          '/portfolio/IM/IM_1.png',
          '/portfolio/IM/IM_2.png',
          '/portfolio/IM/IM_3.png',
          '/portfolio/IM/IM_4.gif',
          '/portfolio/IM/IM_5.gif',
          '/portfolio/IM/IM_6.gif',
          '/portfolio/IM/IM_7.gif',
          '/portfolio/IM/IM_8.gif',
          '/portfolio/IM/IM_9.gif',
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
    width: 100%;
    height: 100%;
  }
  
  .image-container {
    overflow: auto;
    margin-bottom: 2%; /* 이미지 간 여백 설정 */
    background-color: transparent; /* 배경을 투명하게 설정 */
  }
  .card {
    overflow: hidden;
    background-color: #ffffff; /* 배경을 투명하게 설정 */
    box-shadow: none; /* 그림자 제거 */
    }

    
.card::-webkit-scrollbar {
  display: none;
}
  </style>
  