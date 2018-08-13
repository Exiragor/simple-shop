<template lang="pug">
  router-link(to="/").shopping-cart
    i.material-icons shopping_cart
    .count.flex.fx-center.fy-center {{ productsCountInCart }}
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'ShoppingCart',
    computed: {
      ...mapState({
        productsCountInCart: state => state.cart.count || 0
      })
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/scss/vars";
  // colors
  $green: map_get($colors, green);
  $white: map_get($colors, white);

  .shopping-cart {
    position: relative;
  }

  .shopping-cart i {
    color: $green;
    font-size: 34px;
  }
  .count {
    height: 18px;
    width: 18px;
    background-color: $green;
    border-radius: 15px;
    color: $white;
    font-size: 14px;
    position: absolute;
    right: -3px;
    bottom: -3px;
  }
</style>
