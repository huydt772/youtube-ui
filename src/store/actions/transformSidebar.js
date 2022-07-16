import { TRANSFORM_SIDEBAR } from '../constants/transformSidebar';

export const transformSidebar = (payload) => {
    return {
        type: TRANSFORM_SIDEBAR,
        payload,
    };
};
