<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view class="rv"></router-view>
    <main-footer></main-footer>
  </div>
</template>

<script>
import navBar from './components/NavBar.vue'
import mainFooter from './components/Footer.vue'

export default {
  components: {
    navBar,
    mainFooter
  },
  data() {
    return {}
  }
}
</script>


<style lang="scss">
body, html {
  margin:  0;
}

@import './assets/variables';

@font-face {
    font-family: 'Blacker Sans';
    src: url('./assets/Blacker Sans Regular.otf') format("opentype");
}
@font-face {
    font-family: 'Blacker Sans Light';
    src: url('./assets/Blacker-Sans-Light.ttf');
}

#app {
  font-family: 'Blacker Sans Light';
  display: flex;
  flex-direction: column;
  position: relative;
}

.rv {
  display: flex;
  flex-direction: column;
}

</style>
