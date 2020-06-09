<template>
    <div></div>
</template>

<script>
    // TODO
    // unchecked yet
    export default {
        name: "VueTemplate",
        components:{
            
        },
        props:{
            
        },
        data(){
            return {

            }
        },
        watch:{
            
        },
        computed:{

        },
        methods:{
            init(){
                let that = this
                
                that.recycle()
            },
            recycle(){
                let that = this
            }
        },
        mounted(){

        },
        beforeDestroy(){
            this.recycle()
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
