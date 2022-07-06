import * as httpRequest from '~/utils/httpRequest';

const KEY = 'AIzaSyAwW14B-rUwNkw1J0ucBTDkj2w47LLqCu8';

export const comment = async (videoId, part = 'snippet,replies', maxResults = 20, textFormat = 'plainText') => {
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
