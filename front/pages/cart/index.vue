<template>
  <section class="container main pt30">
    <h1 class="text-center mb35"> Cart</h1>
    <product v-for="product in products" :key="product.id" :product="product" />
    <h2 v-if="!products.length">Empty</h2>
    <div class="result flex mt30">
      <span class="ml-auto fs30">Result: ${{ sum }}</span>
    </div>
    <div class="flex mt15">
      <div class="button button--primary ml-auto" @click="makeOrder()">Make order</div>
    </div>
  </section>
</template>

<script>
  import { mapState } from 'vuex'
  import Product from '@/components/cart/Product'
  import { formatPrice } from '~/helpers'

  export default {
    name: 'CartIndex',
    components: {
        Product
    },
    computed: {
      ...mapState({
        products: state => state.cart.products || [],
        counts: state => state.cart.counts || [],
        sum: state => formatPrice(state.cart.sum) || 0
      })
    },
    methods: {
      makeOrder() {
        this.$router.push('/cart/order')
      }
    }
  }
</script>
