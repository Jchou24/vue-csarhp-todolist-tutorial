<template>
    <div class="NoBackendEdit">
        <Board v-model="$store.state.localBoard.boardData" :isReadonly="false"/>
    </div>
</template>

<script>
    // 觀看/新增/修改/刪除 TodoList用
    // data有異動時，不需更新後端

    // @ is an alias to /src
    import Board from '@/components/Board.vue'

    export default {
        name: 'NoBackendEdit',
        components: {
            Board
        },
    }
</script>

<style lang="scss" scoped>

</style>
