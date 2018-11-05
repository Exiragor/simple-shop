<template>
  <section class="container main pt30">
    <h1 class="text-center mb35"> Cart</h1>
    <product v-for="product in products" :key="product.id" :product="product" />
    <div class="result flex mt30">
      <span class="ml-auto fs30">Result: ${{ getSum() }}</span>
    </div>
    <div class="flex mt15">
      <div class="button button--primary ml-auto" @click="makeOrder()">Оформить</div>
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
        counts: state => state.cart.counts || []
      })
    },
    methods: {
      getSum() {
        let sum = 0
        for (let index in this.products) {
          sum += this.products[index].price * this.counts[index]
        }
        return formatPrice(sum)
      },
      makeOrder() {
        this.$store.dispatch('cart/makeOrder')
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
