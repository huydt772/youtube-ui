import { SHOW_SIDEBAR } from '../constants/showSidebar';

const initialState = false;

const showSidebarReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_SIDEBAR:
            return !state;
        default:
            return state;
    }
};

export default showSidebarReducer;
