<template>
    <div class="TodoList">
        <h2>{{title}}</h2>
        <button v-if="!isReadonly" @click="AddNewTask">新增Task</button>
        <Draggable group="tasks"
            v-model="data"
            :disabled="isReadonly"
            @end="DragEnd"
            @update="SaveTask"
            >
            <Task v-for="(task, index) in data"
                :index="index"
                :key="index"
                :listIndex="listIndex"
                :taskIndex="index"
                :isReadonly="isReadonly"
                v-model="data[index]" 
                
                @SaveTask="SaveTask"
                @DeleteTask="DeleteTask"
                />
        </Draggable>
    </div>
</template>

<script>
    // 用以呈現許多Task
    // 要能夠限定是否僅能觀看
    // 當能編輯時，要能夠新增Task
    import Draggable from 'vuedraggable'
    import Task from '@/components/Task.vue'

    export default {
        name: "TodoList",
        components:{
            Draggable,
            Task,
        },
        props:{
            value:{
                required: true,
                type: Array,
            },
            isReadonly:{
                required: true,
                type: Boolean,
                default: true,
            },
            listIndex:{
                required: true,
                type: Number,
            },
            title:{
                required: true,
                type: String,
                default: () => "",
            }
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
            AddNewTask(){
                this.data.push({
                    Title: "", 
                    Content: ""
                })

                this.SaveTask()
            },
            DragEnd(){
                this.SaveTask()
            },
            SaveTask(){
                this.$emit("input", this.data)
                this.$emit("SaveTask")
            },
            DeleteTask(indexToRemove){
                this.data.splice(indexToRemove, 1);
                this.SaveTask()
            },
        },
    }
</script>

<style lang="scss" scoped>
    .TodoList{
        width: 200px;
        border-radius: 5px;

        margin: 5px;
        padding: 10px;
        background: #a1aebd;
    }
</style>
