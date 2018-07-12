<template lang="pug">
  router-link(to="/")
    img.logo(src="~assets/images/logo.png" alt="logo")
</template>

<script>
  export default {
    name: 'Logo',
  }
</script>

<style scoped>
  .logo {
    max-width: 30px;
  }
</style>
