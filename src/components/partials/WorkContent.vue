<template>
  <div class="work-content">
    <router-link to="/" class="back"><img src="/static/images/arrow.png">Back</router-link>
    <h2 class="title">{{ work.title }}</h2>
    <div class="container">
      <p class="type">{{ work.type }}</p>
      <div class="wrapper">
        <img class="image" :src="imageSmall">
        <ul class="technologies">
          <li v-for="technology in work.technologies">{{ technology }}</li>
        </ul>
      </div>
      <p class="client">{{ work.client }}</p>
    </div>
    <div class="discover">
      <a :href="work.link" target="_blank">Discover</a>
    </div>
  </div>
</template>

<script>
  import { works } from '../../utils/globals.js'

  export default {
    name: 'work-content',
    data () {
      return {
        work: {},
        imageSmall: ''
      }
    },
    mounted: function () {
      works.query().then(response => {
        this.works = response.data
        this.work = this.works[this.$route.params.id - 1]
        this.imageSmall = this.work.image.small
      })
    },
    watch: {
      '$route' (to, from) {
        this.work = this.works[to.params.id - 1]
      }
    }
  }
</script>
