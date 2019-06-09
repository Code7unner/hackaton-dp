<template>
  <div id="call-master">
    <hr style="top: 2px; height: 3px;" class="julias-izeb">
    <hr style="top: 18px; height: 2px;" class="julias-izeb">
    <hr style="top: 33px; height: 1px;" class="julias-izeb">
    <div class="header">Подать заявку в управляющую компанию</div>
    <div class="master-type">
      <select v-model="typeSelected" name="masterPick" id="">
        <option hidden disabled value="">Выбор категорию</option>
        <option v-for="(master, index) in masterList" :key="index" :value="master.id">{{master.name}}</option>
      </select>
    </div>
    <div class="offer-disc"><textarea v-model="offerDisc" placeholder="Расскажите о своей проблеме..."></textarea></div>
    <div class="complite-btn"><input @click="offer" type="button" value="Отправить заявку"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      typeSelected: '',
      masterList: [
        {id: 'local', name: 'Локальное'},
        {id: 'house', name: 'Внутридомовое'},
        {id: 'yard', name: 'Дворовое'}

      ],
      offerDisc: ''
    }
  },
  methods: {
    offer() {
      fetch(`/offers/${this.user.id}`, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({
          id: this.user.id,
          info: this.offerDisc,
          type: this.typeSelected
        })
      })
      .then(() => this.offerDisc = '')
      .catch(err => console.log(err))
    }
  },
  computed: {
    user: function() {
      return this.$store.state.user
    }
  },
}
</script>

<style lang="scss">
@import '../assets/variables';

#call-master {
  background: $background-color;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 1fr 270px 2fr;
  justify-items: center;
  align-items: center;
  padding: 1em;
  padding-top: 50px;

  .julias-izeb {
    position: absolute;
    width: 100%;
    border: 0;
    background-color: $julias-white;
  }

  .header {
    z-index: 100;
    grid-column: 1/4;    
    font-size: $l-font-size;
    line-height: 45px;
    color: $julias-black;
  }

  .master-type {
    grid-row: 2;
    background: $julias-white;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); 
    transition: 0.5s;
    
    select {
      width: 21vw;
      height: 60px;
      text-align: center;
      text-align-last: center;
      font-size: $s-font-size;
      line-height: 40px;
      font-family: 'Blacker Sans Light';
      padding-right: 25px;
      -webkit-appearance: none;
      transition: 0.5s;
      background: url(../assets/select.svg) no-repeat right 20px center/20px 15px!important;       
      border: 0;  
      

      &:focus {
        outline: 0;
      }
    }
  }

  .offer-disc {
    grid-row: 2;

    textarea {
      height: 150px;
      width: (62vw - 2vw);
      resize: none;
      box-shadow: inset 7px 7px 7px rgba(243, 100, 77, 0.2);
      font-size: $s-font-size;
      line-height: 28px;
      padding: 1vw; 
      

      &:focus {
        outline: 0;
      }
    }
  }  

  .complite-btn {
    grid-column: 2/3;

    input {
      font-size: $s-font-size;
      color: $julias-black;
      border-color: rgba(0, 0, 0, 0);
      width: 26vw;
      height: 60px;
      border-width: 0;
      background: $julias-white;
      transition: 0.5s;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      
      &:hover {
        border-radius: 35px;
        color: $julias-white;
        background: $julias-black;
      }

      &:focus {
        outline: 0;
      }
    }
  }
}
</style>
