<template>
  <div id="company-info">
    <div class="bg-shadow"></div>
    <hr style="top: 2px; height: 3px;" class="julias-izeb">
    <hr style="top: 18px; height: 2px;" class="julias-izeb">
    <hr style="top: 33px; height: 1px;" class="julias-izeb">
    <div class="company-header">
      БРИЗ
    </div>
    <div class="company-reating">
      №3  В рейтенге компаний
    </div>
    <div id="company-about">
      <div>
        <p class="note">
          Директор компании Кейс Дмитрий Леонидович
        </p>

        <p class="note">
          Наш центральный офис находится по адресу г.Владивосток; ул. Лиловая дом 2.
        </p>

        <p class="note">
          Время работы офиса:  пн-пт 10:00 - 17:00
        </p>

        <p class="note">
          Контактный телефон: 
        </p>

        <p style="padding-left: 50px">
          Главный офис:  8 (924) 206-09-50
        </p>
      </div>
    </div>
    <div id="company-statistic">
      <div class="item izeb">
        <div class="item-content"><span class="left-word">Всего заявок:</span><span>{{stats.offerCount}}</span></div>
      </div>
      <div class="item">
        <div class="item-content"><span class="left-word">Выполнено:</span><span>{{stats.acceptedOffers}}</span></div>
      </div>
      <div class="item izeb">
        <div class="item-content"><span class="left-word">Отклонено:</span><span>{{stats.rejectedOffers}}</span></div>
      </div>
      <div class="item">
        <div class="item-content"><span class="left-word">Ожидает ответа:</span><span>{{stats.waitingOffers}}</span></div>
      </div>
      <div class="item izeb">
        <div class="item-content"><span class="left-word">Среднее оценка работы:</span><span>{{stats.awerageRate}}/5</span></div>
      </div>
      <div class="item">
        <div class="item-content"><span class="left-word">Среднее время отклика на заявку:</span><span>{{stats.awerageReponceTime}} дня</span></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stats: {}
    }
  },
  created() {
    fetch('/offers/statistic').then(data => {
      data.json().then(stats => {
        this.stats = stats
         console.log(stats)
        })      
    }) 
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
  grid-template-rows: 120px 50px 400px 150px;
  padding: 3rem;

  .bg-shadow {
    z-index: 1;
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.45);
  }

  .julias-izeb {
    z-index: 2;
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
  .company-reating {
    z-index: 2;
    grid-column: 1/3;
    font-size: $m-font-size;
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
    grid-template-rows: 1fr;
    grid-row-gap: 20px;
    padding: 1rem;

    .note {
      margin-top: 25px;
    }

    p {
      margin: 0;
    }
  }

  #company-statistic {
    z-index: 2;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-content: flex-start;

    .item {
      display: flex;
      align-items: center;
      font-size: $s-font-size;
      height: 54px;
    }

    .izeb {
      padding-left: 3em;
    }

    .left-word {
      margin-right: 2em;
    }

    .item-content {
      padding: 0.5em 1.3em;
      background: rgba(240, 240, 240, 0.7);
    }
  }
}

</style>
