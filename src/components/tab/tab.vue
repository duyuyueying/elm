<template>
  <div class="tab">
    <cube-tab-bar
      v-model="selectedLabel"
      :data="tabs"
      showSlider
      :useTransition="false"
      ref="tabBar"
    ></cube-tab-bar>
    <div class="slide-wrapper">
      <cube-slide
        :loop="false"
        :auto-play="false"
        :showDots="false"
        :initial-index="index"
        :options="slideOptions"
        @change="onChange"
        @scroll="onScroll"
        ref="slide"
      >
        <cube-slide-item v-for="(tab,index) in tabs" :key="index">
          <component :is="tab.components" :data="tab.data" ref="component"></component>
        </cube-slide-item>
      </cube-slide>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      index: this.initIndex,
      slideOptions: {
        listenScroll: true,
        probeType: 3,
        directionLockThreshold: 0
      }
    }
  },
  props: {
    tabs: {
      type: Array,
      default: function() {
        return []
      }
    },
    initIndex: {
      type: Number,
      default: 0
    }
  },
  mounted() {
    this.onChange(this.index)
  },
  methods: {
    onChange(curr) {
      this.index = curr
      const component = this.$refs.component[curr]
      if (component && component.getData) {
        component.getData()
      }
    },
    onScroll(pos) {
      const tabBarWidth = this.$refs.tabBar.$el.clientWidth
      const scrollWidth = this.$refs.slide.slide.scrollerWidth
      const transfrom = -pos.x / scrollWidth * tabBarWidth
      this.$refs.tabBar.setSliderTransform(transfrom)
    }
  },
  computed: {
    selectedLabel: {
      get() {
        return this.tabs[this.index].label
      },
      set(newVal) {
        this.index = this.tabs.findIndex(value => value.label === newVal)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~common/stylus/variable'
  .tab
    display: flex
    flex-direction: column
    height: 100%
    >>> .cube-tab
      padding: 10px 0
    .slide-wrapper
      flex: 1
      overflow: hidden
</style>
