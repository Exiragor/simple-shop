<template lang="pug">
  .container
    h1.text-center.mb20 Catalog
    product-detail(:product="product")
</template>

<script>
  import ProductDetail from '~/components/product/Detail.vue'
  export default {
    name: 'Product',
    components: {
      ProductDetail
    },
    async fetch ({ store, params }) {
      await store.dispatch("products/loadProduct", { productID: params.id })
    },
    computed: {
      product() {
        return this.$store.state.products.current
      }
    }
  }
</script>
