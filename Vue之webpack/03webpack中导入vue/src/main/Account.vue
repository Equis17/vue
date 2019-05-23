<template>
<div>
    <h3>Account</h3>
    <router-link to="/account/login">login</router-link>
    <router-link to="/account/register">register</router-link>
    <router-view></router-view>
</div>
</template>

<script>
    export default {
        name: "Account"
    }
</script>

<style scoped>

</style>
