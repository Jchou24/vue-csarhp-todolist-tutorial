<template>
    <div class="Home">
        <button @click="ReloadBoard">ReloadBoard</button>
        <Board v-model="boardData" :isReadonly="true"/>
    </div>
</template>

<script>
    // 觀看後端 TodoList用

    // @ is an alias to /src
    import { mapMutations } from 'vuex'
    import Board from '@/components/Board.vue'
    import { APIHandler } from '@/api/apiHandler.js'

    export default {
        name: 'Home',
        components: {
            Board
        },
        data(){
            return {
                apiHandler: new APIHandler()
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
                })
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
