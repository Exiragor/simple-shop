<template>
    <div class="product-cart">
        <img :src="product.img || '/images/no-product-img.png'" class="product-cart__image" :alt="product.name || ''">
        <router-link :to="'/products/' + product.id">{{ product.name || '' }}</router-link>
        <div class="count">
            <div class="count__btn" @click="changeCount(product, 1)"><span>+</span></div>
            <div class="count__number">{{ getCount(product.id) || 1 }}</div>
            <div class="count__btn" @click="changeCount(product, -1)"><span>-</span></div>
        </div>
        <div class="actions">
            <span @click="deleteProduct(product.id)">Remove</span>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import { getProduct } from '~/helpers'

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
        getProduct(id) {
            return getProduct(this.products, id)
        },
        getCount(id) {
            let { index } = this.getProduct(id)
            return this.counts[index]
        },
        deleteProduct(id) {
            this.$store.dispatch('cart/deleteProduct', { productId: id })
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "~assets/scss/vars";
    // colors
    $black: map_get($colors, black);
    $green: map_get($colors, green2);
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
    .actions {
        font-size: 16px;
        margin-left: 15px;
        span {
            border-bottom: 1px solid $black;
            cursor: pointer;
            &:hover {
                border-color: $green;
                color: $green;
            }
        }
    }
</style>
