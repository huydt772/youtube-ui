import * as httpRequest from '~/utils/httpRequest';

const KEY = 'AIzaSyAjNYNCbUoaS29j72TI3Yla7y1xff-cYGE';

export const comment = async (videoId, part = 'snippet,replies', maxResults = 50, textFormat = 'plainText') => {
    try {
        const res = await httpRequest.get('commentThreads', {
            params: {
                videoId,
                part,
                maxResults,
                textFormat,
                key: KEY,
            },
        });
        return res.items;
    } catch (error) {
        console.log(error);
    }
};
