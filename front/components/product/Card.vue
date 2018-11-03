<template>
  <div class="card">
    <transition name="fade" appear>
      <img class="card-img-top" :src="product.img || '/images/no-product-img.png'" :alt="product.name">
    </transition>
    <div class="card-body">
      <h5 class="card-title">{{ product.name }}</h5>
      <h4>{{ formatPrice(product.price) }}</h4>
    </div>
    <div class="card-body btns">
      <router-link :to="`/products/${product.id}`" class="button button--primary">More</router-link>
      <div class="button button--primary" @click="addToBasket">{{ productInCart ? 'In cart' : 'Buy' }}</div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'ProductCard',
    props: {
      product: {
        type: Object,
        required: true,
      }
    },
    computed: {
      ...mapState({
        products: state => state.cart.products
      }),
      productsId() {
        return this.products.map(item => item.id)
      },
      productInCart() {
        return this.productsId.indexOf(this.product.id) !== -1
      }
    },
    methods: {
      formatPrice(value) {
        let val = (value / 1).toFixed(2).replace('.', ',')
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
      },
      addToBasket() {
        if (this.productInCart) return
        this.$store.dispatch('cart/addProductToCart', { product: this.product})
        this.$bus.$emit('notify', {
          type: 'success',
          text: 'Product was added to basket'
        })
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
