<template>
  <div id="app">
    <v-header></v-header>
  </div>
</template>

<script>
import VHeader from 'components/v-header/v-header'
import { getSeller } from 'api/index'
export default {
  name: 'App',
  components: {
    VHeader
  },
  created() {
    this.getSeller()
  },
  methods: {
    async getSeller() {
      const seller = await getSeller()
      // this.seller = seller
      console.log(seller)
    }
  }
}
</script>

<style lang="stylus">
</style>
