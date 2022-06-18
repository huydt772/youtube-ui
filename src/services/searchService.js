import * as httpRequest from '~/utils/httpRequest';

const KEY = 'AIzaSyAwW14B-rUwNkw1J0ucBTDkj2w47LLqCu8';

export const search = async (q, part = 'snippet', maxResults = 25) => {
    try {
        const res = await httpRequest.get('search', {
            params: {
                q,
                part,
                maxResults,
                key: KEY,
            },
        });
        return res.items;
    } catch (error) {
        console.log(error);
    }
};
