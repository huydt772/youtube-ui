import { TRANSFORM_SIDEBAR } from '../constants/transformSidebar';

const initialState = false;

const transformSidebarReducer = (state = initialState, action) => {
    switch (action.type) {
        case TRANSFORM_SIDEBAR:
            return !state;
        default:
            return state;
    }
};

export default transformSidebarReducer;
