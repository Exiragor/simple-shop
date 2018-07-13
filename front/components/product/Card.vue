<template lang="pug">
  .card.mb20
    transition(name="fade" appear)
      img.card-img-top.p10(:src="product.img || '/images/no-product-img.png'" alt="product.name")
    .card-body
      h5.card-title {{ product.name }}
    .card-body.btns
      .button.button--primary Подробнее
      .button.button--primary Купить
</template>

<script>
  export default {
    name: 'ProductCard',
    props: {
      product: {
        required: true,
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/scss/vars";
  // colors
  $white: map_get($colors, white);

  .card-body {
    background-color: $white;
  }
  .btns {
    display: flex;
    justify-content: space-between;
  }
  .button {
    width: 45%;
  }
</style>
