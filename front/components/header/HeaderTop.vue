<template lang="pug">
  header.header
    logo
</template>

<script>
  import Logo from  './Logo'

  export default {
    name: 'HeaderTop',
    components: {
      Logo
    }
  }
</script>

<style scoped>
  .header {
    height: 60px;
    background-color: white;
    display: flex;
    justify-content: center;
    padding: 10px 20px;
  }
</style>
