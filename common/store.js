import {createStore,combineReducers} from "redux";
const student = {
    student:{},
    data:{}
}
const studentReducer = function(state = student,action){
    if(action.type == "SHOW_STUDENT"){
        var newState = Object.assign({},state,{student:action.student});
        return newState;
    }
    if(action.type == "SHOW_ALL_STUDENT"){
        var newState = Object.assign({},state,{data:action.data});
        return newState;
    }
    return state
}
