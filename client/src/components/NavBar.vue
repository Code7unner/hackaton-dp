<template>
  <div id=nav-bar>
      <div class="nav-item nav-logo"><img src="../assets/logo.png" alt="">Мой дом</div>
      <div class="routes">
        <router-link to="/" class="nav-item">Главная</router-link>
        <router-link to="/forum" class="nav-item">Обсудить вопрос</router-link>
      </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
@import '../assets/variables';

#nav-bar{
  background: $background-color;
  display: grid;
  height: 70px;
  font-family: Blacker Sans;
  font-size: 20px;
  line-height: 27px;
  text-transform: uppercase;
  grid-template-columns: 4fr 6fr;
  place-content: center;
  transition: 1s;

  a {
    transition: 0.5s;
    text-decoration: none;
    color: $julias-black;
    &:hover {
      color: $julias-white;
    }
  }

  
  .routes {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .nav-logo {
    padding-left: 7.1%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
}
</style>
