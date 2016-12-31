<template>
  <div id="app">
    <router-view :works="works"></router-view>
  </div>
</template>

<script>
import { works } from './utils/globals'

export default {
  name: 'app',
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

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
 