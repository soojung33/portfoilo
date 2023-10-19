import { defineComponent } from 'vue';
import aos from "aos";

export default defineComponent({
data() {
return {
portfolioItems: [
{ name: 'Adobe Photoshop', image: require('@/assets/adobe-photoshop.png') },
{ name: 'Adobe Illustrator', image: require('@/assets/adobe-AI.png') },
{ name: 'Adobe XD', image: require('@/assets/adobe-xd.png') },
{ name: 'Figma', image: require('@/assets/figma.png') },
{ name: 'Html', image: require('@/assets/html.png') },
{ name: 'Css', image: require('@/assets/css.png') },
{ name: 'Java', image: require('@/assets/java.png') },
{ name: 'Vue-js', image: require('@/assets/vue-js.png') },
],
};
},
//swiper 컴포넌트 
components: {
Swiper,
SwiperSlide,
},

setup() {
const swiperOptions = {
navigation: {
nextEl: '.swiper-button-next',
prevEl: '.swiper-button-prev' // 이전 버튼 클래스
}
};
const onSwiper = (swiper) => {
console.log(swiper);
};
const onSlideChange = () => {
console.log('slide change');
};
return {
swiperOptions,
onSwiper,
onSlideChange,
};

},
//aos 
mounted() {
aos.init();
},
methods: {
movePage(path) {
this.$router.push(path);
}
},
name: 'HomeView',
});
