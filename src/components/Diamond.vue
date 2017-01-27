<template>
  <div class="diamond"></div>
</template>

<script>
  import $ from 'jquery'

  export default{
    name: 'diamond',
    data: function () {
      return {
        width: '100px'
      }
    },
    mounted: function () {
      let size = Math.round((Math.random() * 100 + Math.random() * 100) + 40)
      let topPosition = Math.round(Math.random() * 300)
      let leftPosition = Math.round(Math.random() * 100)
      this.$el.style.width = size + 'px'
      this.$el.style.height = size + 'px'
      this.$el.style.top = topPosition + '%'
      this.$el.style.left = leftPosition + '%'
      console.log('document height :', $(document).height())
    }
  }
</script>