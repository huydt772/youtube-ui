import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { useRef, useState, memo } from 'react';
import NumberFormat from 'react-number-format';

import Button from '~/components/Button';
import { SortIcon } from '~/components/Icons';
import Image from '~/components/Image';
import styles from './CommentBlock.module.scss';

const cx = classNames.bind(styles);

function CommentBlock({ data }) {
    const [commentText, setCommentText] = useState('');
    const [inputFocus, setInputFocus] = useState(false);

    const inputRef = useRef();

    const handleChangeComment = (e) => {
        const comment = e.target.value;
        setCommentText(comment);
    };

    const handleInputFocus = () => {
        setInputFocus(true);
    };

    const handleCancelComment = () => {
        setCommentText('');
        setInputFocus(false);
    };
    return (
        <div className={cx('comment-block')}>
            <header className={cx('header')}>
                <div className={cx('wrap-comment-count')}>
                    <NumberFormat
                        value={data.statistics?.commentCount}
                        className={cx('comment-count')}
                        displayType={'text'}
                        thousandSeparator={true}
                        suffix={' Comments'}
                        renderText={(value, props) => <div {...props}>{value}</div>}
                    />

                    <Button className={cx('sort-by-btn')} leftIcon={<SortIcon />}>
                        Sort By
                    </Button>
                </div>
                <div className={cx('write-comment-block')}>
                    <div className={cx('wrap-input')}>
                        <Image
                            className={cx('user')}
                            src="https://avatars.githubusercontent.com/u/92105558?v=4"
                            alt="Huy Nguyễn"
                        />
                        <input
                            ref={inputRef}
                            value={commentText}
                            className={cx('input')}
                            type="text"
                            placeholder="Add a comment..."
                            onChange={handleChangeComment}
                            onFocus={handleInputFocus}
                        />
                    </div>
                    {inputFocus && (
                        <div className={cx('comment-actions')}>
                            <Button className={cx('comment-actions-btn')} onClick={handleCancelComment}>
                                Cancel
                            </Button>
                            <Button
                                className={cx('comment-actions-btn', 'comment-btn-disabled', {
                                    'comment-btn-primary': commentText,
                                })}
                            >
                                Comment
                            </Button>
                        </div>
                    )}
                </div>
            </header>
        </div>
    );
}

CommentBlock.propTypes = {
    data: PropTypes.object.isRequired,
};

export default memo(CommentBlock);
