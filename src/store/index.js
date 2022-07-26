// 全局store配置
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

// redux-devtools 配置
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
    // 使用中间件 thunk
    applyMiddleware(thunk)
);
// 省略第二个参数preloadedState，直接设置第三个参数composeEnhancers(用于添加中间件)
const store = createStore(reducer, enhancer);

export default store;