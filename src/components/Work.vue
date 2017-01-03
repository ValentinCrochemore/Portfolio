<template>
  <div class="work">
    <div class="bg" :style="{ backgroundImage: 'url(' + work.image + ')' }"></div>
    <div class="fg">
      <div class="content">
        <router-link to="/" class="back"><img src="/static/img/back.png">Back</router-link>
        <h2 class="title">{{ work.title }}</h2>
        <p class="type">{{ work.type }}</p>
        <ul v-for="technology in work.technologies" class="technologies">
          <li>{{ technology }}</li>
        </ul>
        <p class="client">{{ work.client }}</p>
        <a class="discover" :href="work.link" target="_blank">Discover</a>
      </div>
      <div class="navigation">      
        <router-link :to="{ name: 'work', params: {id: work.id - 1}}" v-if="isPreviousDisplayed()">Previous</router-link>
        <router-link :to="{ name: 'work', params: {id: work.id + 1}}" v-if="isNextDisplayed()">Next</router-link>
      </div>
    </div>
  </div>
</template>

<style lang="sass">
  @import ../assets/style/variables

  .back
    font-size: 16px
    text-transform: uppercase
    text-decoration: none
    color: #fff
    position: absolute
    top: 30px
    left: 30px
    display: flex
    align-items: center

    img 
      padding-right: 20px

  .work
    width: 100%
    height: 100%
    background: #777c9d

    > div
      height: 100%

    .bg
      width: 100%
      position: fixed
      left: 0
      right: 0
      z-index: 0
      filter: blur(3px)
      background-size: cover
      opacity: .45

    .fg
      position: absolute
      z-index: 1
      width: 100%

      > div
        height: 100%

    .content
      width: 80%
      display: inline-block

    .navigation
      width: 20%
      float: right

      &:after
        clear: all

  .title
    font-size: 66px
    text-align: center
    padding: 30px 0

  .type
    font-size: 33px
    font-family: $medium

  .technologies
    font-size: 30px

  .client
    font-size: 30px
    font-family: $italic

  .discover
    font-size: 25px
    color: #fff
    text-decoration: none
    border: 1px solid #fff
    padding: 10px 35px
</style>

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
