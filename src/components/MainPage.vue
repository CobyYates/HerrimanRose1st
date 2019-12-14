<template>
  <v-container fluid class="pt-0">
    <v-row align="center" justify="center">
      <v-img src="../assets/hero.jpg" lazy-src="../assets/hero.jpg">
        <div class="d-flex justify-end pr-3">
          <img-title class="title"><a class="white--text" href="https://www.flickr.com/photos/baldmike2012" target="_blank">Photo By: Michael Nyiri</a></img-title>
        </div>
      </v-img>
    </v-row>
    <v-row>
      <v-col class="d-flex justify-center pt-9">
        <h1>Ward Goals for 2020</h1>
      </v-col>
    </v-row>
    <v-row class="py-10">
      <v-col class="d-flex flex-column align-center">
        <h3>Members who have indexed this year</h3>
        <v-progress-circular
          :rotate="-90"
          :size="150"
          :width="20"
          :value="30"
          color="blue lighten-1"
        >
          {{ goal1 }}
        </v-progress-circular>
      </v-col>
      <v-col class="d-flex flex-column align-center">
        <h3>Number of records indexed</h3>
        <v-progress-circular
          :rotate="-90"
          :size="150"
          :width="20"
          :value="20"
          color="blue lighten-1"
        >
          {{ goal2 }}
        </v-progress-circular>
      </v-col>
      <v-col class="d-flex flex-column align-center">
        <h3>Goal 3</h3>
        <v-progress-circular
          :rotate="-90"
          :size="150"
          :width="20"
          :value="10"
          color="blue lighten-1"
        >
          {{ goal3 }}
        </v-progress-circular>
      </v-col>
    </v-row>
    <v-row class="pb-12">
      <v-col>
        <v-card class="mx-auto" max-width="344">
          <v-card-text>
            <div><p class="blue--text">Goal 1</p></div>
            <p class="display-1 text--primary">
              Individual Indexing
            </p>
            <div class="text--primary">
              Every member of the Ward to index <strong>10</strong> records.
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn text color="blue lighten-1">
              Learn More <!-- Link to how to page -->
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="mx-auto" max-width="344">
          <v-card-text>
            <div><p class="blue--text">Goal 2</p></div>
            <p class="display-1 text--primary">
              Ward Indexing
            </p>
            <div class="text--primary">
              As a Ward, index <strong>60,000</strong> records this year.
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn text color="blue lighten-1">
              Learn More <!-- Link to how to page -->
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="mx-auto" max-width="344">
          <v-card-text>
            <div><p class="blue--text">Goal 3</p></div>
            <p class="display-1 text--primary">
              Goal 3
            </p>
            <div class="text--primary">
              Goal <strong>3</strong> .
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn text color="blue lighten-1">
              Learn More <!-- Link to how to page -->
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    goal1: "0/400",
    goal2: "0/60k",
    goal3: "0/0"

  })
};
</script>

<style>
.v-progress-circular {
  margin: 1rem;
}
</style>
