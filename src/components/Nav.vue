<template>
<div>
    <v-toolbar dark dense class="mb-0 pb-0">
      <router-link to="/" active-class="active" exact>
        <!-- <a href="#">
          <img class="logo" src="https://i.imgur.com/a8JzMHo.png" alt />
        </a> -->
      </router-link>

      <v-toolbar-title>Herriman Rose 1st</v-toolbar-title>

      <div class="flex-grow-1"></div>

      <v-toolbar-items>
        <v-btn to="/" exact text color="blue lighten-1">HOME</v-btn>
        <v-btn to="/" exact text color="blue lighten-1">Sign-Up</v-btn>
        <v-btn to="/" exact text color="blue lighten-1">Resources</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
