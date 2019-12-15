<template>
<!-- <div>
    <v-toolbar dark dense class="mb-0 pb-0">
      <v-toolbar-title>Herriman Rose 1st</v-toolbar-title>     

      <div class="flex-grow-1"></div>

      <v-toolbar-items>
        <v-btn to="/" exact text color="blue lighten-2">HOME</v-btn>
        <v-btn to="/SignUp" exact text color="blue lighten-2">Sign-Up</v-btn>
        <v-btn to="/Resources" exact text color="blue lighten-2">Resources</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div> -->
  <div>
    <v-app-bar
      dense
      dark
    >
      <v-app-bar-nav-icon>
        <v-btn icon to="/">
        <v-icon>mdi-home</v-icon>
      </v-btn>
      </v-app-bar-nav-icon>

      <v-toolbar-title>Herriman Rose 1st</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn to="/SignUp" exact text color="blue lighten-2">Sign-Up</v-btn>

      <!-- <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="n in 5"
            :key="n"
            @click="() => {}"
          >
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu> -->
    </v-app-bar>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
