import * as httpRequest from '~/utils/httpRequest';

const KEY = 'AIzaSyCJUlRtbO2uHmTc4FWhafdmJqNnbLRHZ3A';

export const watch = async (id, part = 'snippet,contentDetails,statistics') => {
    try {
        const res = await httpRequest.get('videos', {
            params: {
                id,
                part,
                key: KEY,
            },
        });
        return res.items;
    } catch (error) {
        console.log(error);
    }
};
