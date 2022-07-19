import classNames from 'classnames/bind';
import moment from 'moment';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import ReplyItem from './ReplyItem';
import Button from '~/components/Button';
import {
    ArrowDownSolidIcon,
    ArrowUpSolidIcon,
    CommentDislikeIcon,
    CommentLikeIcon,
    MenuIcon,
} from '~/components/Icons';
import Image from '~/components/Image';
import config from '~/config';
import styles from './CommentItem.module.scss';

const cx = classNames.bind(styles);

function CommentItem({ data }) {
    const [cmtFullContent, setCmtFullContent] = useState(false);
    const [showReplies, setShowReplies] = useState(false);

    const commentData = data.snippet.topLevelComment.snippet;
    const repliesData = data.replies;
    const lineOfComment = commentData.textDisplay.split(/\r\n|\r|\n/).length;

    const formatDate = (date) => {
        const updateAt = moment(date).fromNow();
        return updateAt;
    };

    const handleShowFullComment = () => {
        setCmtFullContent(!cmtFullContent);
    };

    const handleShowReplies = () => {
        setShowReplies(!showReplies);
    };

    const numberFormat = (n) => {
        if (n < 1e3) return n;
        if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(0) + 'K';
        if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + 'M';
        if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + 'B';
        if (n >= 1e12) return +(n / 1e12).toFixed(1) + 'T';
    };

    return (
        <div className={cx('comment')}>
            <Link to={config.routes.profile} className={cx('comment-avatar-link')}>
                <Image
                    className={cx('comment-avatar')}
                    src={commentData.authorProfileImageUrl}
                    alt={commentData.authorDisplayName}
                />
            </Link>

            <div className={cx('comment-info')}>
                <div className={cx('comment-wrap-name')}>
                    <Link to={config.routes.profile} className={cx('comment-name')}>
                        {commentData.authorDisplayName}
                    </Link>
                    <span className={cx('comment-time')}>{formatDate(commentData.updatedAt)}</span>
                </div>
                <p
                    className={cx('comment-desc', {
                        'comment-full-content': cmtFullContent,
                    })}
                >
                    {commentData.textDisplay}
                </p>
                {lineOfComment > 4 && (
                    <div className={cx('comment-read-more-btn')}>
                        <span className={cx('comment-read-more-text')} onClick={handleShowFullComment}>
                            {cmtFullContent ? 'Show less' : 'Read more'}
                        </span>
                    </div>
                )}

                <div className={cx('comment-btn-list')}>
                    <Button className={cx('comment-like-btn')} leftIcon={<CommentLikeIcon />}>
                        {numberFormat(commentData.likeCount)}
                    </Button>
                    <span className={cx('comment-dislike-btn')}>
                        <CommentDislikeIcon />
                    </span>
                    <Button className={cx('comment-reply-btn')}>Reply</Button>
                </div>

                {repliesData && (
                    <h4 className={cx('comment-replies-text')}>
                        <div className={cx('comment-replies-btn')} onClick={handleShowReplies}>
                            <span className={cx('comment-replies-icon')}>
                                {showReplies ? <ArrowUpSolidIcon /> : <ArrowDownSolidIcon />}
                            </span>
                            <p className={cx('comment-replies-title')}>
                                {showReplies ? 'Hide' : 'View'} {repliesData.comments.length} replies
                            </p>
                        </div>
                    </h4>
                )}

                {repliesData && showReplies && (
                    <div className="comment-replies">
                        {repliesData.comments.map((reply) => {
                            return <ReplyItem key={reply.id} reply={reply} />;
                        })}
                    </div>
                )}
            </div>
            <span className={cx('comment-menu-btn')}>
                <MenuIcon />
            </span>
        </div>
    );
}

CommentItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default CommentItem;
