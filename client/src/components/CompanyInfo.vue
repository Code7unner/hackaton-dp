<template>
  <div id="company-info">
    <div class="bg-shadow"></div>
    <hr style="top: 2px; height: 3px;" class="julias-izeb">
    <hr style="top: 18px; height: 2px;" class="julias-izeb">
    <hr style="top: 33px; height: 1px;" class="julias-izeb">
    <div class="company-header">
      Название компании
    </div>
    <div id="company-about">
      <div class="">Lorem eum?</div>
      <div class="btn">
        <input type="button" value="Связаться с управляющей компанией">
      </div>
      <div class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ab rem veniam reprehenderit vel delectus.</div>
    </div>
    <div id="company-projects">
      <div class="content-item">
        <div class="content-item__img"></div>
        <div class="content-item__info">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam rem magni reprehenderit deserunt, commodi eveniet?</div>
        <div class="content-item__btn">
          <span>Смотреть фотоотчет</span>
        </div>
      </div>
      <div class="content-item">
        <div class="content-item__img"></div>
        <div class="content-item__info"></div>
        <div class="content-item__btn"></div>
      </div>
      <div class="content-item">
        <div class="content-item__img"></div>
        <div class="content-item__info"></div>
        <div class="content-item__btn"></div>
      </div>
      <div class="btn">
        <input type="button" value="Все проекты компании">
      </div>
    </div>
  </div>
</template>

<script>
export default {
   data() {
     return {

     }
   }
}
</script>

<style lang="scss">
@import '../assets/variables';

#company-info {
  position: relative;
  background-image: url(../assets/companyInfoBg.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  display: grid;
  grid-template-columns: 4fr 5fr;
  grid-template-rows: 150px 850px 150px;
  padding: 3rem;

  .bg-shadow {
    z-index: 1;
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
  }

  .julias-izeb {
    position: absolute;
    border: 0;
    background: $background-color;
    width: 100%;
  }

  .company-header {
    z-index: 2;
    grid-column: 1/3;
    font-size: $xl-font-size;
    line-height: 112px;
    justify-self: center;
    align-self: center;
    color: $julias-white;
  }

  .company-list {
    grid-column: 1/3;
    z-index: 3;
    background: $julias-black;
  }

  #company-about {
    font-size: $s-font-size;
    line-height: 40px;
    color: $julias-white;
    z-index: 2; 
    display: grid;
    grid-template-rows: 4fr 1fr 3fr;
    grid-row-gap: 40px;
    padding: 3rem;
  }

  #company-projects {
    z-index: 2;
    position: relative;
    display: grid;
    grid-template-rows: repeat(3, 190px) 1fr;
    grid-row-gap: 50px;

    .content-item {
      padding: 10px;
      background: rgba(240, 240, 240, 0.4);
      display: grid;
      grid-template-rows: repeat(2, 80px);
      grid-template-columns: 170px 1fr;
      grid-row-gap: 10px;
      grid-column-gap: 20px;    
      font-size: $s-font-size;
      line-height: 40px;

      .content-item__img {
        grid-row: 1/3;
        background: red;
      }

      .content-item__btn {
        display: flex;
        justify-content: center;
        align-items: flex-end;
        text-align: center;
      }
    }

  }
  .btn {
    position: relative;
    display: flex;
    align-self: center;
    justify-content: center;
    width: 100%;

    input {
      width: 100%;
      padding: 0.8em;
      background: $julias-white;
      color: $julias-black;
      border: 0;
      transition: 0.5s;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      font-size: $s-font-size;
      line-height: 0px;

      &:hover {
        border-radius: 35px;
        color: $julias-white;
        background: $background-color;
      }

      &:focus {
        outline: 0;
      }
      
    }
  }
}

</style>
