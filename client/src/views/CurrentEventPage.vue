<template>
  <div>
    <div class="event-image">
      <img src="">
    </div>
    <div class="event-title">
      <hr class="izeb-1">
      <p>Отключение воды (дата)</p>
      <hr class="izeb-2">
    </div>
  </div>
</template>

<script>

export default {

}
</script>

<style lang="scss">
@import '../assets/variables';

#event-block {
  background: $julias-white;
  position: relative;
  min-height: 700px;

  .event-image {
    display: flex;
    justify-content: center;
    background: #C4C4C4;
    min-height: 300px;
  }

  .event-title {
    text-align: center;
    font-size: $m-font-size;
  }

  hr {
    border: 2px solid $julias-orange; 
  }

  .izeb-1 {
    width: 25%;
  }

  .izeb-2 {
    width: 30%;
  }
}
</style>
