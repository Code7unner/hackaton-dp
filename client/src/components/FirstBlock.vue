<template>
  <div id="first-block">
    <div class="house-events">
      <div v-for="(event, index) in houseEvents" :key="index" class="event">
        <div class="event-img"></div>
        <div class="event-contetn">
          <div class="header">{{event.type}}</div>
          <div class="content">{{event.info}}</div>
          <div @click="openEvent(event.id)" class="btn">Подробнее</div>
        </div>
      </div>
    </div>
    <div class="custom-events">
      <div v-for="(event, index) in customEvents" :key="index" class="event">
        <p>{{event.info}}</p>
        <p style="text-align: center;">подписали {{event.counts}} из 120</p>
        <div class="btn">
          <input class="accept" @click="votePetition(event)" type="button" value="Подписать">
        </div>
        <div class="btn">
          <input class="noaccept" @click="unvotePetition(event)" type="button" value="Не подписывать">
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
  },
  methods: {
    votePetition(event) {
      fetch(`/petitions/${event.id}`, {method: 'POST'})
      event.counts++
      alert('Спасибо за голос')
    },
    unvotePetition(id) {
      fetch(`/petitions/${event.id}`, {method: 'DELETE'})
      
    }     
  },
  computed: {
    user: function() {
      return this.$store.state.user
    }
  },
  created() {
    fetch(`/events/${this.user.id}`)
    .then(data => {
      data.json()
        .then(events => {
          this.houseEvents = events
        })
    })
    .catch(err => {
      console.log("event err:", err)
    })

    fetch(`/petitions/${this.user.id}`)
    .then(data => {
      console.log("data:", data)
      data.json()
        .then(petitions => {
          console.log("petitions:", petitions)
          this.customEvents = petitions
        })
    })
    .catch(err => {
      console.log("petitions err:", err)
    })
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
  padding: 2rem;
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
    overflow-y: scroll;
    display: flex;
    height: 100%;
    padding: 2em;
    flex-direction: column;

    .event {
      display: grid;
      grid-template-columns: 15vw 1fr;
      column-gap: 1em;
      height: 15vw;
      margin: 0.6em 0;

      .event-img {
        width: 15vw;
        height: 100%;
        padding: 0;
        background: rgba(0, 0, 0, 0.39);
      }
      
      .event-contetn {
        align-self: center;
        display: flex;
        flex-direction: column;

        .header {
          padding: 0.75em 0.5em;
          color: $julias-orange;
          border-bottom: 2px solid $julias-orange;
        }

        .content {
          padding: 0.75em 0.5em;
          color: $julias-black;
          border-bottom: 2px solid $julias-orange;
        }

        .btn {
          padding: 0.75em 0.5em;
          color: $julias-black;
          text-align: right;


        }
      }
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
    padding: 1.5em;
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

        &:focus {
          outline: none;
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

