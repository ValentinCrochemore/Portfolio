<template>
  <div
    class="index"
    tabindex="0"
    @keyup.right.prevent="onRightPress()"
    v-smoothscroll="{ duration: 1000 }"
  >
    <app-header></app-header>
    <home></home>
    <Works></Works>
    <About></About>
  </div>
</template>

<script>
  import $ from 'jquery'
  // import debounce from 'lodash.debounce'
  import AppHeader from './partials/Header'
  import Home from './Home'
  import Works from './Works'
  import About from './About'

  export default {
    name: 'index',
    components: {
      AppHeader,
      Home,
      Works,
      About
    },
    data: function () {
      return {
        isMoving: false
      }
    },
    methods: {
      onRightPress: function () {
        this.$router.push('/work')
      },
      onMouseWheel: function () {
        let scrollTopPosition = Math.round($(window).scrollTop())
        console.log($('#home'))
        console.log(Math.round(scrollTopPosition))
        console.log(document.querySelector('#home').clientHeight)
        if (scrollTopPosition === 0) {
          $('a[href="#works"]')[0].click()
          $('#works').focus()
        } else if (scrollTopPosition === document.querySelector('#home').clientHeight) {
          $('a[href="#about"]')[0].click()
          $('#about').focus()
        }
      }
    }
  }
</script>
