<template>
  <div class="works">
    <h1>All the works</h1>  
    <ul v-for="work in works">
      <router-link :to="{ name: 'work', params: { id: work.id }}">
        <li>{{ work.title }}</li>
      </router-link>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'works',
    props: ['works']
  }
</script>