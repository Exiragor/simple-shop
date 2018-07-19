<template lang="pug">
  section.container.main.pt30
    h1.text-center.mb35 Catalog
    pagination.mb30
    products-list(:columns="4" :products="products")
</template>

<script>
  import { mapState } from 'vuex'
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
      ...mapState({
        products: state => state.products.list || []
      })
    },
  }
</script>
