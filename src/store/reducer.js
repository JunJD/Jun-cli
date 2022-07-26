// 分模块Reducer
import { combineReducers } from 'redux-immutable';
import { reducer as homeReducer } from '../view/Home/store/index';
/*
1.combineReducers:把一个由多个不同 reducer 函数
    作为 value 的 object，合并成一个最终的 reducer 函数
2.合并后的 reducer 可以调用各个子 reducer
    并把它们返回的结果合并成一个 state 对象*/
const reducer = combineReducers({
    home: homeReducer
});

export default reducer;