import * as httpRequest from '~/utils/httpRequest';

const KEY = 'AIzaSyAjNYNCbUoaS29j72TI3Yla7y1xff-cYGE';

export const avatar = async (id, part = 'snippet,contentDetails,statistics') => {
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