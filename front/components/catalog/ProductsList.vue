<template lang="pug">
  .products#products
    .row
      .col-md-3(v-for="product in products" :key="product.id")
        card(:product="product")
</template>

<script>
  import Card from '../product/Card'

  export default {
    name: 'ProductsList',
    components: {
      Card
    },
    computed: {
      products() {
        return this.$store.state.products.list || []
      }
    },
  }
</script>
