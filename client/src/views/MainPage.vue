<template>
  <div>
    <first-block></first-block>
    <call-master></call-master>
    <company-info></company-info>
  </div>
</template>

<script>
import firstBlock from '../components/FirstBlock.vue'
import callMaster from '../components/CallMaster.vue'
import companyInfo from '../components/CompanyInfo.vue'

export default {
  components: {
    firstBlock,
    callMaster,
    companyInfo
  }
  
}
</script>

<style lang="scss">

</style>
