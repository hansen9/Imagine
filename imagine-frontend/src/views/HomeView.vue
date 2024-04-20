<template>
  <div class="homecontent">
    <div class="box">
      <v-carousel
        height="400"
        show-arrows="true"
        cycle
        hide-delimiter-background
        color="blue"
      >
        <v-carousel-item
          v-for="slide in slides"
          :key="slide"
        >
          <v-sheet height="100%" class="d-flex flex-column align-center justify-center">
            <h1>{{ slide.title }}</h1>
            <img :src="slide.src">
            <p>{{ slide.desc }}</p>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </div>
    <div class="hellohome">
      <h1>Hello From Home Page</h1>
    </div>
    <div class="helloabout">
      <h1>Say Hello to our About Page</h1>
      
      <v-card-actions class="float-right">
        <v-btn flat class="grey-text" :to="name = 'about'">
            About
        </v-btn>
      </v-card-actions>
    </div>
    <div class="helloexplore">
      <h1>Say Hello to our About Page</h1>
      
      <v-card-actions class="float-right">
        <v-btn flat class="grey-text" :to="name = 'explore'">
              Explore
        </v-btn>
      </v-card-actions>
    </div>
  </div>
  
</template>

<script>
import { defineComponent } from 'vue';

// Components
// import TopBar from '../components/TopBar.vue';

const slides = [
  {
    title: 'Slide 1',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, maxime.',
    src: 'https://placehold.it/360x270'
  },
  {
    title: 'Slide 2',
    desc: 'Lorem ipsum dolor sit amet ',
    src: 'https://placehold.it/360x270'
  },
  {
    title: 'Slide 3',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
    src: 'https://placehold.it/360x270'
  },
  {
    title: 'Slide 4',
    desc: 'Lorem ipsum dolor sit amet,  Enim, maxime.',
    src: 'https://placehold.it/360x270'
  },
  {
    title: 'Slide 5',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, maxime.',
    src: 'https://placehold.it/360x270'
  },
  {
    title: 'Slide 6',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, maxime.',
    src: 'https://placehold.it/360x270'
  },
  {
    title: 'Slide 7',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, maxime.',
    src: 'https://placehold.it/360x270'
  },
  {
    title: 'Slide 8',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, maxime.',
    src: 'https://placehold.it/360x270'
  },
  {
    title: 'Slide 9',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, maxime.',
    src: 'https://placehold.it/360x270'
  },
  {
    title: 'Slide 10',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, maxime.',
    src: 'https://placehold.it/360x270'
  }
]

export default defineComponent({
  name: 'HomeView',

  components: {
    // TopBar,
  },
  data () {
    return {
      slides: slides,
      slideCount: 10
    }
  }
});
</script>

<style>
  .hellohome,.helloabout,.helloexplore{
    height: 300px;
  }
  .hellohome h1,.helloabout h1,.helloexplore h1{
    float: left;
  }
  .hellohome{
    background-color: #5DEBD7;
  }
  .helloabout{
    background-color: #7BC9FF;
  }
  .helloexplore{
    background-color: #8576FF;
  }
</style>