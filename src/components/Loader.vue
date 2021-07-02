<template>
  <div
    :style="{
      width: `${size}rem`,
      height: `${size}rem`,
      zIndex
    }"
    :class="{ 
      absolute, 
      fixed }"
    class="spinner-border text-primary"></div>
</template>

<script>
export default {
  // props => Loader를 사용하는 component으로 부터 받을 수 있는 데이터의 형태
  props:{
    size:{
      type: Number,
      default: 2
    },
    absolute: {
      type: Boolean,
      default: false
    },
    fixed:{  
      type: Boolean,
      default: false 
    },
    zIndex: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="scss" scoped>
.spinner-border {
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  &.absolute {
    position: absolute;
  }
  &.fixed {
    position: fixed;
  }
}

</style>