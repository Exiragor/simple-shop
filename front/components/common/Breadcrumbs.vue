<template lang="pug">
  .breadcrumbs
    span
      router-link.breadcrumbs__item(to="/") Главная
      |  / #{' '}
    span(v-for="(route, index) in routes" :key="index")
      router-link.breadcrumbs__item(:to="route.link") {{ route.name }}
      | / #{' '}
    span.breadcrumbs__item {{ activeRoute }}
</template>

<script>
  export default {
    name: 'Breadcrumbs',
    props: {
      routes: {
        type: Array,
        default: () => [],
      },
      activeRoute: {
        type: String,
        required: true,
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/scss/vars";
  // colors
  $black: map_get($colors, black);

  .breadcrumbs__item {
    color: $black;
    &:hover {
      color: black;
    }
  }
</style>
