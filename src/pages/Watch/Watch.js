import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import NumberFormat from 'react-number-format';
import Player from 'react-player';
import { Link, useSearchParams } from 'react-router-dom';

import Button from '~/components/Button';
import {
    ArrowLeftIcon,
    ArrowRightIcon,
    CommentDislikeIcon,
    CommentLikeIcon,
    CutIcon,
    DislikeIcon,
    LikeIcon,
    MenuIcon,
    SaveIcon,
    ShareIcon,
    SortIcon,
    TickIcon,
} from '~/components/Icons';
import Image from '~/components/Image';
import Product from '~/components/Product';
import config from '~/config';
import * as avatarService from '~/services/avatarService';
import * as commentService from '~/services/commentService';
import * as videoService from '~/services/videoService';
import * as watchService from '~/services/watchService';
import styles from './Watch.module.scss';

const SCROLL_DATA = [
    {
        id: 1,
        title: 'All',
    },
    {
        id: 2,
        title: 'Mixes',
    },
    {
        id: 3,
        title: 'Music',
    },
    {
        id: 4,
        title: 'Hương Ly',
    },
    {
        id: 5,
        title: 'FAP TV',
    },
    {
        id: 6,
        title: 'Gaming',
    },
    {
        id: 7,
        title: 'Live',
    },
    {
        id: 8,
        title: 'MixiGaming',
    },
    {
        id: 9,
        title: 'Sao nhập ngũ',
    },
    {
        id: 10,
        title: 'Watched',
    },
    {
        id: 11,
        title: 'Game shows',
    },
    {
        id: 12,
        title: 'JavaScript',
    },
    {
        id: 13,
        title: 'Lo-fi',
    },
    {
        id: 14,
        title: 'Pop Music',
    },
];

const cx = classNames.bind(styles);

function Watch() {
    const [data, setData] = useState({});
    const [channel, setChannel] = useState('');
    const [commentText, setCommentText] = useState('');
    const [comments, setComments] = useState([]);
    const [relatedData, setRelatedData] = useState([]);
    const [inputFocus, setInputFocus] = useState(false);
    const [descFullContent, setDescFullContent] = useState(false);
    // eslint-disable-next-line no-unused-vars
    const [idVideo, setIdVideo] = useSearchParams();
    const idVideoValue = idVideo.get('id');

    const inputRef = useRef();

    useEffect(() => {
        const fetchApi = async () => {
            const result = await watchService.watch(idVideoValue);
            setData(result[0]);

            const getAvatar = async () => {
                const channel = await avatarService.avatar(result[0].snippet.channelId);
                setChannel(channel);
            };

            getAvatar();
        };

        fetchApi();
    }, [idVideoValue]);

    useEffect(() => {
        const getComment = async () => {
            const result = await commentService.comment(idVideoValue);
            setComments(result);
        };

        getComment();
    }, [idVideoValue]);

    useEffect(() => {
        const fetchApi = async () => {
            const relatedVideo = await videoService.video('mostPopular');
            setRelatedData(relatedVideo);
        };

        fetchApi();
    }, []);

    useEffect(() => {
        document.title = data.snippet?.title || 'YouTube';
    }, [data]);

    const numberFormat = (n) => {
        if (n < 1e3) return n;
        if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(0) + 'K';
        if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + 'M';
        if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + 'B';
        if (n >= 1e12) return +(n / 1e12).toFixed(1) + 'T';
    };

    const handleShowDesc = () => {
        setDescFullContent(!descFullContent);
    };

    const handleCancelComment = () => {
        setCommentText('');
        setInputFocus(false);
    };

    const handleChangeComment = (e) => {
        const comment = e.target.value;
        setCommentText(comment);
    };

    const handleInputFocus = () => {
        setInputFocus(true);
    };

    return (
        <div>
            <div className={cx('grid', 'wide')}>
                <div className={cx('row')}>
                    <div className={cx('col', 'l-8')}>
                        <div className={cx('primary')}>
                            <Player
                                width="100%"
                                height="432px"
                                url={`https://www.youtube.com/watch?v=${idVideoValue}`}
                                playing={true}
                                muted={true}
                                controls={true}
                            />

                            <div className={cx('info')}>
                                <h4 className={cx('rating')}>#1 On Trending For Music</h4>
                                <h3 className={cx('title')}>{data.snippet?.title}</h3>
                                <footer className={cx('footer')}>
                                    <NumberFormat
                                        value={data.statistics?.viewCount}
                                        className={cx('views')}
                                        displayType={'text'}
                                        thousandSeparator={true}
                                        suffix={' views...'}
                                        renderText={(value, props) => <p {...props}>{value}</p>}
                                    />
                                    <div className={cx('actions')}>
                                        <Button className={cx('action-btn')} leftIcon={<LikeIcon />}>
                                            {numberFormat(data.statistics?.likeCount) || ''}
                                        </Button>
                                        <Button className={cx('action-btn')} leftIcon={<DislikeIcon />}>
                                            Dislike
                                        </Button>
                                        <Button className={cx('action-btn')} leftIcon={<ShareIcon />}>
                                            Share
                                        </Button>
                                        <Button className={cx('action-btn')} leftIcon={<CutIcon />}>
                                            Clip
                                        </Button>
                                        <Button className={cx('action-btn')} leftIcon={<SaveIcon />}>
                                            Save
                                        </Button>
                                        <span className={cx('menu-btn')}>
                                            <MenuIcon />
                                        </span>
                                    </div>
                                </footer>
                            </div>

                            <div className={cx('video-content')}>
                                <div className={cx('channel')}>
                                    <div className={cx('owner')}>
                                        {channel && (
                                            <Link to={config.routes.profile}>
                                                <Image
                                                    className={cx('avatar')}
                                                    src={channel.snippet.thumbnails.default.url}
                                                    alt={data.snippet?.channelTitle}
                                                />
                                            </Link>
                                        )}
                                        <div>
                                            <h4 className={cx('name')}>
                                                <Link to={config.routes.profile}>
                                                    <span>{data.snippet?.channelTitle}</span>
                                                </Link>
                                                <span className={cx('icon')}>
                                                    <TickIcon width="1.4rem" height="1.4rem" />
                                                </span>
                                            </h4>

                                            <p className={cx('subs')}>
                                                {numberFormat(channel.statistics?.subscriberCount)} subscribers
                                            </p>
                                        </div>
                                    </div>
                                    <Button className={cx('subscribe-btn')} subscribe>
                                        Subscribe
                                    </Button>
                                </div>
                                <div className={cx('desc')}>
                                    <p
                                        className={cx('desc-content', {
                                            'desc-full-content': descFullContent,
                                        })}
                                    >
                                        {data.snippet?.description}
                                    </p>
                                    <Button className={cx('show-more-btn')} onClick={handleShowDesc}>
                                        {descFullContent ? 'Show Less' : 'Show More'}
                                    </Button>
                                </div>
                            </div>

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
                                                src="https://yt3.ggpht.com/yti/APfAmoEiqTDD0tVCf541rMgwlZ_uCo4BRuFg7xflPOfAEw=s48-c-k-c0x00ffffff-no-rj"
                                                alt="HMonster"
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
                                                <Button
                                                    className={cx('comment-actions-btn')}
                                                    onClick={handleCancelComment}
                                                >
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

                            {comments.map((comment, index) => {
                                const commentData = comment.snippet.topLevelComment.snippet;

                                return (
                                    <div key={index} className={cx('comment')}>
                                        {commentData.authorProfileImageUrl && (
                                            <Link to={config.routes.profile} className={cx('comment-avatar-link')}>
                                                <Image
                                                    className={cx('comment-avatar')}
                                                    src={commentData.authorProfileImageUrl}
                                                    alt={commentData.authorDisplayName}
                                                />
                                            </Link>
                                        )}
                                        <div className={cx('comment-info')}>
                                            <div className={cx('comment-wrap-name')}>
                                                <Link to={config.routes.profile} className={cx('comment-name')}>
                                                    {commentData.authorDisplayName}
                                                </Link>
                                                <span className={cx('comment-time')}>5 days ago</span>
                                            </div>
                                            <p className={cx('comment-desc')}>{commentData.textDisplay}</p>

                                            <div className={cx('comment-btn-list')}>
                                                <Button
                                                    className={cx('comment-like-btn')}
                                                    leftIcon={<CommentLikeIcon />}
                                                >
                                                    {commentData.likeCount}
                                                </Button>
                                                <span className={cx('comment-dislike-btn')}>
                                                    <CommentDislikeIcon />
                                                </span>
                                                <Button className={cx('comment-reply-btn')}>Reply</Button>
                                            </div>
                                        </div>
                                        <span className={cx('comment-menu-btn')}>
                                            <MenuIcon />
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className={cx('col', 'l-4')}>
                        <div className={cx('secondary')}>
                            <span className={cx('button-top')}>Show Chat Replay</span>
                            <div className={cx('scroll-category')}>
                                <div className={cx('arrow-left-btn')}>
                                    <ArrowLeftIcon className={cx('arrow-icon')} />
                                </div>
                                <div className={cx('scroll-item')}>
                                    {SCROLL_DATA.map((item) => (
                                        <Button key={item.id} rounded small>
                                            {item.title}
                                        </Button>
                                    ))}
                                </div>
                                <div className={cx('arrow-right-btn')}>
                                    <ArrowRightIcon className={cx('arrow-icon')} />
                                </div>
                            </div>

                            <div className={cx('related-product')}>
                                <div className={cx('grid')}>
                                    <div className={cx('row', 'no-gutters')}>
                                        {relatedData.map((item) => (
                                            <div key={item.id} className={cx('col', 'l-12', 'm-0', 'c-0')}>
                                                <Product data={item} watchPage />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Watch;
