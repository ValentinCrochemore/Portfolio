<template>
  <div class="work">
    <h1>Work</h1>
    <p>{{ work.title }}</p>
    <p>{{ work.type }}</p>
    <p>{{ work.client }}</p>
    <ul v-for="technology in work.technologies">
      <li>{{ technology }}</li>
    </ul>
    <router-link to="/">Go back to home</router-link><br>
    <router-link :to="{ name: 'work', params: {id: work.id - 1}}" v-if="isPreviousDisplayed()">Previous</router-link>
    <router-link :to="{ name: 'work', params: {id: work.id + 1}}" v-if="isNextDisplayed()">Next</router-link>
  </div>
</template>

<script>
  import { works } from '../utils/globals'

  export default {
    name: 'work',
    data () {
      return {
        works: [],
        work: {}
      }
    },
    mounted () {
      works.query().then(response => {
        this.works = response.data
        this.work = this.works[this.$route.params.id - 1]
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
        this.work = this.works[to.params.id - 1]
      }
    }
  }
</script>
