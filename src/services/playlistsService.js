import * as httpRequest from '~/utils/httpRequest';

const KEY = 'AIzaSyCJUlRtbO2uHmTc4FWhafdmJqNnbLRHZ3A';

export const playlists = async (id, part = 'contentDetails') => {
    try {
        const res = await httpRequest.get('playlists', {
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
