<template>
  <v-container fluid class="pa-0">
    <v-row align="center" justify="center">
      <v-img src="../assets/hero.jpg" lazy-src="../assets/hero.jpg">
        <div class="d-flex justify-end pr-3">
          <title class="title"><a class="white--text" href="https://www.flickr.com/photos/baldmike2012" target="_blank">Photo By: Michael Nyiri</a></title>
        </div>
      </v-img>
    </v-row>
    <v-row>
      <v-col class="d-flex justify-center pt-9">
        <h1>Ward Goals for 2020</h1>
      </v-col>
    </v-row>
    <v-row class="py-10">
      <v-col>
        <app-goal1></app-goal1>
      </v-col>
      <v-col>
        <app-goal2></app-goal2>
      </v-col>
      <v-col>
        <app-goal3></app-goal3>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Goal1 from './Goal1'
import Goal2 from './Goal2'
import Goal3 from './Goal3'

export default {
  components: {
      'app-goal1': Goal1,
      'app-goal2': Goal2,
      'app-goal3': Goal3,
  }
};
</script>

<style>
.v-progress-circular {
  margin: 1rem;
}

.background {
    background-color: #555;
}
</style>
