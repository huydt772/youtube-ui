import * as httpRequest from '~/utils/httpRequest';

const KEY = process.env.REACT_APP_API_KEY;

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
