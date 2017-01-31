<template>
  <transition :name="transitionName">
    <div class="work-content" :key="$route.params.id">
      <router-link :to="{ path: '/', hash: 'works' }" class="back"><img class="arrow" src="/static/images/arrow.png">Back</router-link>
      <div class="work-content-container">
        <h2 class="title">{{ work.title }}</h2>
        <div class="container">
          <div class="wrapper work-wrapper">
            <p class="type">{{ work.type }}</p>
            <img class="image" v-lazy="work.image">
            <ul class="technologies">
              <li v-for="technology in work.technologies">{{ technology }}</li>
            </ul>
            <p class="client">{{ work.client }}</p>
          </div>
        </div>
        <div class="discover">
          <a :href="work.link" target="_blank">Discover</a>
        </div>
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
        work: {}
      }
    },
    mounted: function () {
      works.query().then(response => {
        this.works = response.data
        this.work = this.works.find(this.findWorkById)
      })
    },
    watch: {
      '$route' (to, from) {
        this.transitionName = to.params.id > from.params.id ? 'next' : 'prev'
        this.work = this.works.find(this.findWorkById)
      }
    },
    methods: {
      findWorkById: function (work) {
        return work.id === parseInt(this.$route.params.id)
      }
    }
  }
</script>



