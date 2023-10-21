<template>
  <v-app>
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import GothicA1 from '@/font/GothicA1.css'

export default {

  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="less">
body,
#app {
  font-family: "GothicA1-Regular", "GothicA1-Bold", "GothicA1-ExtraBold", "GothicA1-SemiBold", sans-serif;
}
</style>
