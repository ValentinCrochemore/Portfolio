<template>
  <div
    id="home"
    class="home"
    tabindex="0"
    @keyup.down.prevent="onDownPress"
  >
    <div class="wrapper">
      <div>
        <h2 class="job">Front / Back end Developer</h2>
        <p class="job-description">
          Petite description de ce métier merveilleusement merveilleux !<br>
          Et aussi de ma belle personnalité...
        </p>
      </div>
      <a class="scroll-container" href="#works">
        <p>scroll</p>
        <span class="indicator"></span>
      </a>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'
  // import debounce from 'lodash.debounce'

  export default{
    name: 'home',
    data: function () {
      return {
        isMoving: false
      }
    },
    mounted: function () {
      $(this.$el).focus()
      // $(this.$el).on('mousewheel', debounce(this.onMouseWheel, 1000, { leading: true }))
    },
    beforeDestroy: function () {
      this.$off()
    },
    methods: {
      onDownPress: function () {
        this.worksSmoothScroll()
      },
      onMouseWheel: function (e) {
        if (e.originalEvent.deltaY > 0 && !this.$parent.isMoving) {
          console.log('wheel')
          this.worksSmoothScroll()
        }
      },
      worksSmoothScroll: function () {
        $('a[href="#works"]')[0].click()
        $('#body').focus()
        this.$parent.isMoving = true
        setTimeout(() => {
          this.$parent.isMoving = false
        }, 1000)
      }
    }
  }
</script>