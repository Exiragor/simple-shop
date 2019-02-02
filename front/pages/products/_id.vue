<template>
  <div class="container">
    <breadcrumbs class="mb35"
                 :active-route="product.name"
    ></breadcrumbs>
    <product-detail :product="product"
    ></product-detail>

    <comment-list></comment-list>

  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import ProductDetail from '~/components/product/Detail.vue'
  import Breadcrumbs from '~/components/common/Breadcrumbs.vue'
  import CommentList from '~/components/comment/CommentList.vue'
  export default {
    name: 'Product',
    components: {
      ProductDetail,
      Breadcrumbs,
      CommentList
    },
    async fetch ({ store, params }) {
      await store.dispatch("products/loadProduct", { productID: params.id })
      await store.dispatch("comments/loadComments", { count: 20, page: 1, product_id: params.id })
    },
    computed: {
      ...mapState({
        product: state => state.products.current || {}
      })
    }
  }
</script>
