<template lang="pug">
  section.container.main
    h1.text-center.mb35 Catalog
    pagination.mb30
    products-list(:columns="4" :products="products")
</template>

<script>
  import { mapState } from 'vuex'
  import ProductsList from '~/components/catalog/ProductsList'
  import Pagination from '~/components/catalog/Pagination'

  export default {
    name: 'CatalogPage',
    async fetch ({ store, params }) {
      await store.dispatch("products/loadProducts", { count: 20, page: params.page })
    },
    components: {
      ProductsList,
      Pagination
    },
    computed: {
      ...mapState({
        products: state => state.products.list || []
      })
    },
  }
</script>

<style lang="scss" scoped>
  .main {
    padding-top: 50px;
  }
</style>
