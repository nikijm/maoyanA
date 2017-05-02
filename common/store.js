
import {createStore,combineReducers} from "redux";


const initModel = {
    addVisible:false,
    updateVisible:false
}
const ModelReducer = function(state = initModel,action){
    if(action.type == "SHOW_ADD_MODAL_FM"){
        var newState = Object.assign({},state,{addVisible:action.addVisible});
        return newState
    }else if(action.type == "SHOW_UPDATE_MODAL_FM"){
        var newState = Object.assign({},state,{updateVisible:action.updateVisible});
        return newState;
    }

    return state;
}

const initFilm = {
    film:{},
    data:{}
}
const filmReducer = function(state = initFilm,action){
    if(action.type == "SHOW_ALL_FILM_MF"){
        var newState = Object.assign({},state,{data:action.data});
        return newState;
    }
    if(action.type == "SHOW_FILM_MF"){
        var newState = Object.assign({},state,{film:action.film});
        return newState;
    }
 
    return state
}

//组合reducer
const reducers = combineReducers({
    filmReducer:filmReducer,
    ModelReducer:ModelReducer
  
});

export default createStore(reducers);
