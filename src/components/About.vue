<template>
  <div
    id="about"
    class="about"
    tabindex="0"
    @keyup.up.prevent="onUpPress"
  >
    <div class="wrapper">
      <h3 class="subtitle">About</h3>
      <div class="about-container">
        <div class="about-wrapper">
          <p class="about-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula bibendum magna a interdum. Maecenas lobortis dapibus odio et tincidunt. Suspendisse libero mauris, maximus non venenatis et, mollis in ante. Cras molestie congue arcu a iaculis. Vivamus tempor, ligula et finibus malesuada, elit nibh dignissim ex, in fringilla dui nunc vitae ante.</p>
          <div class="about-link">
            <a href="#">Download my resume</a>
          </div>
        </div>
      </div>
      <div class="socials-container">
        <div class="socials-wrapper">
          <a class="icon-twitter" href="https://twitter.com/VCrochemore" target="_blank"></a>
          <a class="icon-linkedin" href="https://fr.linkedin.com/in/valentin-crochemore-0b347088" target="_blank"></a>
          <a class="icon-mail" href="mailto:valentin.crochemore@gmail.com"></a>
          <a class="icon-github" href="https://github.com/ValentinCrochemore" target="_blank"></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'
  // import debounce from 'lodash.debounce'

  export default {
    name: 'about',
    mounted: function () {
      // $(this.$el).on('mousewheel', debounce(this.onMouseWheel, 1000, { leading: true }))
    },
    beforeDestroy: function () {
      this.$off()
    },
    methods: {
      onUpPress: function () {
        $('html, body').animate({
          scrollTop: $('#works').offset().top
        }, 500)
        $('#works').focus()
      },
      worksSmoothScroll: function () {
        $('a[href="#works"]')[0].click()
        $('#works').focus()
      }
    }
  }
</script>
