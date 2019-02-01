<template>
  <section class="container main pt30">
    <h1 class="mb30">Login</h1>
    <form>
      <div class="form-group">
        <label for="email">Email</label>
        <input
                type="text" class="form-control" id="email" placeholder="Email"
                v-model="email"
        >
      </div>
      <div class="form-group">
        <label for="pass">Password</label>
        <input
                type="password" class="form-control" id="pass" placeholder="Password"
                v-model="password"
        >
      </div>
      <div class="button button--primary ml-auto" @click="login()">Login</div>
    </form>
  </section>
</template>

<script>
  export default {
    name: 'LoginPage',
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      login() {
        if (!this.email || !this.password) {
          this.$bus.$emit('notify', {
            type: 'error',
            text: 'Fill email and password'
          })
          return
        }
        let self = this
        this.$store.dispatch('users/login', { email: this.email, password: this.password }).then(res => {
          if (!res) {
            this.$bus.$emit('notify', {
              type: 'error',
              text: 'Email or password is incorrect'
            })
          } else {
            let { data } = res
            this.$store.dispatch('users/setToken', data.token)
            this.$store.dispatch("users/me")
            this.$router.push('/profile')
          }
        })
      }
    }
  }
</script>