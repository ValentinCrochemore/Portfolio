<template>
  <div class="work">
    <h1>Work</h1>
    <p>{{ work.title }}</p>
    <router-link :to="{ name: 'work', params: {id: work.id - 1}}" v-if="isPreviousDisplayed()">Previous</router-link>
    <router-link :to="{ name: 'work', params: {id: work.id + 1}}" v-if="isNextDisplayed()">Next</router-link>
  </div>
</template>

<script>
  import { works } from '../main.js'

  export default {
    name: 'work',
    data () {
      return {
        works: [],
        work: {}
      }
    },
    mounted () {
      console.log(this.isPreviousDisplayed())
      works.query().then(response => {
        this.works = response.data
        this.work = response.data[this.$route.params.id - 1]
      })
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
        works.query().then(response => {
          this.work = response.data[to.params.id - 1]
        })
      }
    }
  }
</script>