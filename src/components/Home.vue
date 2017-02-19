<template>
  <div
    class="home section"
    data-anchor="home"
    tabindex="0"
  >
    <div class="wrapper">
      <div>
        <h2 class="job">Front / Back end Developer</h2>
        <div class="job-description">
          <vue-typer
                  class="first-typer"
                  text='npm install intership'
                  caret-animation='smooth'
                  :repeat='0'
                  :type-delay='20'
                  @typed='onFirstComplete'
          ></vue-typer>
          <br>
          <vue-typer
                  text='Internship not found!'
                  v-if="isFirstCompleted"
                  :repeat='0'
                  :type-delay='20'
                  :pre-type-delay='postTypeDelay'
                  @typed='onSecondComplete'
          ></vue-typer>
          <br>
          <vue-typer
                  text='Looking for an internship from June to December, anywhere around the world!'
                  v-if="isSecondCompleted"
                  :repeat='0'
                  :type-delay='20'
          ></vue-typer>
        </div>
      </div>
      <a class="scroll-container" href="#works">
        <p>scroll</p>
        <span class="indicator"></span>
      </a>
    </div>
  </div>
</template>

<script>
  import { VueTyper } from 'vue-typer'

  export default{
    name: 'home',
    components: {
      VueTyper
    },
    data: function () {
      return {
        isFirstCompleted: false,
        isSecondCompleted: false,
        postTypeDelay: 1500
      }
    },
    methods: {
      onFirstComplete: function () {
        this.isFirstCompleted = true
        setTimeout(() => {
          document.querySelector('.caret').style.display = 'none'
        }, this.postTypeDelay)
      },
      onSecondComplete: function () {
        this.isSecondCompleted = true
      }
    }
  }
</script>




