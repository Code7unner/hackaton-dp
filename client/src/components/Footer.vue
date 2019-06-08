<template>
  <div id="footer">
    <div class="footer-izeb-bg"></div>
    <div class="footer-content">
      <div class="footer-links">
        <h2>ПОМОЩЬ И ПОДДЕРЖКА</h2>
        <router-link to="">Вход и регестрация</router-link>
        <router-link to="">Вопросы об оплате</router-link>
        <router-link to="">Вопросы по линому кабинету</router-link>
        <router-link to="">Центры обслуживания</router-link>
        <router-link to="">Все вопросы и ответы</router-link>
      </div> 
      <div class="footer-links">
        <h2>ПОЛЕЗНЫЕ РЕСУРСЫ</h2>        
        <router-link to="">Российская общественная инициатива</router-link>
        <router-link to="">Интернет-портал правовой информаци</router-link>
        <router-link to="">Портал Госуслуг</router-link>
      </div>
      <div class="footer-links">
        <h2>ИНФОРМАЦИЯ О ПОРТАЛЕ</h2>        
        <router-link to="">Новости</router-link>
        <router-link to="">Информация о платежах</router-link>
        <router-link to="">Информация о портале</router-link>
        </div> 
    </div>
    <div class="footer-authors">
      <div class="div">
        <p>Back end разработка - Чербаджи Максим</p>

      </div>
      <div class="div"><p>Front end разработка - Пысин Юрий</p></div>
      <div class="div"> <p>Дизайн - Панюта Юлия</p></div>
      <div class="div">
        <p>Цифровой прорыв 2019</p>
      </div>
      <div class="div">
        <p>Приморский край, г. Владивосток</p>
      </div>
      
     
    </div>
  </div>
</template>

<style lang="scss">
@import '../assets/variables';

#footer {
  z-index: 4;
  position: absolute;
  width: 100%;
  bottom: -330px;
  display: grid;
  grid-template-rows: 100px 300px 120px;
  
  .footer-izeb-bg {
    background-image: url(../assets/NavBgIzeb.png);
    background-position-y: 30px;
    background-repeat: no-repeat;
    background-size: cover;
  }
  
  .footer-content {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
    background: $background-color;
    padding-top: 2rem;
  }

  .footer-links {
    display: flex;
    width: 27vw;
    flex-direction: column;
    color: $julias-black;
    a {
      text-decoration: none;
      color: $julias-black;
      font-size: ($s-font-size - 6px);
      line-height: 40px;
      transition: 0.5s;

      &:hover{
        font-size: ($s-font-size - 4px);
        color: $julias-white;
      }
    }
  }

  .footer-authors {
    font-size: $s-font-size;
    line-height: 40px;
    padding-left: 2rem;
    padding-right: 2rem;
    color: $julias-white;
    background: $julias-black;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
  }
  p {
    margin: 0;
  }
}

</style>

