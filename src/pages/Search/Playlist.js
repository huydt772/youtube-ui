import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import 'tippy.js/dist/tippy.css';
import { useEffect, useState } from 'react';

import * as playlistsService from '~/services/playlistsService';
import Button from '~/components/Button';
import { PlayIcon, PlaylistIcon } from '~/components/Icons';
import Image from '~/components/Image';
import config from '~/config';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Playlist({ data }) {
    const [itemCount, setItemCount] = useState(0);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await playlistsService.playlists(data.id.playlistId);
            setItemCount(result.contentDetails.itemCount);
        };

        fetchApi();
    }, [data]);

    function convertHTMLEntity(text) {
        const span = document.createElement('span');

        return text.replace(/&[#A-Za-z0-9]+;/gi, (entity, position, text) => {
            span.innerHTML = entity;
            return span.innerText;
        });
    }

    return (
        <div className={cx('playlist')}>
            <div className={cx('wrap-playlist-thumbnail')}>
                <Image
                    className={cx('playlist-thumbnail')}
                    src={data.snippet.thumbnails.medium.url}
                    alt={convertHTMLEntity(data.snippet.title)}
                />
                <div className={cx('overlay-side')}>
                    <h3 className={cx('playlist-video-count')}>{itemCount}</h3>
                    <PlaylistIcon />
                </div>
                <div className={cx('playlist-overlay')}>
                    <PlayIcon />
                    <h3 className={cx('playlist-play')}>Play All</h3>
                </div>
            </div>
            <div className={cx('playlist-info')}>
                <h3 className={cx('playlist-title')} title={`${convertHTMLEntity(data.snippet.title)}`}>
                    {convertHTMLEntity(data.snippet.title)}
                </h3>
                <Tippy content={`${data.snippet.channelTitle}`} placement="top-start">
                    <Link to={config.routes.profile} className={cx('playlist-name')}>
                        {data.snippet.channelTitle}
                    </Link>
                </Tippy>

                <p className={cx('playlist-desc')} title={`${data.snippet.description}`}>
                    {data.snippet.description}
                </p>

                <Button className={cx('playlist-btn')}>View Full Playlist</Button>
            </div>
        </div>
    );
}

Playlist.propTypes = {
    data: PropTypes.object.isRequired,
};

export default Playlist;
