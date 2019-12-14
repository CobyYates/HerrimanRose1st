<template>
<div>
    <v-toolbar dark class="mb-0 pb-0">
      <router-link to="/" active-class="active" exact>
        <!-- <a href="#">
          <img class="logo" src="https://i.imgur.com/a8JzMHo.png" alt />
        </a> -->
      </router-link>

      <v-toolbar-title>Herriman Rose 1st</v-toolbar-title>

      <div class="flex-grow-1"></div>

      <v-toolbar-items>

        <v-divider class="teal darken-3" vertical></v-divider>

        <v-btn to="/" exact text color="teal accent-3">HOME</v-btn>

        <v-divider class="teal darken-3" vertical></v-divider>

        <v-btn to="/build" exact text color="teal accent-3">Sign-Up</v-btn>

        <v-divider class="teal darken-3" vertical></v-divider>

        <v-btn to="/build/complete" exact text color="teal accent-3">Resources</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
