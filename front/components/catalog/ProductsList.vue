<template lang="pug">
  .products#products
    .card-deck.mb20(v-for="(products, index) in sortedProducts" :key="index")
      card(v-for="product in products" :key="product.id" :product="product")
    h2(v-if="!sortedProducts.length").text-center No result
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
      sortedProducts() {
        return this.sortProductsForColumns(this.products, +this.columns) || []
      }
    },
    methods: {
      sortProductsForColumns(products, columns) {
        let result = [], x = [], col = columns - 1
        for (let [index, product] of products.entries()) {
          x.push(product)
          if (index === col) {
            col += columns
            result.push(x)
            x = []
          }
        }

        return result
      }
    }
  }
</script>
