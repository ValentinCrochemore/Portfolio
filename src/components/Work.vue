<template>
  <v-touch
    :id="'work-' + $route.params.id"
    class="work"
    tabindex="0"
    v-on:swipedown="prev()"
    v-on:swipeup="next()"
    v-on:swiperight="onLeftPress()"
    @keyup.left="onLeftPress()"
    @keyup.up="onUpPress()"
    @keyup.down="onDownPress()"
  >
    <work-content></work-content>
    <work-navigation></work-navigation>
  </v-touch>
</template>

<script>
  import $ from 'jquery'
  import { works } from '../utils/globals.js'
  import WorkContent from './partials/WorkContent'
  import WorkNavigation from './partials/WorkNavigation'

  export default {
    name: 'work',
    components: {
      WorkContent,
      WorkNavigation
    },
    data: function () {
      return {
        works: [],
        work: {}
      }
    },
    mounted: function () {
      $('nav').remove()
      document.querySelector('.work').focus()
      works.query().then(response => {
        this.works = response.data
      })
    },
    destroyed: function () {
      this.$off()
    },
    watch: {
      '$route' (to, from) {
        this.transitionName = to.params.id > from.params.id ? 'next' : 'prev'
      }
    },
    methods: {
      onLeftPress: function () {
        this.$router.push({ path: '/', hash: 'works' })
      },
      onUpPress: function () {
        this.prev()
      },
      onDownPress: function () {
        this.next()
      },
      prev: function () {
        if (this.$route.params.id > 1) {
          this.$router.push({ name: 'work', params: {id: parseInt(this.$route.params.id) - 1} })
        }
      },
      next: function () {
        if (this.$route.params.id < this.works.length) {
          this.$router.push({ name: 'work', params: {id: parseInt(this.$route.params.id) + 1} })
        }
      }
    }
  }

</script>

