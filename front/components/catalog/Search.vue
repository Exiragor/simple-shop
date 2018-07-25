<template lang="pug">
  nav#search
    form.form-inline
      input.form-control(type="search" placeholder="Search" aria-label="Search" @keyup.enter="search" v-model="productName")
      button.button.button--primary(type="submit" @click="search") Search
</template>

<script>
  export default {
    name: 'CatalogSearch',
    computed: {
      productName() {
        return this.$store.state.products.query.name
      },
    },
    methods: {
      search() {

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
