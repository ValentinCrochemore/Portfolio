<template>
  <div class="work-navigation">
    <router-link
            :to="{ name: 'work', params: {id: work.id - 1}}"
            v-if="isFirstWork"
            class="arrows prev"
    >
      <img src="/static/images/arrow.png">
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
      <img src="/static/images/arrow.png">
    </router-link>
  </div>
</template>

<style lang="sass" scoped>
  .work-navigation
    float: right
    width: 10%
    background: rgba(255, 255, 255, .25)
    display: inline-flex
    justify-content: center
    align-items: center

    &:after
      clear: both

    .arrows
      padding: 80px 0
      position: absolute

      img
        transform: translateX(0)
        transition: .2s all ease-out

      &.prev
        transform: rotate(90deg)
        top: 0

        &:hover
          img
            transform: translateX(-5px)

      &.next
        transform: rotate(-90deg)
        bottom: 0

        &:hover
          img
            transform: translateX(-5px)

    .bulletpoints

      li
        margin: 25px 0
        height: 32px
        line-height: 32px

        a
          display: inline-block
          width: 16px
          height: 16px
          border: 1px solid #fff
          transform: rotate(45deg)
          transition: transform .3s ease-out .6s, height .3s ease-out .3s
          vertical-align: middle
          position: relative

          &.router-link-active
            cursor: default
            background: #fff

          span
            position: absolute
            background: #fff
            right: 0
            white-space: nowrap
            top: -1px
            font-size: 25px
            color: rgba(119, 124, 157, 0.5)
            height: 33px
            line-height: 32px
            padding: 0 23px
            opacity: 0
            max-width: 0
            transition: .3s all ease-out
            display: inline-block

            p
              opacity: 0

          &:hover:not(.router-link-active)
            transform: rotate(0)
            height: 100%
            transition: .3s transform ease-out, .3s height ease-out .3s

            span
              opacity: 1
              max-width: 500px
              transition: 1s all ease-out .6s

              p
                opacity: 1
                transition: .3s opacity ease-out 1s

  @keyframes square
    0%
      transform: rotate(45deg)

    100%
      transform: rotate(0)
</style>

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
    mounted () {
      works.query().then(response => {
        this.works = response.data
        this.work = this.works[this.$route.params.id - 1]
        this.isFirstWork = parseInt(this.$route.params.id) !== 1
        this.isLastWork = parseInt(this.$route.params.id) !== this.works.length
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
        this.isFirstWork = parseInt(to.params.id) !== 1
        this.isLastWork = parseInt(to.params.id) !== this.works.length
      }
    }
  }
</script>
