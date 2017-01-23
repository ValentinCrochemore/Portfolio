<template>
  <transition :name="transitionName">
    <div class="work-content" :key="$route.params.id">
      <router-link :to="{ path: '/', hash: 'works' }" class="back"><img class="arrow" src="/static/images/arrow.png">Back</router-link>
      <h2 class="title">{{ work.title }}</h2>
      <div class="container">
        <p class="type">{{ work.type }}</p>
        <div class="wrapper work-wrapper">
          <img class="image" v-lazy="imageSmall">
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
  </transition>
</template>

<script>
  import { works } from '../../utils/globals.js'

  export default {
    name: 'work-content',
    data () {
      return {
        transitionName: 'next',
        work: {},
        imageSmall: ''
      }
    },
    mounted: function () {
      works.query().then(response => {
        this.works = response.data
        this.work = this.works.find(this.findWorkById)
        this.imageSmall = this.work.image.small
      })
    },
    watch: {
      '$route' (to, from) {
        this.transitionName = to.params.id > from.params.id ? 'next' : 'prev'
        this.work = this.works.find(this.findWorkById)
        this.imageSmall = this.work.image.small
      }
    },
    methods: {
      findWorkById: function (work) {
        return work.id === parseInt(this.$route.params.id)
      }
    }
  }
</script>








