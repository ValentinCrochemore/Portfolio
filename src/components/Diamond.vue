<template>
  <div class="diamond"></div>
</template>

<script>
  import $ from 'jquery'

  export default{
    name: 'diamond',
    mounted: function () {
      this.randomDiamondParams()
      $('#app').on('mousemove', this.onMouseMove)
    },
    methods: {
      randomDiamondParams: function () {
        let size = Math.round((Math.random() * 100 + Math.random() * 100) + 40)
        let topPosition = Math.round(Math.random() * 300)
        let leftPosition = Math.round(Math.random() * 100)
        let diamonds = $(this.$el).siblings('.diamond')
        diamonds.each((index, diamond) => {
          if (diamond.offsetWidth === size) {
            size = Math.round((Math.random() * 100 + Math.random() * 100) + 40)
          }
        })
        this.$el.style.width = size + 'px'
        this.$el.style.height = size + 'px'
        this.$el.style.top = topPosition + '%'
        this.$el.style.left = leftPosition + '%'
      },
      onMouseMove: function (e) {
        $(this.$el).css('transform', 'rotate(45deg) translate3d(' + e.originalEvent.movementX + 'px, ' + e.originalEvent.movementY + 'px, 0)')
      }
    }
  }
</script>
