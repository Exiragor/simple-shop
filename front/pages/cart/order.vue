<template>
    <section class="container main pt30">
        <form v-if="!orderSuccess">
            <div class="form-group">
                <label for="phone">Phone</label>
                <input type="text" class="form-control" id="phone" placeholder="Enter phone" v-model="phone">
                <small id="emailHelp" class="form-text text-muted">Manager will call u for more details</small>
            </div>
            <div class="form-group">
                <label for="firstname">Firstname</label>
                <input type="text" class="form-control" id="firstname" placeholder="Enter firstname" v-model="firstname">
            </div>
            <div class="form-group">
                <label for="lastname">Lastname</label>
                <input type="text" class="form-control" id="lastname" placeholder="Enter lastname" v-model="lastname">
            </div>
        </form>
        <div class="flex mt15" v-if="!orderSuccess">
            <div class="button button--primary ml-auto" @click="makeOrder()">Create</div>
        </div>
        <h3 v-if="orderSuccess">Thanks for order!</h3>
    </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: "CartOrder",
    data() {
        return {
            orderSuccess: false
        }
    },
    computed: {
      ...mapState({
        clientInfo: state => state.cart.clientInfo || {},
      }),
      firstname: {
           get() {
               return this.clientInfo.firstName
           },
           set(value) {
               this.$store.dispatch('cart/changeClientInfo', { name: 'firstName', value })
           }
      },
      lastname: {
           get() {
               return this.clientInfo.lastName
           },
           set(value) {
               this.$store.dispatch('cart/changeClientInfo', { name: 'lastName', value })
           }
      },
      phone: {
           get() {
               return this.clientInfo.phone
           },
           set(value) {
               this.$store.dispatch('cart/changeClientInfo', { name: 'phone', value })
           }
      },
    },
    methods: {
        makeOrder() {
            this.$store.dispatch('cart/makeOrder').then(status => {
                if (status) {
                    this.orderSuccess = true
                    this.$store.dispatch('cart/clear')
                } else {
                    this.$bus.$emit('notify', {
                        type: 'error',
                        text: 'Something gone wrong. pls try later!'
                    })
                }
            })
        }
    }
}
</script>
