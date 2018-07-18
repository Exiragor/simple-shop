<template lang="pug">
  .products#products
    .row
      .col-sm-12(v-for="product in products" :key="product.id" :class="columnsClass")
        card(:product="product")
</template>

<script>
  import Card from '../product/Card'

  export default {
    name: 'ProductsList',
    components: {
      Card
    },
    props: {
      columns: {
        type: [Number, String],
        default: 6,
      },
      products: {
        type: Array,
        default: () => [],
        required: true,
      }
    },
    computed: {
      columnsClass() {
        return 'col-md-' + 12 / this.columns
      }
    },
  }
</script>
