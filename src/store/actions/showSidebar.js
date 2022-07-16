import { SHOW_SIDEBAR } from '../constants/showSidebar';

export const showSidebar = (payload) => {
    return {
        type: SHOW_SIDEBAR,
        payload,
    };
};
