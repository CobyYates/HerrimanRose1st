<template>
  <v-app>
    <v-content>
      <app-nav></app-nav>
      <app-main></app-main>
      <!-- <HelloWorld/> -->
    </v-content>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
import Nav from './components/Nav'
import MainPage from './components/MainPage'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    'app-nav': Nav,
    'app-main': MainPage
  },

  data: () => ({
    
  }),
};
</script>
