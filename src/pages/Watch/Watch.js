import classNames from 'classnames/bind';
import { useEffect, useState, useRef } from 'react';
import NumberFormat from 'react-number-format';
import Player from 'react-player/youtube';
import { Link, useSearchParams } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import Button from '~/components/Button';
import { CutIcon, DislikeIcon, LikeIcon, MenuIcon, SaveIcon, ShareIcon, TickIcon } from '~/components/Icons';
import Image from '~/components/Image';
import config from '~/config';
import * as channelService from '~/services/channelService';
import * as watchService from '~/services/watchService';
import CommentBlock from './components/CommentBlock';
import CommentList from './components/CommentList';
import RelatedVideos from './components//RelatedVideos';
import ScrollCategory from './components/ScrollCategory';
import styles from './Watch.module.scss';

const cx = classNames.bind(styles);

function Watch() {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [channel, setChannel] = useState('');
    const [descFullContent, setDescFullContent] = useState(false);
    const [resizeWidth, setResizeWidth] = useState(window.innerWidth);
    // eslint-disable-next-line no-unused-vars
    const [idVideo, setIdVideo] = useSearchParams();
    const idVideoValue = idVideo.get('id');

    const descRef = useRef();

    useEffect(() => {
        const fetchApi = async () => {
            setLoading(true);

            const result = await watchService.watch(idVideoValue);
            setData(result[0]);
            setLoading(false);

            const getChannel = async () => {
                const channel = await channelService.channel(result[0].snippet.channelId);
                setChannel(channel);
            };

            getChannel();
        };

        fetchApi();
    }, [idVideoValue]);

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = data.snippet?.title || 'YouTube';
    }, [data]);

    useEffect(() => {
        const handleResize = () => {
            setResizeWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const numberFormat = (n) => {
        if (n < 1e3) return n;
        if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(0) + 'K';
        if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + 'M';
        if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + 'B';
        if (n >= 1e12) return +(n / 1e12).toFixed(1) + 'T';
    };

    const convertDesc = (text) => {
        if (!text) return;
        const urlRegex = /(https?:\/\/[^\s]+)/g;

        const uw = String.raw`[\p{Alphabetic}\p{Mark}\p{Decimal_Number}\p{Connector_Punctuation}\p{Join_Control}]`;
        const hashtagRegex = new RegExp(`(?<!${uw})#(${uw}+)(?!${uw})`, 'gu');

        const wrapUrlText = text.replace(urlRegex, function (url) {
            return '<a target="_blank" href="' + url + '">' + url + '</a>';
        });

        const output = wrapUrlText.replace(hashtagRegex, function (hashtag) {
            return `<span>${hashtag}</span>`;
        });

        return output;
    };

    useEffect(() => {
        descRef.current.innerHTML = convertDesc(data.snippet?.description);
    }, [data]);

    const handleShowDesc = () => {
        setDescFullContent(!descFullContent);
    };

    return (
        <div className={cx('grid', { wide: resizeWidth >= 1024 })}>
            {loading && <div className={cx('loading')}></div>}
            <div className={cx('row', { 'no-gutters': resizeWidth < 1024 })}>
                <div className={cx('col', 'l-8', 'm-12', 'c-12')}>
                    <div className={cx('primary')}>
                        <Player
                            width="100%"
                            className={cx('player')}
                            url={`https://www.youtube.com/watch?v=${idVideoValue}`}
                            playing={true}
                            muted={true}
                            controls={true}
                        />

                        <div className={cx('info')}>
                            {/* <h4 className={cx('rating')}>#1 On Trending For Music</h4> */}
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
                                    <Button className={cx('action-btn', 'm-display-none')} leftIcon={<CutIcon />}>
                                        Clip
                                    </Button>
                                    <Button className={cx('action-btn')} leftIcon={<SaveIcon />}>
                                        Save
                                    </Button>
                                    <span className={cx('menu-btn', 'm-display-none')}>
                                        <MenuIcon />
                                    </span>
                                </div>
                            </footer>
                        </div>

                        <div className={cx('video-content')}>
                            <div className={cx('channel')}>
                                <div className={cx('owner')}>
                                    {channel && (
                                        <Link className={cx('avatar-link')} to={config.routes.profile}>
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
                                                <Tippy content={`${data.snippet?.channelTitle}`}>
                                                    <span>{data.snippet?.channelTitle}</span>
                                                </Tippy>
                                            </Link>
                                            <span className={cx('icon')}>
                                                <TickIcon width="1.4rem" height="1.4rem" />
                                            </span>
                                        </h4>

                                        {channel.statistics?.hiddenSubscriberCount || (
                                            <p className={cx('subs')}>
                                                {numberFormat(channel.statistics?.subscriberCount)} subscribers
                                            </p>
                                        )}
                                    </div>
                                </div>
                                <Button className={cx('subscribe-btn')} subscribe>
                                    Subscribe
                                </Button>
                            </div>
                            <div className={cx('desc')}>
                                <p
                                    ref={descRef}
                                    className={cx('desc-content', {
                                        'desc-full-content': descFullContent,
                                    })}
                                >
                                    {/* Inner HTML */}
                                </p>
                                <Button className={cx('show-more-btn')} onClick={handleShowDesc}>
                                    {descFullContent ? 'Show Less' : 'Show More'}
                                </Button>
                            </div>
                        </div>

                        <CommentBlock data={data} />

                        <CommentList idVideoValue={idVideoValue} />
                    </div>
                </div>
                <div className={cx('col', 'l-4', 'm-0', 'c-0')}>
                    <div className={cx('secondary')}>
                        <span className={cx('button-top')}>Show Chat Replay</span>

                        <ScrollCategory />

                        <RelatedVideos />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Watch;
