<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view></router-view>
    </transition>
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
      console.log(this.transitionName)
    }
  }
}
</script>

<style lang="sass">
  @import ./assets/style/main
</style>

