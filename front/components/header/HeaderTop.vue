<template>
  <header class="header flex">
    <logo class="logo pl17" />
    <div class="cart flex">
      <account-icon />
      <shopping-cart />
    </div>
  </header>
</template>

<script>
  import Logo from  './Logo'
  import ShoppingCart from './ShoppingCart'
  import AccountIcon from './AccountIcon'

  export default {
    name: 'HeaderTop',
    components: {
      Logo,
      ShoppingCart,
      AccountIcon
    }
  }
</script>

<style scoped>
  .header {
    height: 60px;
    background-color: white;
    padding: 10px 20px;
  }
  .logo {
    margin-left: auto;
  }
  .cart {
    margin-left: auto;
  }
</style>
