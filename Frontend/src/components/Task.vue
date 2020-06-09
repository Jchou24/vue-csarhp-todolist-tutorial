<template>
    <div class="Task"
        :class="{ alert: isNeedSave }"
        >
        <div class="task-content"
            @click="OpenModal"
            >
            <h2>標題: {{data.Title}} </h2>
            <p>內容: {{data.Content}} </p>
            <p v-if="isNeedSave">此卡片尚未儲存</p>
        </div>

        <modal :name="modalName">
            <h2>標題: <input v-model="data.Title" :readonly="isReadonly" @input="HandleInput" /></h2>
            <p>內容: <textarea v-model="data.Content" :readonly="isReadonly" @input="HandleInput" /></p>

            <div class="toolbar" v-if="!isReadonly">
                <button @click="SaveTask">儲存</button>
                <button @click="DeleteTask">刪除</button>
            </div>
        </modal>
    </div>
</template>

<script>
    // 觀看/修改/刪除 一個task
    // task 包含 Title 還有 Content
    // 要能夠限定是否僅能觀看
    // 點一下卡片跳出編輯modal
    // 當內容有編輯，要提示user進行儲存

    export default {
        name: "Task",
        props:{
            value:{
                required: true,
                type: Object, // { Title: String, Content: String }
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
            taskIndex:{
                required: true,
                type: Number,
            },
        },
        data(){
            return {
                data: this.value,
                isNeedSave: false,
            }
        },
        watch:{
            value(newValue){
                this.data = newValue
            },
        },
        computed:{
            modalName:{
                get(){
                    return `edit-task-${this.listIndex}-${this.taskIndex}`
                }
            }
        },
        methods:{
            OpenModal(){
                if (this.isReadonly) {
                    return
                }
                this.$modal.show(this.modalName);
            },
            CloseModal(){
                this.$modal.hide(this.modalName);
            },
            HandleInput(){
                this.isNeedSave = true
            },
            SaveTask(){
                this.isNeedSave = false
                this.$emit("input", this.data)
                this.$emit("SaveTask")
            },
            DeleteTask(){
                this.$emit("DeleteTask",this.taskIndex)
            },
        },
    }
</script>

<style lang="scss" scoped>
    .Task{
        margin: 10px auto;
        margin-top: 15px;
        padding: 5px;
        border-radius: 5px;
        background: whitesmoke;

        &.alert .task-content{
            background: brown;
        }

        .task-content{
            border-radius: 5px;
        }
    } 
</style>
