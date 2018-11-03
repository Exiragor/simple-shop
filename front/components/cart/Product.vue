<template>
    <div class="product-cart">
        <img :src="product.img || '/images/no-product-img.png'" class="product-cart__image" :alt="product.name || ''">
        <router-link :to="'/products/' + product.id">{{ product.name || '' }}</router-link>
        <div class="count">
            <div class="count__btn" @click="changeCount(product, 1)"><span>+</span></div>
            <div class="count__number">{{ getCount(product.id) || 1 }}</div>
            <div class="count__btn" @click="changeCount(product, -1)"><span>-</span></div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'ProductCart',
    props: {
        product: {
            type: Object,
            required: true
        }
    },
    computed: {
        ...mapState({
        products: state => state.cart.products || [],
        counts: state => state.cart.counts || []
      })
    },
    methods: {
        changeCount(product, count) {
            this.$store.dispatch('cart/changeCountOfProduct', { productId: this.product.id, number: count })
        },
        getCount(id) {
            let product = this.products.filter(p => p.id === id)[0]
            let index = this.products.indexOf(product)
            return this.counts[index]
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "~assets/scss/vars";
    // colors
    $black: map_get($colors, black);
    .product-cart {
        border: 1px solid $black;
        border-radius: 15px;
        display: flex;
        align-items: center;
        font-size: 20px;
        padding: 15px 20px;
        & + & {
            margin-top: 25px; 
        }
        &__image {
            max-height: 100px;
            margin-right: 30px;
        }
    }
    .count {
        margin-left: auto;
        &__number {
            margin: 5px 10px;
        }
        &__btn {
            border: 1px solid $black;
            display: flex;
            font-size: 17px;
            justify-content: center;
            align-items: center;
            cursor: pointer;
        }
    }
</style>
