import * as httpRequest from '~/utils/httpRequest';

const KEY = 'AIzaSyAjNYNCbUoaS29j72TI3Yla7y1xff-cYGE';

export const video = async (
    chart,
    part = 'snippet,contentDetails,statistics',
    maxResults = 50,
    regionCode = 'VN',
) => {
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
