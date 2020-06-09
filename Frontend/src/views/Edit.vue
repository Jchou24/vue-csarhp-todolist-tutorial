<template>
    <div class="Edit">
        <button @click="ReloadBoard">ReloadBoard</button>
        <Board v-model="data" :isReadonly="false" @SaveTask="SaveBoard"/>
    </div>
</template>

<script>
    // 觀看/新增/修改/刪除 TodoList用
    // data有異動時，需要更新後端

    // @ is an alias to /src
    import { mapMutations } from 'vuex'
    import Board from '@/components/Board.vue'
    import { APIHandler } from '@/api/apiHandler.js'

    export default {
        name: 'Edit',
        components: {
            Board
        },
        data(){
            return {
                apiHandler: new APIHandler(),
                data: this.$store.state.remoteBoard.boardData,
            }
        },
        computed:{
            boardData:{
                get(){
                    return this.$store.state.remoteBoard.boardData
                }
            }
        },
        methods:{
            ReloadBoard(){
                let that = this

                that.apiHandler.GetBoardData().then(function(response){
                    that.SetBoardData(response.data)
                    that.data = response.data
                })
            },
            SaveBoard(){
                let that = this

                that.SetBoardData(that.data)
                that.apiHandler.SaveBoardData(that.boardData)
            },
            ...mapMutations('remoteBoard',[
                'SetBoardData',
            ])
        },
        mounted(){
            this.ReloadBoard()
        }
    }
</script>

<style lang="scss" scoped>

</style>
