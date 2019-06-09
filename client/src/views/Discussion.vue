<template>
  <div id="discussion">
    
    <div class="header">
      <svg @click="back" class="arrow" viewBox="0 0 23 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.3536 4.35355C22.5488 4.15829 22.5488 3.84171 22.3536 3.64645L19.1716 0.464466C18.9763 0.269204 18.6597 0.269204 18.4645 0.464466C18.2692 0.659728 18.2692 0.976311 18.4645 1.17157L21.2929 4L18.4645 6.82843C18.2692 7.02369 18.2692 7.34027 18.4645 7.53553C18.6597 7.7308 18.9763 7.7308 19.1716 7.53553L22.3536 4.35355ZM0 4.5L22 4.5V3.5L0 3.5L0 4.5Z" fill="#2A2D34"/>
      </svg>

      Название события
      <hr class="line">
    </div>
    <div class="chat">
      <div v-for="(msg, index) in messages" :key="index" class="msg">
        <div class="msg-header">Maxim</div>
        <div class="msg-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam eaque praesentium fuga, necessitatibus repudiandae minima! Ab alias aut nisi! Vel doloremque neque quia corrupti in, odit alias saepe enim asperiores dicta quisquam voluptatem. Quam deleniti, fugiat cumque veniam aut aspernatur assumenda ipsa nulla perferendis nostrum quas ut iure repellat debitis. ipsum dolor sit amet consectetur adipisicing elit. Fuga, eaque. Molestiae nemo architecto rem soluta est. Ea quasi quam quia aliquam, recusandae laboriosam officia nisi dicta eum? Totam, cumque labore.</div>
      </div>
    </div>
    <div class="new-msg">
      <textarea placeholder="Введите сообщение..."></textarea>
      <input class="btn" type="button" value="отправить сообщение">
      <hr class="line">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messages: [{}, {}, {}, {}, {}, {}]
    }
  },
  methods: {
    back() {
      this.$router.go(-1)
    }
  },
}
</script>

<style lang="scss">
@import '../assets/variables';

#discussion {
  display: grid;
  grid-template-rows: 80px 800px 300px;
  grid-template-columns: 80vw;
  justify-content: center; 
  background: rgba(240, 240, 240, 0.7);
  box-shadow: 0px 7px 7px rgba(0, 0, 0, 0.25);
  padding-top: 50px;
  padding-bottom: 180px;

  .arrow {
    position: absolute;
    left: 15px;
    transform: rotate(180deg);
    height: 20px;
    width: 20px;
    color: $julias-black;
    transition: width 0.5s;

    &:hover {
      width: 40px;
      color: $julias-orange;
    }
  }

  .header {
    position: relative;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background: $julias-white;
    text-align: center;
    color: $julias-orange;
    font-size: $l-font-size;
    padding-top: 0.5em;

    .line {
      left: 10%;
      bottom: 0px;
      position: absolute;
      width: 80%;
      height: 2px;
      background-color: $julias-orange;
      border: 0;
      z-index: 3;
    }
  }

  .discription {
    text-align: center;
    background: $julias-white;
    font-size: $s-font-size;
    color: $julias-black;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  .chat {
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
    padding: 0 10%;
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    overflow-y: scroll;
    z-index: 0;
    background: $julias-white;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    .msg {
      background: #C8C9CA;
      margin-bottom: 20px;
      padding: 1em;
      display: grid;
      grid-template-rows: 50px minmax(50px, auto);
      
      .msg-header {

      }

      .msg-text {

      }
    }    
  }

  .new-msg {
    position: relative;
    display: flex;
    z-index: 3;
    flex-direction: column;
    padding: 1em 0;
    background: rgba(240, 240, 240, 0.7);
    box-shadow: 0px 7px 7px rgba(0, 0, 0, 0.25);
    align-items: center;

    textarea {
      width: 76%;
      height: 180px;
      resize: none;
      background: #C8C9CA;
      color: $julias-white;
      padding: 2%;
      font-size: $s-font-size;
      background: rgba(42, 45, 52, 0.4);
      box-shadow: inset 7px 7px 7px rgba(243, 100, 77, 0.2);
      margin-bottom: 20px;
    }
    
    .btn {
      border: 1px solid $julias-black;
      background: $julias-white;
      padding: 0.3em 3em;
      transition: 0.5s;

      &:hover {
        border-radius: 20px;
        background: $background-color;
      }
    }

    .line {
      left: 10%;
      top: -6px;
      position: absolute;
      width: 80%;
      height: 2px;
      background-color: $julias-orange;
      border: 0;
      z-index: 3;
    }    
  }
}
</style>
