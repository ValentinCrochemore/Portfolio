<template>
  <div class="work">
    <h1>Work</h1>
    <p>{{ work.title }}</p>
    <router-link to="/">Go back to home</router-link><br>
    <router-link :to="{ name: 'work', params: {id: work.id - 1}}" v-if="isPreviousDisplayed()">Previous</router-link>
    <router-link :to="{ name: 'work', params: {id: work.id + 1}}" v-if="isNextDisplayed()">Next</router-link>
  </div>
</template>

<script>
  // import { works } from '../main.js'

  export default {
    name: 'work',
    props: ['works'],
    data () {
      return {
        work: {}
      }
    },
    mounted () {
      this.work = this.works[this.$route.params.id - 1]
    },
    methods: {
      isPreviousDisplayed: function () {
        return parseInt(this.$route.params.id) !== 1
      },
      isNextDisplayed: function () {
        return parseInt(this.$route.params.id) !== this.works.length
      }
    },
    watch: {
      '$route' (to, from) {
        this.work = this.works[to.params.id - 1]
      }
    }
  }
</script>