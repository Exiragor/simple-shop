<template lang="pug">
  .product
    .row
      .col-md-6.col-sm-12
        img.card-img-top.p10(:src="product.img || '/images/no-product-img.png'" alt="product.name")
        .text-center.mt15
          button(v-for="tag in product.tags" :key="tag").button.button--small.button--primary-border.tag.mt20 {{ tag }}
      .col-md-6.col-sm-12.pt30
        h2 {{ product.name }}
        h3.mt40.field__title.pb5.font-italic
          | Description
        .field {{ product.description }}
        h3.mt40.field__title.pb5.font-italic
          | Specifications
        .field
          .field__spec.py15(v-for="spec in product.specifications" :key="spec.name")
            span.font-weight-bold {{ spec.name }}
            span {{ spec.value }}
</template>

<script>
  export default {
    name: 'ProductDetail',
    props: {
      product: {
        required: true,
        type: Object,
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/scss/vars";
  // colors
  $gray: map_get($colors, gray3);
  .tag + .tag {
    margin-left: 10px;
  }
  .field {
    &__title {
      border-bottom: 1px solid $gray;
    }
    &__spec {
      display: flex;
      justify-content: space-between;
    }
  }
</style>
