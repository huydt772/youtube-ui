import * as httpRequest from '~/utils/httpRequest';

const KEY = 'AIzaSyAwW14B-rUwNkw1J0ucBTDkj2w47LLqCu8';

export const video = async (chart, part = 'snippet,contentDetails,statistics', maxResults = 50, regionCode = 'VN') => {
    try {
        const res = await httpRequest.get('videos', {
            params: {
                chart,
                part,
                maxResults,
                regionCode,
                key: KEY,
            },
        });
        return res.items;
    } catch (error) {
        console.log(error);
    }
};
