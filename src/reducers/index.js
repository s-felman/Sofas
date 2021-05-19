import {combineReducers} from "redux"

const changeNumber=(num=0, action)=>{
    if(action.type==='NUMBER_MINUS')
    return action.payloud
    if(action.type==='NUMBER_PLUS')
    return action.payloud
    return num
}

export default combineReducers({
    number: changeNumber
})