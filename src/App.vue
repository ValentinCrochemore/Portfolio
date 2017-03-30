<template>
  <div id="app">
    <div class="diamonds">
      <diamond v-for="n in diamondNumber"></diamond>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Diamond from './components/Diamond'

export default {
  name: 'app',
  components: {
    Diamond
  },
  data: function () {
    return {
      diamondNumber: Math.round((Math.random() * 20) + 10)
    }
  }
}
</script>

<style lang="sass">
  @import ./assets/style/main
</style>

