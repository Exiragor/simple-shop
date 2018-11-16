<template>
  <section class="container main pt30">
    <h1 class="text-center mb35">Catalog</h1>
    <pagination class="mb30" :last-page="lastPage" v-model="page" />
    <search class="mb30" />
    <products-list :columns="4" :products="products" />
  </section>
</template>

<script>
  import { mapState } from 'vuex'
  import ProductsList from '~/components/catalog/ProductsList'
  import Pagination from '~/components/catalog/Pagination'
  import Search from '~/components/catalog/Search'

  export default {
    name: 'CatalogPage',
    async fetch ({ store, params }) {
      await store.dispatch("products/loadProducts", { count: 20, page: params.page })
    },
    data() {
      return {
        page: +this.$route.params.page
      }
    },
    components: {
      ProductsList,
      Pagination,
      Search
    },
    computed: {
      ...mapState({
        products: state => state.products.list || [],
        lastPage: state => state.products.lastPage || 0
      })
    },
    watch: {
      'page': function() {
        if (this.page > 0 && this.page <= this.lastPage)
          this.$router.push({name: 'page-page', params: { page: this.page }})
      }
    }
  }
</script>
