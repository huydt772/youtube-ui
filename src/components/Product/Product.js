import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import moment from 'moment';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import { MenuIcon, TickIcon } from '~/components/Icons';
import Image from '~/components/Image';
import config from '~/config';
import * as channelService from '~/services/channelService';
import * as watchService from '~/services/watchService';
import styles from './Product.module.scss';

const cx = classNames.bind(styles);

function Product({ data, explorePage = false, searchPage = false, watchPage = false }) {
    const navigate = useNavigate();
    const [avatar, setAvatar] = useState('');
    const [watchData, setWatchData] = useState({});

    useEffect(() => {
        if (watchPage || explorePage) return;

        const fetchApi = async () => {
            const res = await channelService.channel(data.snippet.channelId);
            setAvatar(res.snippet.thumbnails.default.url);
        };

        fetchApi();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);

    useEffect(() => {
        if (!searchPage) return;

        const fetchApi = async () => {
            const res = await watchService.watch(data.id.videoId);
            setWatchData(res[0]);
        };

        fetchApi();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);

    const convertTime = (duration) => {
        let match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
        // eslint-disable-next-line array-callback-return
        match = match.slice(1).map((x) => {
            if (x != null) {
                return x.replace(/\D/, '');
            }
        });
        const hours = parseInt(match[0]) || 0;
        const minutes = parseInt(match[1]) || 0;
        const seconds = parseInt(match[2]) || 0;

        const checkHours = (hours) => {
            return hours > 0 ? `${hours}:` : '';
        };

        const checkMinutes = (minutes) => {
            return minutes;
        };

        const checkSecond = (seconds) => {
            return seconds >= 10 ? seconds : `0${seconds}`;
        };

        return `${checkHours(hours)}${checkMinutes(minutes)}:${checkSecond(seconds)}`;
    };

    const viewsFormat = (n) => {
        if (n < 1e3) return n;
        if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(0) + 'K';
        if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + 'M';
        if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + 'B';
        if (n >= 1e12) return +(n / 1e12).toFixed(1) + 'T';
    };

    const formatDate = (date) => {
        if (!date) return;

        const publishedAt = moment(date).fromNow();
        return publishedAt;
    };

    function convertHTMLEntity(text) {
        const span = document.createElement('span');

        return text.replace(/&[#A-Za-z0-9]+;/gi, (entity, position, text) => {
            span.innerHTML = entity;
            return span.innerText;
        });
    }

    const configRoute = () => {
        let id;

        if (searchPage) {
            id = data.id.videoId;
        } else {
            id = data.id;
        }

        return `${config.routes.watch}?id=${id}`;
    };

    const handleNavigate = () => {
        navigate(configRoute());
    };

    const renderTime = () => {
        if (data.contentDetails?.duration) {
            return convertTime(data.contentDetails.duration);
        } else if (watchData.contentDetails?.duration) {
            return convertTime(watchData.contentDetails.duration);
        }
    };

    return (
        <div
            className={cx('wrapper', {
                'explore-wrapper': explorePage,
                'search-wrapper': searchPage,
                'watch-wrapper': watchPage,
            })}
            onClick={handleNavigate}
        >
            <div className={cx('wrap-thumbnail')}>
                <Image
                    className={cx('thumbnail')}
                    src={data.snippet.thumbnails.medium.url}
                    alt={convertHTMLEntity(data.snippet.title)}
                />
                <span className={cx('time')}>{renderTime()}</span>
            </div>

            <div className={cx('body')}>
                {searchPage || explorePage || watchPage || (
                    <Link
                        to={config.routes.profile}
                        className={cx('avatar-link')}
                        title={`${data.snippet.channelTitle}`}
                    >
                        {avatar && <Image className={cx('avatar')} src={avatar} alt={data.snippet.channelTitle} />}
                    </Link>
                )}

                <div className={cx('info')}>
                    <div className={cx('wrap-title')}>
                        <h3 className={cx('title')} title={`${convertHTMLEntity(data.snippet.title)}`}>
                            {convertHTMLEntity(data.snippet.title)}
                        </h3>
                        <span className={cx('menu-icon')}>
                            <MenuIcon />
                        </span>
                    </div>

                    {searchPage || (
                        <div className={cx('wrap-name')}>
                            <Tippy content={`${data.snippet.channelTitle}`}>
                                <Link to={config.routes.profile} className={cx('name')}>
                                    {data.snippet.channelTitle}
                                </Link>
                            </Tippy>
                            <TickIcon className={cx('tick-icon')} width="1.4rem" height="1.4rem" />
                        </div>
                    )}

                    <div className={cx('wrap-views')}>
                        <p className={cx('views')}>
                            {viewsFormat(data.statistics?.viewCount || watchData.statistics?.viewCount)} views
                        </p>
                        <p>{formatDate(data.snippet.publishedAt)}</p>
                    </div>

                    {searchPage && (
                        <div className={cx('wrap-avatar')}>
                            <Link to={config.routes.profile} className={cx('avatar-link')}>
                                {avatar && (
                                    <Image className={cx('avatar')} src={avatar} alt={data.snippet.channelTitle} />
                                )}
                            </Link>
                            <div className={cx('wrap-name')}>
                                <Tippy content={`${data.snippet.channelTitle}`}>
                                    <Link to={config.routes.profile} className={cx('name')}>
                                        {data.snippet.channelTitle}
                                    </Link>
                                </Tippy>

                                <TickIcon className={cx('tick-icon')} width="1.4rem" height="1.4rem" />
                            </div>
                        </div>
                    )}

                    {(explorePage || searchPage) && (
                        <Tippy content="From the video description" placement="bottom">
                            <p className={cx('desc')}>{data.snippet.description}</p>
                        </Tippy>
                    )}
                </div>
            </div>
        </div>
    );
}

Product.propTypes = {
    data: PropTypes.object.isRequired,
    explorePage: PropTypes.bool,
    searchPage: PropTypes.bool,
    watchPage: PropTypes.bool,
};

export default Product;
