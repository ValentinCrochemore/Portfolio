<template>
  <div
    class="works section"
    tabindex="0"
  >
    <div class="wrapper">
      <h3 class="subtitle">Works</h3>
      <ul class="works-list">
        <li v-for="work in works" :id="'work-' + work.id">
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
    }
  }
</script>

