export default {
    namespaced: true,
    state: {
        boardData:{
            Todo:[],
            Done:[]
        }
    },
    mutations: {
        SetBoardData(state, boardData){
            state.boardData = boardData
        }
    },
    actions: {

    }
}
