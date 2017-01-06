<template>
  <div class="work-content">
    <router-link to="/" class="back"><img src="/static/images/arrow.png">Back</router-link>
    <h2 class="title">{{ work.title }}</h2>
    <div class="container">
      <p class="type">{{ work.type }}</p>
      <div class="wrapper">
        <img class="image" :src="imageSmall">
        <ul class="technologies">
          <li v-for="technology in work.technologies">{{ technology }}</li>
        </ul>
      </div>
      <p class="client">{{ work.client }}</p>
    </div>
    <div class="discover">
      <a :href="work.link" target="_blank">Discover</a>
    </div>
  </div>
</template>

<style lang="sass" scoped>
  @import ../../assets/style/variables

  .work-content
    width: 90%
    position: relative
    display: inline-flex
    flex-direction: column
    justify-content: space-between

    .back
      font-size: 16px
      text-transform: uppercase
      text-decoration: none
      color: #fff
      position: absolute
      top: 30px
      left: 30px
      display: flex
      align-items: center

      img
        padding-right: 20px
        transition: .3s all ease-out
        transform: translateX(0)

      &:hover
        img
          transform: translateX(-5px)

    .title
      font-size: 66px
      text-align: center
      padding-top: 30px

    .container
      padding: 0 10%

    .type
      font-size: 33px
      font-family: $medium
      text-align: center
      width: 60%

    .wrapper
      position: relative
      margin: 20px 0

      .image
        width: 60%

      .technologies
        font-size: 30px
        padding-left: 20px
        height: 100%
        position: absolute
        display: inline-flex
        flex-direction: column
        justify-content: space-between

    .client
      font-size: 30px
      font-family: $italic
      text-align: center
      width: 60%

    .discover
      font-size: 23px
      margin-bottom: 40px
      text-align: center

      a
        text-decoration: none
        border: 2px solid #fff
        padding: 10px 35px
        color: #fff
        display: inline-block
        transition: .3s all ease-out

        &:hover
          background: #fff
          color: rgba(119, 124, 157, .5)

</style>

<script>
  import { works } from '../../utils/globals'

  export default {
    name: 'work-content',
    data () {
      return {
        work: {},
        imageSmall: ''
      }
    },
    mounted () {
      works.query().then(response => {
        this.works = response.data
        this.work = this.works[this.$route.params.id - 1]
        this.imageSmall = this.work.image.small
      })
    },
    watch: {
      '$route' (to, from) {
        this.work = this.works[to.params.id - 1]
        this.imageSmall = this.work.image.small
      }
    }
  }
</script>
