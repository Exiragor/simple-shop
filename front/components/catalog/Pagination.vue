<template lang="pug">
  nav(v-if="lastPage")
    ul.pagination.justify-content-center
      li.page-item(:class="{disabled: currentPage <= 1}")
        a.page-link(href="#" @click="changePage(currentPage - 1)") Previous
      li.page-item(v-if="currentPage - 1 > 1")
        a.page-link(href="#" @click="changePage(1)") 1
      li.page-item.disabled(v-if="currentPage - 1 > 1")
        a.page-link(href="#") ...
      li.page-item(v-for="(page, index) in pages" :key="index" :class="{active: page === currentPage }")
        a.page-link(href="#" @click="changePage(page)") {{ page }}
      li.page-item.disabled(v-if="currentPage + 1 < lastPage")
        a.page-link(href="#") ...
      li.page-item(v-if="currentPage + 1 < lastPage")
        a.page-link(href="#" @click="changePage(lastPage)") {{ lastPage }}
      li.page-item(:class="{disabled: currentPage >= lastPage}")
        a.page-link(href="#" @click="changePage(currentPage + 1)") Next
</template>

<script>
  export default {
    name: 'Pagination',
    computed: {
      currentPage() {
        return +this.$route.params.page || 1
      },
      lastPage() {
        return this.$store.state.products.lastPage || 0
      },
      pages() {
        let page = this.currentPage === 1 ? this.currentPage + 1 : this.currentPage
        page = this.currentPage === this.lastPage ? this.currentPage - 1 : page
        return [page - 1, page, page + 1] || []
      }
    },
    methods: {
      changePage(page) {
        if (page > 0 && page <= this.lastPage)
          this.$router.push({name: 'page-page', params: { page }})
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/scss/vars";
  $green: map_get($colors, green);

  .page-link {
    color: $green;
  }
  .page-item.active .page-link {
    background-color: $green;
    border-color: $green;
  }
</style>
