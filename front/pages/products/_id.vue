<template lang="pug">
  .container
    breadcrumbs.mb35(:active-route="product.name")
    product-detail(:product="product")
</template>

<script>
  import { mapState } from 'vuex'
  import ProductDetail from '~/components/product/Detail.vue'
  import Breadcrumbs from '~/components/common/Breadcrumbs.vue'
  export default {
    name: 'Product',
    components: {
      ProductDetail,
      Breadcrumbs
    },
    async fetch ({ store, params }) {
      await store.dispatch("products/loadProduct", { productID: params.id })
    },
    computed: {
      ...mapState({
        product: state => state.products.current || {}
      })
    }
  }
</script>
