<template lang="pug">
  section.container.main.pt30
    h1.text-center.mb35 Cart
    product(v-for="product in products" :key="product.id" :product="product")
</template>

<script>
  import { mapState } from 'vuex'
  import Product from '@/components/cart/Product'

  export default {
    name: 'CartIndex',
    components: {
        Product
    },
    computed: {
      ...mapState({
        products: state => state.cart.products || [],
        counts: state => state.cart.counts || []
      })
    },
  }
</script>