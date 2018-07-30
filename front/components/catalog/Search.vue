<template lang="pug">
  nav#search
    .form-inline
      input.form-control(type="search" placeholder="Search" aria-label="Search" @keyup.enter="search" v-model="productName")
      button.button.button--primary(type="submit" @click="search") Search
</template>

<script>
  export default {
    name: 'CatalogSearch',
    computed: {
      productName: {
        get() {
          return this.$store.state.products.query.name
        },
        set(val) {
          this.$store.dispatch('products/changeQuery', {name: val})
        }
      },
    },
    methods: {
      search() {
        this.$store.dispatch("products/loadProducts", { count: 20, page: 1 })
        this.$router.push({name: 'page-page', params: { page: 1 }})
      }
    },
  }
</script>

<style lang="scss" scoped>
  #search {
    .form-inline {
      justify-content: flex-end;
    }

    input {
      height: 40px;
      border-radius: 0;
    }
  }
</style>
