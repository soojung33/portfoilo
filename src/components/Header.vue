<template>
    <v-card class="header-card" color="#000000" flat>
      <v-card-title class="text-center py-2">
        <div class="content-container">

          <v-img :src="logoPath" @click="goToMainPage" class="logo"></v-img>

          <div class="space"></div>
          
          <!-- GitHub 이미지와 링크 -->
          <v-img
            src="@/assets/github.png" @click="goToGitHubPage" width="2" class="icon">
          </v-img>

          <!-- insta 이미지와 링크 -->
          <v-img
            src="@/assets/insta.png" @click="goToInstaPage" width="2" class="icon">
          </v-img>
  
          <!-- Mail 이미지와 링크 -->
          <v-img
            src="@/assets/mail.png" @click="goToMailPage" width="2" class="icon">
          </v-img>
        </div>
      </v-card-title>
    </v-card>
  </template>
  
  <script>
export default {
  data() {
    return {
      tab: null,
      logoPath: require("@/assets/logo2.png"),
    };
  },
  methods: {
    goToMainPage() {
      this.$router.push("/");
    },
    goToGitHubPage() {
      // GitHub 페이지로 이동하는 로직 추가
      window.location.href = "https://github.com/soojung33";
    },
    goToMailPage() {
      // 이메일 링크를 열도록 로직 추가
      window.location.href = "mailto:jenny001012@itc.mjc.ac.kr";
    },
    goToInstaPage() {
      // 인스타 링크를 열도록 로직 추가
      window.location.href = "https://instagram.com/61.collective";
    },
  },
};
</script>

<style scoped>
.header-card {
  border-radius: 0%;
  padding: 0 15%;
}

.content-container {
  display: flex;
  flex-direction: row;
  align-items: center; /* 수직 정렬 */
}
.logo {
  margin: 0;
  max-width: 20%; /* 최대 너비 설정 */
}
.icon {
  margin: 0 1%; /* 이미지 사이에 간격 추가 */
  cursor: pointer; /* 커서를 포인터로 변경하여 사용자에게 링크임을 알림 */
  max-width: 2%; /* 최대 너비 설정 */
  max-height: 2%; /* 최대 높이 설정 */
}
.space {
  margin-right: 65%; /* 로고와 아이콘 사이에 간격 추가 */
}
</style>
