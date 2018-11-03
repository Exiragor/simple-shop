<template>
  <header class="header flex">
    <logo class="logo pl17" />
    <shopping-cart class="cart" />
  </header>
</template>

<script>
  import Logo from  './Logo'
  import ShoppingCart from './ShoppingCart'

  export default {
    name: 'HeaderTop',
    components: {
      Logo,
      ShoppingCart,
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
