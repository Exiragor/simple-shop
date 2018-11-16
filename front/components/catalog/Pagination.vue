<template>
  <nav v-if="lastPage">
    <ul class="pagination justify-content-center">
      <li class="page-item" :class="{disabled: currentPage <= 1}">
        <a class="page-link" href="#" @click="changePage(currentPage - 1)">Previous</a>
      </li>
      <li class="page-item" v-if="currentPage - 1 > 1">
        <a class="page-link" href="#" @click="changePage(1)">1</a>
      </li>
      <li class="page-item disabled" v-if="currentPage - 2 > 1">
        <a class="page-link" href="#">...</a>
      </li>
      <li class="page-item" v-for="(page, index) in pages" :key="index" :class="{active: page === currentPage }">
        <a class="page-link" href="#" @click="changePage(page)">{{ page }}</a>
      </li>
      <li class="page-item disabled" v-if="currentPage + 2 < lastPage">
        <a class="page-link" href="#">...</a>
      </li>
      <li class="page-item" v-if="currentPage + 1 < lastPage">
        <a class="page-link" href="#" @click="changePage(lastPage)">{{ lastPage }}</a>
      </li>
      <li class="page-item" :class="{disabled: currentPage >= lastPage}">
        <a class="page-link" href="#" @click="changePage(currentPage + 1)">Next</a>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: 'Pagination',
    props: {
      lastPage: {
        type: Number,
        default: 0
      },
      value: {
        type: Number,
        default: 1
      }
    },
    computed: {
      currentPage() {
        return +this.value
      },
      pages() {
        let page = this.currentPage === 1 ? this.currentPage + 1 : this.currentPage
        page = page === this.lastPage ? this.currentPage - 1 : page

        let pages = []
        for (let i = page - 1; i <= page + 1; i++) {
          if (i > this.lastPage)
            break;
          pages.push(i)
        }

        return pages || []
      }
    },
    methods: {
      changePage(page) {
        if (page > 0 && page <= this.lastPage)
          this.$emit('input', page)
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
