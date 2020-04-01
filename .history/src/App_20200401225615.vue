<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <header-detail :seller="seller"></header-detail>
  </div>
</template>

<script>
import VHeader from 'components/v-header/v-header'
import headerDetail from 'components/header-detail/header-detail'
import { getSeller } from 'api/index'
export default {
  name: 'App',
  data() {
    return {
      seller: {}
    }
  },
  components: {
    VHeader,
    headerDetail
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
