<template>
  <div
    :id="'work-' + $route.params.id"
    class="work"
    tabindex="0"
    @keyup.left="onLeftPress()"
    @keyup.up="onUpPress()"
    @keyup.down="onDownPress()"
  >
    <work-content></work-content>
    <work-navigation></work-navigation>
  </div>
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
        work: {},
        allowedTime: 300,
        threshold: 150,
        restraint: 100
      }
    },
    mounted: function () {
      $('nav').remove()
      $('.work-content-container').on('touchstart', this.onTouchStart)
      $('.work-content-container').on('touchmove', this.onTouchMove)
      $('.work-content-container').on('touchend', this.onTouchEnd)
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
      onTouchStart: function (e) {
        console.log('touchstart')
        e.preventDefault()
        e.stopPropagation()
        let touchObj = e.changedTouches[0]
        this.swipeDir = 'none'
        this.dist = 0
        this.startX = touchObj.pageX
        this.startY = touchObj.pageY
        this.startTime = e.timeStamp
      },
      onTouchMove: function (e) {
        e.preventDefault()
      },
      onTouchEnd: function (e) {
        e.preventDefault()
        let touchObj = e.changedTouches[0]
        let distX = touchObj.pageX - this.startX
        let distY = touchObj.pageY - this.startY
        let elapsedTime = e.timeStamp - this.startTime
        if (elapsedTime <= this.allowedTime) {
          if (Math.abs(distX) >= this.threshold && Math.abs(distY) <= this.restraint) {
            this.swipeDirection = (distX < 0) ? 'left' : 'right'
          } else if (Math.abs(distY) >= this.threshold && Math.abs(distX) <= this.restraint) {
            this.swipeDirection = (distY < 0) ? 'up' : 'down'
          }
        }
        this.handleSwipe(this.swipeDirection)
      },
      handleSwipe: function (swipeDirection) {
        switch (swipeDirection) {
          case 'right':
            this.$router.push({ path: '/', hash: 'works' })
            break
          case 'up':
            this.next()
            break
          case 'down':
            this.prev()
            break
        }
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

