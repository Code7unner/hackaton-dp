<template>
<div class="">
  <forum-nav></forum-nav>
  <div id="create-discussion">
    <input placeholder="Заголовок обсуждения" type="text">
    <textarea placeholder="Сообщение..."></textarea>
    <input type="button" value="Создать обсуждение"> 
  </div>
  <div class="white-space"></div>

</div>
</template>

<script>
import forumNav from '../components/ForumNav.vue'

export default {
  components: {
    forumNav
  }
}
</script>

<style lang="scss">
@import '../assets/variables';

#create-discussion {
  display: grid;
  grid-template-columns: 80%;
  grid-template-rows: 50px 300px 50px;
  background: $background-color;
  row-gap: 20px;
  justify-content: center;
  padding-top: 2em;
  padding-bottom: 3em;

  textarea {
    font-size: $s-font-size;
    padding: 0.5em;
    color: $julias-black;
    resize: none;
    background: rgba(240, 240, 240, 0.4);
    box-shadow: inset 7px 7px 7px rgba(243, 100, 77, 0.2);
  }

  input {
    color: $julias-black;
    padding: 0.5em;
    font-size: $s-font-size;
    background: rgba(240, 240, 240, 0.4);
    box-shadow: inset 7px 7px 7px rgba(243, 100, 77, 0.2);
  }
}
.white-space {
  display: block;
  background-color: $julias-white;
  height: 200px;
  width: 100vw;
}



</style>
