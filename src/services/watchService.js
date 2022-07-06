import * as httpRequest from '~/utils/httpRequest';

const KEY = 'AIzaSyAwW14B-rUwNkw1J0ucBTDkj2w47LLqCu8';

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
