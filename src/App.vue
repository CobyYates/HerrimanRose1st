<template>
  <v-app>
    <v-content>
      <app-nav></app-nav>
    </v-content>
  </v-app>
</template>

<script>
import Nav from './components/Nav'

export default {
  name: 'App',

  components: {
    'app-nav': Nav
  },

  data: () => ({
    //
  }),
};
</script>
