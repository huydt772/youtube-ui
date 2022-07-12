import classNames from 'classnames/bind';
import moment from 'moment';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import Button from '~/components/Button';
import { CommentDislikeIcon, CommentLikeIcon, MenuIcon } from '~/components/Icons';
import Image from '~/components/Image';
import config from '~/config';
import styles from './CommentItem.module.scss';

const cx = classNames.bind(styles);

function ReplyItem({ reply }) {
    const [cmtFullContent, setCmtFullContent] = useState(false);

    const lineOfReply = reply.snippet.textDisplay.split(/\r\n|\r|\n/).length;

    const formatDate = (date) => {
        const updateAt = moment(date).fromNow();
        return updateAt;
    };

    const numberFormat = (n) => {
        if (n < 1e3) return n;
        if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(0) + 'K';
        if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + 'M';
        if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + 'B';
        if (n >= 1e12) return +(n / 1e12).toFixed(1) + 'T';
    };

    const handleShowFullComment = () => {
        setCmtFullContent(!cmtFullContent);
    };

    return (
        <div className={cx('reply-block')}>
            <Link to={config.routes.profile} className={cx('reply-avatar-link')}>
                <Image
                    className={cx('comment-avatar')}
                    src={reply.snippet.authorProfileImageUrl}
                    alt={reply.snippet.authorDisplayName}
                />
            </Link>

            <div className={cx('reply-info')}>
                <div className={cx('comment-wrap-name')}>
                    <Link to={config.routes.profile} className={cx('comment-name')}>
                        {reply.snippet.authorDisplayName}
                    </Link>
                    <span className={cx('comment-time')}>{formatDate(reply.snippet.publishedAt)}</span>
                </div>
                <p
                    className={cx('comment-desc', {
                        'comment-full-content': cmtFullContent,
                    })}
                >
                    {reply.snippet.textDisplay}
                </p>
                {lineOfReply > 4 && (
                    <div className={cx('comment-read-more-btn')}>
                        <span className={cx('comment-read-more-text')} onClick={handleShowFullComment}>
                            {cmtFullContent ? 'Show less' : 'Read more'}
                        </span>
                    </div>
                )}

                <div className={cx('comment-btn-list')}>
                    <Button className={cx('comment-like-btn')} leftIcon={<CommentLikeIcon />}>
                        {numberFormat(reply.snippet.likeCount)}
                    </Button>
                    <span className={cx('comment-dislike-btn')}>
                        <CommentDislikeIcon />
                    </span>
                    <Button className={cx('comment-reply-btn')}>Reply</Button>
                </div>
            </div>

            <span className={cx('reply-menu-btn')}>
                <MenuIcon />
            </span>
        </div>
    );
}

ReplyItem.propTypes = {
    reply: PropTypes.object.isRequired,
};

export default ReplyItem;
