<template>
    <div class="Board">
        <TodoList title="Todo" v-model="data.Todo" :listIndex="1" @SaveTask="SaveTask" :isReadonly="isReadonly"/>
        <TodoList title="Done" v-model="data.Done" :listIndex="2" @SaveTask="SaveTask" :isReadonly="isReadonly"/>
    </div>
</template>

<script>
    // 設定Todo、Done之TodoList
    import TodoList from '@/components/TodoList.vue'

    export default {
        name: 'Board',
        components: {
            TodoList
        },
        props:{
            value:{
                required: true,
                type: Object, // { todo: [], done: [] }
            },
            isReadonly:{
                required: true,
                type: Boolean,
                default: true,
            },
        },
        data(){
            return {
                data: this.value,
            }
        },
        watch:{
            value(newValue){
                this.data = newValue
            },
        },
        methods:{
            SaveTask(){
                this.$emit("input", this.data)
                this.$emit("SaveTask")
            },
        },
    }
</script>

<style lang="scss" scoped>
    .Board{
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
</style>
