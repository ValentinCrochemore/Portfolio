<template>
  <div class="work-navigation">
    <router-link
            :to="{ name: 'work', params: {id: work.id - 1}}"
            v-if="isFirstWork"
            class="arrows prev"
            @click="onPrevTap"
    >
      <img class="arrow" src="/static/images/arrow.png">
    </router-link>
    <ul class="bulletpoints">
      <li v-for="work in works">
        <router-link :to="{ name: 'work', params: { id: work.id }}">
          <span><p>{{ work.title }}</p></span>
        </router-link>

      </li>
    </ul>
    <router-link
            :to="{ name: 'work', params: {id: work.id + 1}}"
            v-if="isLastWork"
            class="arrows next"
    >
      <img class="arrow" src="/static/images/arrow.png">
    </router-link>
  </div>
</template>

<script>
  import { works } from '../../utils/globals.js'

  export default {
    name: 'work-navigation',
    data () {
      return {
        works: [],
        work: {},
        isFirstWork: false,
        isLastWork: false
      }
    },
    mounted: function () {
      works.query().then(response => {
        this.works = response.data
        this.work = this.works[this.$route.params.id - 1]
        this.isFirstWork = parseInt(this.$route.params.id) !== 1
        this.isLastWork = parseInt(this.$route.params.id) !== this.works.length
      })
    },
    watch: {
      '$route' (to, from) {
        this.work = this.works[to.params.id - 1]
        this.isFirstWork = parseInt(to.params.id) !== 1
        this.isLastWork = parseInt(to.params.id) !== this.works.length
      }
    },
    methods: {
      onPrevTap: function () {
        console.log('click')
      }
    }
  }
</script>
