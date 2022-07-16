import transformSidebarReducer from './transformSidebar';
import showSidebarReducer from './showSidebar';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    transformSidebar: transformSidebarReducer,
    showSidebar: showSidebarReducer,
});

export default rootReducer;
