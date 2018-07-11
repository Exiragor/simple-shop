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
      },
      currentPage() {
        return this.$route.params.page || 1
      }
    },
    created() {
      this.$store.dispatch("products/loadProducts", { page: this.currentPage })
    }
  }
</script>
