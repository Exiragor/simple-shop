<template lang="pug">
  section.container.main
    h1.text-center.mb35 Catalog
    pagination.mb30
    products-list(:columns="4" :products="products")
</template>

<script>
  import ProductsList from '~/components/catalog/ProductsList'
  import Pagination from '~/components/catalog/Pagination'

  export default {
    async fetch ({ store }) {
      await store.dispatch("products/loadProducts", { count: 20, page: 1 })
    },
    name: 'pageIndex',
    components: {
      ProductsList,
      Pagination
    },
    computed: {
      products() {
        return this.$store.state.products.list || []
      }
    },
  }
</script>

<style lang="scss" scoped>
  .main {
    padding-top: 50px;
  }
</style>
