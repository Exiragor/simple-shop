<template>
  <router-link v-if="!user" to="/auth/login" class="flex fy-center mr15">
    <i class="material-icons">account_box</i>
    <div class="flex fx-center fy-center name">Login</div>
  </router-link>
  <router-link v-else to="/profile" class="flex fy-center mr15">
    <i class="material-icons">account_box</i>
    <div class="flex fx-center fy-center name">{{ user.name }}</div>
  </router-link>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: 'AccountIcon',
    mounted() {
      this.$store.dispatch("users/getTokenFromLs")
      this.$store.dispatch("users/me")
    },
    computed: {
      ...mapState({
        user: state => state.users.me || null
      })
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/scss/vars";
  // colors
  $green: map_get($colors, green);
  $black: map_get($colors, black);
  i {
    color: $green;
    font-size: 34px;
  }
  .name {
    color: $black;
  }
</style>