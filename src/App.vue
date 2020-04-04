<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab-wrapper"><tab :tabs="tabs"></tab></div>
  </div>
</template>

<script>
import VHeader from 'components/v-header/v-header'
import Tab from 'components/tab/tab'
import Goods from 'components/goods/goods'
import Ratings from 'components/ratings/ratings'
import Seller from 'components/seller/seller'
import { getSeller } from 'api/index'
export default {
  name: 'App',
  data() {
    return {
      seller: {}
    }
  },
  computed: {
     tabs() {
       return [{
          label: '商品',
          components: Goods,
          data: { seller: this.seller }
        }, {
          label: '评价',
          components: Ratings,
          data: { seller: this.seller }
        }, {
            label: '商家',
            components: Seller,
            data: { seller: this.seller }
      }]
     }
  },
  components: {
    VHeader,
    Tab
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
#app
  .tab-wrapper
    position: fixed
    top: 136px
    left: 0
    right: 0
    bottom: 0
</style>
