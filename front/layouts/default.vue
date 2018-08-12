<template lang="pug">
  div
    header-component.mb30
    nuxt
    notifications.absolute.mt80
</template>

<script>
  import headerComponent from '~/components/header/HeaderTop'

  export default {
    components: {
      headerComponent
    }
  }
</script>
