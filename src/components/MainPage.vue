<template>
<v-container fluid class="pt-0">
    <v-row align="center" justify="center">
    <v-img
      src="../assets/hero.jpg"
      lazy-src="../assets/hero.jpg"
      class="grey lighten-2 mt-0"
      max-width="100vw"
      alt="Photo by: Michael Nyiri"
    >
      <template v-slot:placeholder>
        <v-row
          class="fill-height ma-0"
          align="center"
          justify="center"
        >
        <!-- flickr.com/photos/baldmike2012/ -->
        <!-- Photo by: Michael Nyiri -->
          <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
        </v-row>
      </template>
    </v-img>
  </v-row>
</v-container>
  
</template>

<script>
export default {

}
</script>

<style>

</style>