<template>
  <div id="app">
    <router-view :transition-name="transitionName"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: function () {
    return {
      transitionName: 'slide'
    }
  },
  watch: {
    '$route' (to, from) {
      if (to.params.id && from.params.id) {
        this.transitionName = 'switch'
      } else {
        this.transitionName = 'slide'
      }
    }
  }
}
</script>

<style lang="sass">
  @import ./assets/style/main
</style>
 