<template lang="pug">
  div
    header-component.mb30
    nuxt
    events
</template>

<script>
  import headerComponent from '~/components/header/HeaderTop'
  import events from '~/components/common/Events'

  export default {
    components: {
      headerComponent,
      events
    }
  }
</script>
