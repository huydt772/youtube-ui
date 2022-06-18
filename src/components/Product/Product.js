import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, TickIcon } from '~/components/Icons';
import Image from '~/components/Image';
import config from '~/config';
import * as channelService from '~/services/channelService';
import styles from './Product.module.scss';

const cx = classNames.bind(styles);

function Product({ data, explorePage = false, searchPage = false }) {
    const [avatar, setAvatar] = useState('');

    useEffect(() => {
        const fetchApi = async () => {
            const result = await channelService.channel(data.snippet.channelId);
            setAvatar(result);
        };

        fetchApi();
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

        const checkTime = (time) => {
            if (time < 10 && time > 0) {
                return `0${time}`;
            }
            return time;
        };

        const checkHours = (hours) => {
            if (hours === 0) {
                return '';
            } else {
                return `${hours}:`;
            }
        };

        const checkSeconds = (seconds) => {
            if (seconds === 0) {
                return `0${seconds}`;
            }
            return seconds;
        };

        return `${checkHours(hours)}${checkTime(minutes)}:${checkSeconds(
            checkTime(seconds),
        )}`;
    };

    const viewsFormat = (n) => {
        if (n < 1e3) return n;
        if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(0) + 'K';
        if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + 'M';
        if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + 'B';
        if (n >= 1e12) return +(n / 1e12).toFixed(1) + 'T';
    };

    return (
        <div
            className={cx('wrapper', {
                'explore-wrapper': explorePage,
                'search-wrapper': searchPage,
            })}
        >
            <div
                className={cx('wrap-thumbnail', {
                    'explore-wrap-thumbnail': explorePage,
                })}
            >
                <Image
                    className={cx('thumbnail')}
                    src={data.snippet.thumbnails.medium.url}
                    alt={data.snippet.title}
                />
                {searchPage || (
                    <span className={cx('time')}>
                        {convertTime(data.contentDetails.duration)}
                    </span>
                )}
            </div>

            <div className={cx('body')}>
                {searchPage || (
                    <Link
                        to={config.routes.profile}
                        className={cx('avatar-link', {
                            'explore-avatar-link': explorePage,
                        })}
                    >
                        {avatar && (
                            <Image
                                className={cx('avatar')}
                                src={avatar}
                                alt={data.snippet.channelTitle}
                            />
                        )}
                    </Link>
                )}

                <div
                    className={cx('info', {
                        'explore-info': explorePage,
                    })}
                >
                    <div className={cx('wrap-title')}>
                        <h3
                            className={cx('title', {
                                'explore-title': explorePage,
                            })}
                        >
                            {data.snippet.title}
                        </h3>
                        <span className={cx('menu-icon')}>
                            <MenuIcon />
                        </span>
                    </div>

                    {searchPage || (
                        <div
                            className={cx('wrap-name', {
                                'explore-wrap-name': explorePage,
                            })}
                        >
                            <p className={cx('name')}>{data.snippet.channelTitle}</p>
                            <TickIcon width="1.4rem" height="1.4rem" />
                        </div>
                    )}

                    {searchPage || (
                        <div
                            className={cx('wrap-view', {
                                'explore-wrap-view': explorePage,
                            })}
                        >
                            <p className={cx('view')}>
                                {viewsFormat(data.statistics.viewCount)} views
                            </p>
                            <p>4 days ago</p>
                        </div>
                    )}

                    {searchPage && (
                        <div className={cx('wrap-avatar')}>
                            <Link
                                to={config.routes.profile}
                                className={cx('avatar-link', {
                                    'explore-avatar-link': explorePage,
                                })}
                            >
                                {avatar && (
                                    <Image
                                        className={cx('avatar')}
                                        src={avatar}
                                        alt={data.snippet.channelTitle}
                                    />
                                )}
                            </Link>
                            <div
                                className={cx('wrap-name', {
                                    'explore-wrap-name': explorePage,
                                })}
                            >
                                <p className={cx('name')}>{data.snippet.channelTitle}</p>
                                <TickIcon width="1.4rem" height="1.4rem" />
                            </div>
                        </div>
                    )}

                    {(explorePage || searchPage) && (
                        <p className={cx('desc')}>{data.snippet.description}</p>
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
};

export default Product;
