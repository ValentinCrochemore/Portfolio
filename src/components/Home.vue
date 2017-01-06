<template>
  <div
    class="home"
    tabindex="0"
    @keyup.right="onRightPress()"
  >
    <h1>Home</h1>
    <Works :works="works"></Works>
    <About></About>
    <Contact></Contact>    
  </div>
</template>

<style lang="sass">
  .home
    outline: none
</style>

<script>
  import Works from './Works'
  import About from './About'
  import Contact from './Contact'
  import { works } from '../utils/globals'

  export default {
    name: 'home',
    components: {
      Works,
      About,
      Contact
    },
    data () {
      return {
        works: []
      }
    },
    mounted () {
      document.querySelector('.home').focus()
      works.query().then(response => {
        this.works = response.data
      })
    },
    methods: {
      onRightPress () {
        this.$router.push('/work')
      }
    }
  }
</script>