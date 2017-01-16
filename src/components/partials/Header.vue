<template>
  <header class="header">
    <h1 class="fullname">
      Valentin
      <span class="name">Crochemore</span>
    </h1>
    <nav>
      <a
        href="#home"
        @mouseover="onMouseOver"
        @mouseout="onMouseOut"
      >
        Home
      </a>
      <a
        href="#works"
        @mouseover="onMouseOver"
        @mouseout="onMouseOut"
      >
        Works
      </a>
      <a
        href="#about"
        @mouseover="onMouseOver"
        @mouseout="onMouseOut"
      >
        About
      </a>
    </nav>
  </header>
</template>
<script>
  import $ from 'jquery'

  export default{
    name: 'header',
    methods: {
      onMouseOver: function (e) {
        $(e.target).removeClass('inactive').addClass('active')
      },
      onMouseOut: function (e) {
        $(e.target).removeClass('active').addClass('inactive')
      }
    }
  }
</script>
