<template>
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
</template>

<style lang="sass">

  .work
    width: 100%
    height: 100%
    background-size: cover
    outline: none

    > div
      height: 100%
</style>

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
        imageBig: ''
      }
    },
    mounted () {
      document.querySelector('.work').focus()
      works.query().then(response => {
        this.works = response.data
        this.work = this.works[this.$route.params.id - 1]
        this.imageBig = this.work.image.big
      }, response => {
        console.log(response)
      })
    },
    watch: {
      '$route' (to, from) {
        this.work = this.works[to.params.id - 1]
        this.imageBig = this.work.image.big
      }
    },
    methods: {
      onLeftPress () {
        this.$router.push('/')
      },
      onUpPress () {
        if (this.$route.params.id > 1) {
          this.$router.push({name: 'work', params: {id: parseInt(this.$route.params.id) - 1}})
        }
      },
      onDownPress () {
        if (this.$route.params.id < this.works.length) {
          this.$router.push({name: 'work', params: {id: parseInt(this.$route.params.id) + 1}})
        }
      }
    }
  }
</script>
