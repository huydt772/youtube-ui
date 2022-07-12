import PropTypes from 'prop-types';
import { memo, useEffect, useState } from 'react';

import CommentItem from '../CommentItem';
import * as commentService from '~/services/commentService';

function CommentList({ idVideoValue }) {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const getComment = async () => {
            const result = await commentService.comment(idVideoValue);
            setComments(result);
        };

        getComment();
    }, [idVideoValue]);

    return (
        <>
            {comments.map((comment, index) => {
                return <CommentItem key={index} data={comment} />;
            })}
        </>
    );
}

CommentList.propTypes = {
    idVideoValue: PropTypes.string.isRequired,
};

export default memo(CommentList);
