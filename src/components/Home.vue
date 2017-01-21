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
                  text='Petite description de ce métier merveilleusement merveilleux !'
                  :repeat='0'
                  :type-delay='20'
                  @typed='onComplete'
          ></vue-typer>
          <br>
          <vue-typer
                  text='Et aussi de ma belle personnalité...'
                  v-if="isCompleted"
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
        isCompleted: false
      }
    },
    methods: {
      onComplete: function () {
        this.isCompleted = true
      }
    }
  }
</script>