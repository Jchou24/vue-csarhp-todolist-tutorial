<template>
    <div class="nav">
        <router-link :to="GetURL('')">Home(僅可看)</router-link> |
        <router-link :to="GetURL('Edit')">Edit</router-link> |
        <router-link :to="GetURL('NoBackendHome')">不需後端Home(僅可看)</router-link> |
        <router-link :to="GetURL('NoBackendEdit')">不需後端Edit</router-link>
    </div>
</template>

<script>
    // 用做切換Home, Edit頁面
    import { GetURL } from '@/route/routeHelper.js'

    export default {
        name: "Nav",
        methods:{
            GetURL(path){
                return GetURL(path)
            }
        },
    }
</script>

<style lang="scss" scoped>
    .nav {
        padding: 30px;
        a {
            font-weight: bold;
            color: #2c3e50;
            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
</style>
