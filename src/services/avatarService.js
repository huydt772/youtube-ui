import * as httpRequest from '~/utils/httpRequest';

const KEY = 'AIzaSyAjNYNCbUoaS29j72TI3Yla7y1xff-cYGE';

export const avatar = async (
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
