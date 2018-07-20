<template lang="pug">
  nav
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
  .form-inline {
    justify-content: flex-end;
  }
</style>
