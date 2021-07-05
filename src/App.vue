<template>
  <Header />
  <!-- 달라지는 부분 -->
  <RouterView />
  <Footer />
</template>

<script>
import Header from '~/components/Header'
import Footer from './components/Footer'
export default {
  components: {
    Header,
    Footer
  }
  
}
</script>

<style lang="scss">
@import '~/scss/main';
</style>