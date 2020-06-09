<template>
    <div class="NoBackendHome">
        <Board v-model="$store.state.localBoard.boardData" :isReadonly="true"/>
    </div>
</template>

<script>
    // 觀看 TodoList用

    // @ is an alias to /src
    import Board from '@/components/Board.vue'

    export default {
        name: 'NoBackendHome',
        components: {
            Board
        },
    }
</script>
