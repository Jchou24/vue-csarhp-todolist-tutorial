'use strict'

import axios from 'axios'

class APIHandler{
    constructor(options){
        let ax = this.GetAxios()
        this.ax = ax
    }

    GetAxios(){
        let ax = axios.create({
            baseURL: process.env.VUE_APP_SERVER_URL + "api/",
            timeout: process.env.VUE_APP_API_TIMEOUT,
        })

        ax.defaults.withCredentials = true

        return ax
    }

    GetBoardData(){
        return this.ax.get("Board/GetBoardData")
    }

    SaveBoardData(boardData){
        return this.ax.post("Board/SaveBoardData", boardData)
    }
}

export {
    APIHandler
} 