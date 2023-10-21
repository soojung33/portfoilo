<template>
  <div>
    <v-dialog v-model="dialog" max-width="130vh" hide-overlay>
      <v-card class="card">
        <v-card-text>
          <v-sheet class="image-container" v-for="(group, groupIndex) in imageGroups" :key="groupIndex">
            <v-row>
              <v-col v-for="(image, index) in group" :key="index" class="image-col">
                <v-img :src="image" contain class="v-image"></v-img>
              </v-col>
            </v-row>
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
      imageGroups: [
        [
          '/portfolio/EJ/EJ_1.jpg',
          '/portfolio/EJ/EJ_2.jpg',
        ],
        [
          '/portfolio/EJ/EJ_6.jpg',
        ],
        [
          '/portfolio/EJ/EJ_7.jpg',
        ],
        [
          '/portfolio/EJ/EJ_4.jpg',
          '/portfolio/EJ/EJ_5.jpg',
        ],
      ],
    };
  },
  methods: {
    openDialog(imageIndex) {
      this.selectedImage = this.imageGroups[imageIndex];
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
    overflow: hidden;
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

.image-container::-webkit-scrollbar {
  display: none;
}
  </style>
  