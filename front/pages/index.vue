<template lang="pug">
  section.container.main
    h1.text-center.mb35 Catalog
    products-list
</template>

<script>
  import ProductsList from '~/components/catalog/ProductsList'
  export default {
    name: 'pageIndex',
    components: {
      ProductsList
    }
  }
</script>

<style lang="scss" scoped>
  .main {
    padding-top: 50px;
  }
</style>
