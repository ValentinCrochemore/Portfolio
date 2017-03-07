<template>
  <div
    id="fullpage"
    class="index"
    tabindex="0"
    @keyup.right.prevent="onRightPress()"
  >
    <div class="diamonds">
      <diamond v-for="n in diamondNumber"></diamond>
    </div>
    <app-header></app-header>
    <home></home>
    <Works></Works>
    <About></About>
  </div>
</template>

<script>
  import $ from 'jquery'
  import 'fullpage.js'
  import Diamond from './Diamond'
  import AppHeader from './partials/Header'
  import Home from './Home'
  import Works from './Works'
  import About from './About'

  export default {
    name: 'index',
    components: {
      Diamond,
      AppHeader,
      Home,
      Works,
      About
    },
    data: function () {
      return {
        isMoving: false,
        diamondNumber: Math.round((Math.random() * 20) + 10)
      }
    },
    mounted: function () {
      let anchor = this.$route.hash.length > 0 ? this.$route.hash : '#home'
      $('#menu a[href="' + anchor + '"]').addClass('active')
      $(anchor).focus()
      $('#fullpage').fullpage({
        anchors: ['home', 'works', 'about'],
        fixedElements: '#menu',
        afterLoad: function (anchorLink, index) {
          if (index === 1) {
            $('.vue-typer').fadeIn()
          } else {
            $('.vue-typer').fadeOut()
          }
        }
      })
    },
    beforeDestroy: function () {
      $.fn.fullpage.destroy('all')
    },
    watch: {
      '$route' (to, from) {
        $('#menu a').removeClass('active')
        $('#menu a[href="' + to.hash + '"]').addClass('active')
        $(to.hash).focus()
      }
    },
    methods: {
      onRightPress: function () {
        this.$router.push('/work')
      }
    }
  }
</script>
