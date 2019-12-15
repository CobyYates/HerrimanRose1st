<template>
  <v-app>
    <v-content>
      <app-nav></app-nav>
      <!-- <router-view></router-view> -->
      
    </v-content>
  </v-app>
</template>

<script>
import Nav from './components/Nav'
// import MainPage from './components/MainPage'
// import Resources from './components/Resources'
// import SignUp from './components/SignUp'

export default {
  name: 'App',
  components: {
    'app-nav': Nav,
    // 'app-main': MainPage,
    // 'app-resources': Resources,
    // 'app-signup': SignUp
  },

  data: () => ({
    
  }),
};
</script>
