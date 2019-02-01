<template>
  <section class="container main pt30">
    <h1 class="text-center">My profile</h1>
    <div>Email: {{ user.email || '' }}</div>
    <div>Name: {{ user.name || '' }}</div>
  </section>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: 'ProfilePage',
    computed: {
      ...mapState({
        user: state => state.users.me || {}
      })
    }
  }
</script>