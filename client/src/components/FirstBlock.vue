<template>
  <div id="first-block">
    <div class="house-events">
      <div v-for="(event, index) in houseEvents" :key="index" class="event"></div>
    </div>
    <div class="custom-events">
      <div v-for="(event, index) in customEvents" :key="index" class="event">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, facere! Mollitia nam porro corporis est possimus quidem itaque! Tempora est aut, magni nostrum autem soluta eius quaerat ipsum tenetur sint.</p>
        <p style="text-align: center;">подписали 10 из 120</p>
        <div class="btn">
          <input class="accept" type="button" value="Подписать">
        </div>
        <div class="btn">
          <input class="noaccept" type="button" value="Не подписывать">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      customEvents: [{}, {}],
      houseEvents: [{}, {}, {}, {}]
    }
  }
}
</script>

<style lang="scss">
@import '../assets/variables';


#first-block {
  background: $julias-white;
  display: grid;
  position: relative;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: 90%;
  height: 70vh;
  column-gap: 2em;

  .house-events {
    &::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
      border-radius: 10px;
      background-color: #F5F5F5;
    }

    &::-webkit-scrollbar {
      width: 2px;
      background-color: #F5F5F5;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
      background-color: #F3644D;
    }


    position: relative;
    margin-left: 2em;
    overflow-y: scroll;
    display: flex;
    height: 100%;
    padding: 2em;
    flex-direction: column;

    .event {
      min-height: 35vh;
      background-color: blue;
      margin-top: 1em; margin-bottom: 1em;
    }
  }

  .custom-events {
    &::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
      border-radius: 10px;
      background-color: #F5F5F5;
    }

    &::-webkit-scrollbar {
      width: 2px;
      background-color: #F5F5F5;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
      background-color: #F3644D;
    }


    position: relative;
    margin-right: 0.5em;
    overflow-y: scroll;
    padding: 1em;
    height: 100%;


    .event {
      // min-height: 400px;
      display: flex;
      flex-direction: column;
      margin-top: 1em; margin-bottom: 1em;
      border-top: 1px solid rgb(255, 90, 0);

      input {
        width: 100%;
        padding-top: 0.5em; padding-bottom: 0.5em;
        font-size: $s-font-size;
        margin-top: 0.5rem;
        border: 1px solid $julias-black;
        background: $julias-white;
        transition: 0.5s;        

        &:hover {
          border-radius: 60px;
        }
      }

      .accept {
        transition: 0.5s;

        &:hover {
          background: linear-gradient(270deg, rgba(181, 246, 41, 0.14) -20.16%, #27AE60 34.77%, #27AE60 66.81%, rgba(181, 246, 41, 0.14) 126.31%), #27AE60;
          box-shadow: 0px 4px 4px rgba(79, 194, 80, 0.2);
        }
      }

      .noaccept {
        transition: 0.5s;

        &:hover {
          background: $background-color;
          box-shadow: 0px 4px 4px rgba(243, 100, 77, 0.2);
        }
      }
    }
  }
}
</style>

