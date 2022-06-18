import * as httpRequest from '~/utils/httpRequest';

const KEY = 'AIzaSyAwW14B-rUwNkw1J0ucBTDkj2w47LLqCu8';

export const channel = async (
    id,
    part = 'snippet',
    fields = 'items/snippet/thumbnails',
) => {
    try {
        const res = await httpRequest.get('channels', {
            params: {
                part,
                fields,
                id,
                key: KEY,
            },
        });
        return res.items[0].snippet.thumbnails.default.url;
    } catch (error) {
        console.log(error);
    }
};
