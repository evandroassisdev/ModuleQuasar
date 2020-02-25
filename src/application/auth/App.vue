<template>
  <q-layout view="lHh lpr lFf">
    <q-page-container >
        <q-page class="mainpage">
          <router-view class="main"/>
        </q-page>
      </q-page-container>
  </q-layout>

</template>
<script>
export default {
  data: () => ({
  })
}
</script>
<style lang="stylus" scoped>
.mainpage
  margin-top 0
  // background: $colorPadrao !important
  background url('../../assets/bgoficial.jpg') center no-repeat
  background-size cover
  display flex
  justify-content: center
  align-items: center
  .main
    background: #ffff
    min-height: 350px
    min-width: 250px
    padding 20px
    border-radius: 10px
    // box-shadow: 0px 0px 32px #ccc
.mainpage:before
    content " "
    position absolute
    left 0
    top 0
    right 0
    bottom 0
    background rgba(0,0,0,0.3)
.main
  position relative
@media (min-width: 200px) and (max-width:614px)
  .mainpage
    background: #fff !important
    .main
      padding 5px
      border-radius: 0 !important
      margin 0px
      width 100%
</style>
