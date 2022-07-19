import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { memo, useEffect, useState } from 'react';

import CommentItem from '../CommentItem';
import * as commentService from '~/services/commentService';
import styles from './CommentList.module.scss';

const cx = classNames.bind(styles);

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
        <div className={cx('wrapper')}>
            {comments.map((comment) => {
                return <CommentItem key={comment.id} data={comment} />;
            })}
        </div>
    );
}

CommentList.propTypes = {
    idVideoValue: PropTypes.string.isRequired,
};

export default memo(CommentList);
