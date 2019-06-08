<template>
  <div id=nav-bar>
      <div class="nav-item nav-logo">Будка</div>
      <div class="routes">
        <router-link to="/" class="nav-item">Мой дом</router-link>
        <router-link to="/eventdiscussions" class="nav-item">Услуги</router-link>
        <router-link to="/discussion" class="nav-item">Жилищная компания</router-link>
        <router-link to="/" class="nav-item">Личный кабинет</router-link>
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

  }

  .nav-logo {
    padding-left: 7.1%;
  }
}
</style>
