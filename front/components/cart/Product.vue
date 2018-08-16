<template lang="pug">
    .product-cart
        img.product-cart__image(:src="product.img || '/images/no-product-img.png'", :alt="product.name || ''")
        router-link(:to="'/products/' + product.id").product-cart__name {{ product.name || '' }}
        .product-cart__count {{ product.count || 1 }}
</template>

<script>
export default {
    name: 'ProductCart',
    props: {
        product: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
    .product-cart {
        border: 1px solid black;
        display: flex;
        align-items: center;
        padding: 15px 20px;
        & + & {
            margin-top: 25px; 
        }
        &__image {
            max-height: 100px;
            margin-right: 30px;
        }
        &__count {
            margin-left: auto;
        }
    }
</style>
