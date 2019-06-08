<template>
<div class="">
  <div id="create-discussion">
    <input type="text">
    <textarea name="" id="" cols="30" rows="10"></textarea>
    <input type="button" value=""> 
  </div>
  <div class="white-space"></div>

</div>
</template>

<script>
export default {
  
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
  padding-bottom: 3em;

}
.white-space {
  display: block;
  background-color: $julias-white;
  height: 200px;
  width: 100vw;
}


</style>
