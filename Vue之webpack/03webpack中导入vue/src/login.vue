<template>
    <div>
        <input type="button" :value="msg" @click="show">
    </div>
</template>
<script>
    export default {
        data(){
            return{
                msg:'123'
            }
        },
        methods:{
            show(){
                console.log('login')
            }
        }
    }
</script>

<style></style>
