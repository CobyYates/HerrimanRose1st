<template>
  <v-container class="d-flex flex-column align-center">
    <div class="text-center pb-8">
          <h3>Members Who have Indexed</h3>
        <v-progress-circular
          :rotate="-90"
          :size="150"
          :width="20"
          :value="percent"
          color="blue lighten-1"
        >
          {{ goal1 }}
        </v-progress-circular>
      </div>
      

        <v-card dark class="mx-auto" max-width="344" width="340">
          <v-card-text>
            <div><p class="blue--text">Goal 1</p></div>
            <p class="display-1">
              Indexing
            </p>
            <div>
              30% of the Ward to index a set of records.
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn text @click="test()" color="blue lighten-1">
              <!-- Learn More  -->
              <!-- Link to how to page -->
            </v-btn>
          </v-card-actions>
        </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    goal1: "0/0",
    percent: 1
  }),
}
</script>

<style>

</style>