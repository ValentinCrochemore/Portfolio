<template>
  <transition name="fade">
    <div
      class="work"
      tabindex="0"
      @keyup.left="onLeftPress()"
      @keyup.up="onUpPress()"
      @keyup.down="onDownPress()"
    >
      <work-content></work-content>
      <work-navigation></work-navigation>
    </div>
  </transition>
</template>

<script>
  import $ from 'jquery'
  import WorkContent from './partials/WorkContent'
  import WorkNavigation from './partials/WorkNavigation'

  export default {
    name: 'work',
    components: {
      WorkContent,
      WorkNavigation
    },
    mounted: function () {
      console.log('menu')
      $('nav').hide()
      document.querySelector('.work').focus()
    },
    methods: {
      onLeftPress: function () {
        this.$router.push('/')
      },
      onUpPress: function () {
        if (this.$route.params.id > 1) {
          this.$router.push({name: 'work', params: {id: parseInt(this.$route.params.id) - 1}})
        }
      },
      onDownPress: function () {
        if (this.$route.params.id < this.works.length) {
          this.$router.push({name: 'work', params: {id: parseInt(this.$route.params.id) + 1}})
        }
      }
    }
  }

</script>
