'use strict'

function GetURL(path){
    return process.env.VUE_APP_ROUTE_PREFIX + path
}

export {
    GetURL
}