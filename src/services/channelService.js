import * as httpRequest from '~/utils/httpRequest';

const KEY = process.env.REACT_APP_API_KEY;

export const channel = async (id, part = 'snippet,contentDetails,statistics') => {
    try {
        const res = await httpRequest.get('channels', {
            params: {
                part,
                id,
                key: KEY,
            },
        });
        return res.items[0];
    } catch (error) {
        console.log(error);
    }
};
