<template>
  <div id="forum-nav">
    <router-link active-class="active" to="/creatediscussion">Создание темы</router-link>
    <router-link active-class="active" to="/forum">Обсуждение</router-link>
  </div>
</template>

<style lang="scss">
@import '../assets/variables';

#forum-nav {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  background: $julias-white;

  a {
    text-decoration: none;
    color: $julias-black;
    font-size: $m-font-size;

    padding-left: 1em;
    padding-right: 1em;
  }

  .active {
    color: $julias-orange;
  }
}
</style>

