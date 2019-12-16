<template>
  <v-card
    class="mx-auto d-flex flex-column"
    max-width="344"
    min-width="350"
    height="350"
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">Helpful Resource</div>
        <v-list-item-title class="headline mb-1 text-wrap">{{ download.title }}</v-list-item-title>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="120"
        >
      <v-img :src="download.image"></v-img>
      </v-list-item-avatar>
    </v-list-item>

    <v-list-item-subtitle class="text-wrap px-4">{{ download.description }}</v-list-item-subtitle>

    <v-card-actions>
      <v-btn text color="blue" :href="download.ios" target="_blank">IOS</v-btn>
      <v-btn text color="green" :href="download.android" target="_blank">ANDROID</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
    props: ["download"]

}
</script>

<style>

</style>