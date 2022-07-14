import * as httpRequest from '~/utils/httpRequest';

const KEY = process.env.REACT_APP_API_KEY;

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
