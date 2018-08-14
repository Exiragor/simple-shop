<template lang="pug">
    .product-cart {{ product.name }}
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
