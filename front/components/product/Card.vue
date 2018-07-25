<template lang="pug">
  .card
    transition(name="fade" appear)
      img.card-img-top(:src="product.img || '/images/no-product-img.png'" alt="product.name")
    .card-body
      h5.card-title {{ product.name }}
      h4 $ {{ formatPrice(product.price) }}
    .card-body.btns
      router-link(:to="`/products/${product.id}`").button.button--primary Подробнее
      .button.button--primary() Купить
</template>

<script>
  export default {
    name: 'ProductCard',
    props: {
      product: {
        type: Object,
        required: true,
      }
    },
    methods: {
      formatPrice(value) {
        let val = (value / 1).toFixed(2).replace('.', ',')
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
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
    max-height: 80px;
  }
  .button {
    width: 45%;
  }
  .card-img-top {
    height: 195px;
  }
</style>
