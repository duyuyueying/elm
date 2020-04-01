<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
  </div>
</template>

<script>
import VHeader from 'components/v-header/v-header'
import { getSeller } from 'api/index'
export default {
  name: 'App',
  data() {
    return {
      seller: {}
    }
  },
  components: {
    VHeader
  },
  created() {
    this.getSeller()
  },
  methods: {
    getSeller() {
      getSeller().then((seller) => {
        this.seller = seller
      })
    }
  }
}
</script>

<style lang="stylus">
</style>
