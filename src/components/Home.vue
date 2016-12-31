<template>
  <div class="home">
    <h1>Home</h1>
    <Works :works="works"></Works>
    <About></About>
    <Contact></Contact>    
  </div>
</template>

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
      works.query().then(response => {
        this.works = response.data
      })
    }
  }
</script>