<template>
  <v-container>
    <v-row>
      <v-col v-for="download in downloads" :key="download.title">
        <app-appCard :download="download"></app-appCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AppCards from './AppCards'
import { downloads } from '../../assets/download'

export default {
  data: () => ({
    downloads
  }),
  components: {
    'app-appCard': AppCards
  }
}
</script>

<style>

</style>