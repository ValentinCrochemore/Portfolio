<template>
  <div
    class="home"
    tabindex="0"
    @keyup.right="onRightPress()"
  >
    <h1>Home</h1>
    <Works></Works>
    <About></About>
    <Contact></Contact>    
  </div>
</template>

<script>
  import Works from './Works'
  import About from './About'
  import Contact from './Contact'

  export default {
    name: 'home',
    components: {
      Works,
      About,
      Contact
    },
    methods: {
      onRightPress () {
        this.$router.push('/work')
      }
    }
  }
</script>