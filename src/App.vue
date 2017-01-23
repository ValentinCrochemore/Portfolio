<template>
  <div id="app">
    <router-view></router-view>
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
        this.transitionName = to.params.id > from.params.id ? 'next' : 'prev'
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

