<template lang="pug">
    notifications.absolute.mt80
</template>

<script>
export default {
    name: 'Events',
    created() {
        this.$bus.$on('notify', data => {
            const obj = {
                text: 'default',
                position: 'top right'
            }

            for (let key in data) {
                obj[key] = data[key]
            }

            this.$notify(obj)
        })
    }
}
</script>
