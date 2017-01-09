<template>
  <transition name="slide" mode="in-out">
    <div
      class="work"
      :style="{ backgroundImage: 'url(' + imageBig + ')' }"
      tabindex="0"
      @keyup.left="onLeftPress()"
      @keyup.up="onUpPress()"
      @keyup.down="onDownPress()"
    >
      <work-content></work-content>
      <work-navigation></work-navigation>
    </div>
  </transition>
</template>

<script>
  import { works } from '../utils/globals.js'
  import WorkContent from './partials/WorkContent'
  import WorkNavigation from './partials/WorkNavigation'

  export default {
    name: 'work',
    components: {
      WorkContent,
      WorkNavigation
    },
    data () {
      return {
        work: {},
        imageBig: '',
        transitionName: 'slide'
      }
    },
    mounted: function () {
      document.querySelector('.work').focus()
      works.query().then(response => {
        this.works = response.data
        this.work = this.works[this.$route.params.id - 1]
        this.imageBig = this.work.image.big
      })
    },
    watch: {
      '$route' (to, from) {
        if (to.params.id && from.params.id) {
          this.transitionName = 'switch'
        }

        this.work = this.works[to.params.id - 1]
        this.imageBig = this.work.image.big
      }
    },
    methods: {
      onLeftPress: function () {
        this.$router.push('/')
      },
      onUpPress: function () {
        if (this.$route.params.id > 1) {
          this.$router.push({name: 'work', params: {id: parseInt(this.$route.params.id) - 1}})
        }
      },
      onDownPress: function () {
        if (this.$route.params.id < this.works.length) {
          this.$router.push({name: 'work', params: {id: parseInt(this.$route.params.id) + 1}})
        }
      }
    }
  }

</script>
