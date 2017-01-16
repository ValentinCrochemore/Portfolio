<template>
  <div
    id="works"
    class="works"
    tabindex="0"
    @keyup.up.prevent="onUpPress"
    @keyup.down.prevent="onDownPress"
  >
    <div class="wrapper">
      <h3 class="subtitle">Works</h3>
      <ul class="works-list">
        <li v-for="work in works">
          <router-link
                  :to="{ name: 'work', params: { id: work.id }}"
                  :style="{'background-image': 'url(' + work.image.small + ')'}"
          >
            <div class="works-content">
              <div class="works-wrapper">
                <h4>{{ work.title }}</h4>
                <p>{{ work.type }}</p>
              </div>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'
  import { works } from '../utils/globals.js'

  export default {
    name: 'works',
    data: function () {
      return {
        works: []
      }
    },
    mounted: function () {
      works.query().then(response => {
        this.works = response.data
      })
      // $(this.$el).on('mousewheel', debounce(this.onMouseWheel, 1000, { leading: true }))
    },
    beforeDestroy: function () {
      this.$off()
    },
    methods: {
      onUpPress: function () {
        this.homeSmoothScroll()
      },
      onDownPress: function () {
        this.aboutSmoothScroll()
      },
      onMouseWheel: function (e) {
        if (!this.$parent.isMoving) {
          e.originalEvent.deltaY > 0 ? this.aboutSmoothScroll() : this.homeSmoothScroll()
        }
      },
      homeSmoothScroll: function () {
        $('a[href="#home"]')[0].click()
        $('#home').focus()
      },
      aboutSmoothScroll: function () {
        console.log('wheel from works to about')
        $('a[href="#about"]')[0].click()
        $('#about').focus()
      }
    }
  }
</script>