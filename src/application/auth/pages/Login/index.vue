<template>
  <div id="Login">
    <div class="text-center">
      <img src="@assets/quasar-logo-full.svg" class="responsive">
    </div>
    <div class="text-center">
      <h5>Conecte-se</h5>
    </div>
    <div class="formlogin">
      teste
      <div class="text-center cadastrolink">
        <router-link to="cadastro">
          <h6>Criar Conta</h6>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
  }),
  methods: {
  }
}
</script>
<style lang="stylus" scoped>
#Login
  h5
    margin 0
    padding 10px 0
    color $colorPadrao
  .q-checkbox
    padding-right 20px
  .forgotPassword
    a
      text-decoration none
      color $colorPadrao
      font-family 'Roboto', sans-serif
      transition 0.2s
    a:hover
      color $colorPadrao2
  .buttonlogin
    padding 20px 0
    .q-btn
      width 100%
      text-transform none
      font-size 15px
  .cadastrolink
    a
      text-decoration none
      color $colorPadrao
      transition 0.2s
    a:hover
      color $colorPadrao2
    h6
      margin 0
</style>
