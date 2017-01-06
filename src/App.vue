<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="sass">
  @import ./assets/style/variables

  #app
    font-family: $avenir
    position: absolute
    width: 100%
    height: 100%
    color: #fff
    overflow: hidden
</style>
 