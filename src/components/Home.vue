<template>
  <div
    class="home"
    tabindex="0"
    @keyup.right="onRightPress()"
  >
    <app-header></app-header>
    <div class="wrapper">
      <index></index>
      <Works></Works>
      <About></About>
    </div>
  </div>
</template>

<script>
  import AppHeader from './partials/Header'
  import Index from './Index'
  import Works from './Works'
  import About from './About'

  export default {
    name: 'home',
    components: {
      AppHeader,
      Index,
      Works,
      About
    },
    methods: {
      onRightPress () {
        this.$router.push('/work')
      }
    }
  }
</script>