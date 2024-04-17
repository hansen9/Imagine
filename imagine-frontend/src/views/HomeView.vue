<template>
  <TopBar/>
</template>

<script>
import { defineComponent } from 'vue';

// Components
import TopBar from '../components/TopBar.vue';

export default defineComponent({
  name: 'HomeView',

  components: {
    TopBar,
  },
});
</script>