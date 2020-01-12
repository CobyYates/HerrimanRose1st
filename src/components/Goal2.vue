<template>
  <v-container class="d-flex flex-column align-center">
    <div class="text-center pb-8">
      <h3>Names Submitted to the Temple</h3>
      <v-progress-circular
        :rotate="-90"
        :size="150"
        :width="20"
        :value="1"
        color="blue lighten-1"
      >
        {{ goal2 }}
      </v-progress-circular>
    </div>

      <v-card dark class="mx-auto" max-width="344" width="340">
        <v-card-text>
          <div><p class="blue--text">Goal 2</p></div>
          <p class="display-1">
            Ward Indexing
          </p>
          <div>
            <strong>30%</strong> of the Ward to submit a name to the Temple
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn text color="blue lighten-1">
            <!-- Learn More -->
            <!-- Link to how to page -->
          </v-btn>
        </v-card-actions>
      </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    goal2: "0/0",
  })

};
</script>

<style></style>
