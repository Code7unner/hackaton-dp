<template>
  <div id="event-discussion">
    <div class="event-list">
      <div :class="index % 2 == 0 ? 'left-item' : 'right-item'" class="list-slot" v-for="(item, index) in eventList" :key="index">
        <div :class="index % 2 == 0 ? 'item-white' : 'item-black'" class="item">
          <div class="item-img"></div>
          <div class="item-header">qwe</div>
          <div>asd</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      eventList: [{}, {}]
    }
  }  
}
</script>

<style lang="scss">
@import '../assets/variables';

#event-discussion {
  background-color: $julias-white;
  padding: 6rem 1rem;

  .event-list {
    background: rgba(240, 240, 240, 0.7);
    box-shadow: 0px 7px 7px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    padding: 2em;

    .list-slot {
      display: flex;
      border-bottom: 2px solid $julias-orange;
      flex-direction: row;
      padding: 2em;
    }

    .left-item {
      justify-content: flex-start;
    }

    .right-item {
      justify-content: flex-end;
    }

    .item {
      padding: 10px;
      display: grid;
      grid-template-rows: repeat(2, 80px);
      grid-template-columns: 170px 1fr;
      grid-row-gap: 10px;
      grid-column-gap: 20px;    
      font-size: $s-font-size;
      line-height: 40px;
      
      
      .item-img {
        grid-row: 1/3;
        background: #C4C4C4;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      }

      .item-header {
        color: $julias-orange;
        font-size: $m-font-size;
      }

      .item-content {
        font-size: $s-font-size;
      }
    }

    .item-black {
      background: $julias-black;
      color: $julias-white;
    }

    .item-white {
      background: $julias-white;
      color: $julias-black;
    }
  }
}


</style>
