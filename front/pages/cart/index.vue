<template>
  <section class="container main pt30">
    <h1 class="text-center mb35"> Cart</h1>
    <product v-for="product in products" :key="product.id" :product="product" />
    <div class="result mt30">
      <span>Result: ${{ getSum() }}</span>
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
      }
    }
  }
</script>

<style lang="scss" scoped>
  .result {
    display: flex;
    font-size: 30px;
    span {
      margin-left: auto;
    }
  }
</style>
