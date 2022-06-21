import * as httpRequest from '~/utils/httpRequest';

const KEY = 'AIzaSyDfeGpdmR-o_qfGdNcUHKZfzckhWK8HdAc';

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
