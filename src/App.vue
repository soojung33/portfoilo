<template>
  <v-app>
    <Header></Header>
    <HomeView></HomeView>
    <PortfolioSlider></PortfolioSlider>
    <Design></Design>
  </v-app>
</template>

<script>
import Header from '@/components/Header.vue'
import HomeView from '@/views/HomeView.vue'
import PortfolioSlider from '@/views/PortfolioSlider.vue'
import Design from '@/views/Design.vue'

export default {

  name: 'App',
  components: {
    Header,
    HomeView,
    PortfolioSlider,
    Design
  }
}
</script>
