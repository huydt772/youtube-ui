import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';

import config from '~/config';
import Button from '~/components/Button';
import Image from '~/components/Image';
import * as channelService from '~/services/channelService';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Channel({ data }) {
    const [channel, setChannel] = useState({});

    useEffect(() => {
        const fetchApi = async () => {
            const result = await channelService.channel(data.snippet.channelId);
            setChannel(result);
        };

        fetchApi();
    }, [data]);

    const subsFormat = (n) => {
        if (n < 1e3) return n;
        if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(0) + 'K';
        if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + 'M';
        if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + 'B';
        if (n >= 1e12) return +(n / 1e12).toFixed(1) + 'T';
    };

    return (
        <div className={cx('channel')}>
            <Link to={config.routes.profile} className={cx('wrap-channel-img')}>
                <Image
                    className={cx('channel-img')}
                    src={data.snippet.thumbnails.medium.url}
                    alt={data.snippet.channelTitle}
                />
            </Link>
            <Link to={config.routes.profile} className={cx('channel-info')}>
                <Tippy content={`${data.snippet.channelTitle}`} placement="top-start">
                    <h3 className={cx('channel-title')}>{data.snippet.channelTitle}</h3>
                </Tippy>
                <div className={cx('channel-quantities')}>
                    {channel.statistics?.hiddenSubscriberCount || (
                        <p className={cx('subs-count')}>
                            {subsFormat(channel.statistics?.subscriberCount)} subscribers
                        </p>
                    )}
                    <p className={cx('video-count')}>{channel.statistics?.videoCount} videos</p>
                </div>
                <p>{data.snippet.description}</p>
            </Link>
            <div className={cx('channel-actions')}>
                <Button subscribe>Subscribe</Button>
            </div>
        </div>
    );
}

Channel.propTypes = {
    data: PropTypes.object.isRequired,
};

export default Channel;
