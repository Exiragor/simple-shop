<template lang="pug">
  section.container.main
    h1.text-center.mb35 Catalog
    pagination.mb30
    products-list
</template>

<script>
  import ProductsList from '~/components/catalog/ProductsList'
  import Pagination from '~/components/catalog/Pagination'

  export default {
    name: 'CatalogPage',
    components: {
      ProductsList,
      Pagination
    }
  }
</script>

<style lang="scss" scoped>
  .main {
    padding-top: 50px;
  }
</style>
