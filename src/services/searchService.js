import * as httpRequest from '~/utils/httpRequest';

const KEY = 'AIzaSyDfeGpdmR-o_qfGdNcUHKZfzckhWK8HdAc';

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
