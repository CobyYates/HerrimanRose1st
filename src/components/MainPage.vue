<template>
  <v-container fluid class="pt-0">
    <v-row align="center" justify="center">
      <v-img src="../assets/hero.jpg" lazy-src="../assets/hero.jpg">
        <div class="d-flex justify-end pr-3">
          <img-title class="title">Photo By: Michael Nyiri</img-title>
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
          :size="100"
          :width="15"
          :value="0"
          color="teal"
        >
          {{ goal1 }}
        </v-progress-circular>
      </v-col>
      <v-col class="d-flex flex-column align-center">
        <h3>Number of records indexed</h3>
        <v-progress-circular
          :rotate="-90"
          :size="200"
          :width="20"
          :value="0"
          color="teal"
        >
          {{ goal2 }}
        </v-progress-circular>
      </v-col>
      <v-col class="d-flex flex-column align-center">
        <h3>Members who have indexed this year</h3>
        <v-progress-circular
          :rotate="-90"
          :size="100"
          :width="15"
          :value="0"
          color="teal"
        >
          {{ goal3 }}
        </v-progress-circular>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card class="mx-auto" max-width="344">
          <v-card-text>
            <div>Goal 1</div>
            <p class="display-1 text--primary">
              Individual Indexing
            </p>
            <div class="text--primary">
              Every member of the Ward to index <strong>10</strong> records.
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn text color="deep-purple accent-4">
              Learn More <!-- Link to how to page -->
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="mx-auto" max-width="344">
          <v-card-text>
            <div>Goal 2</div>
            <p class="display-1 text--primary">
              Ward Indexing
            </p>
            <div class="text--primary">
              As a Ward, index <strong>60,000</strong> records this year.
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn text color="deep-purple accent-4">
              Learn More <!-- Link to how to page -->
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="mx-auto" max-width="344">
          <v-card-text>
            <div>Goal 3</div>
            <p class="display-1 text--primary">
              Goal 3
            </p>
            <div class="text--primary">
              Goal <strong>3</strong> .
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn text color="deep-purple accent-4">
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
    goal2: "0/0",
    goal3: "0/0"

  })
};
</script>

<style>
.v-progress-circular {
  margin: 1rem;
}
</style>
