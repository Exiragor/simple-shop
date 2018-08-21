<template lang="pug">
    .product-cart
        img.product-cart__image(:src="product.img || '/images/no-product-img.png'", :alt="product.name || ''")
        router-link(:to="'/products/' + product.id").product-cart__name {{ product.name || '' }}
        .count
            .count__btn(@click="changeCount(product, '+', 1)")
                span + 
            .count__number {{ product.count || 1 }}
            .count__btn
                span -
</template>

<script>
export default {
    name: 'ProductCart',
    props: {
        product: {
            type: Object,
            required: true
        }
    },
    methods: {
        changeCount(product, method, count) {
            let number
            switch(method) {
                case '-':
                    number = -count
                default:
                    number = count
            }

            this.$store.dispatch('cart/changeCountOfProduct', {productId: this.product.id, number})
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
            margin: 0 10px;
        }
        &__btn {
            border: 1px solid $black;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
        }
    }
</style>
