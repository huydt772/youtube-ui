import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import { PlayIcon, PlaylistIcon } from '~/components/Icons';
import Image from '~/components/Image';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Playlist({ data }) {
    console.log(data);
    return (
        <div className={cx('playlist')}>
            <div className={cx('wrap-playlist-thumbnail')}>
                <Image
                    className={cx('playlist-thumbnail')}
                    src={data.snippet.thumbnails.medium.url}
                    alt={data.snippet.title}
                />
                <div className={cx('overlay-side')}>
                    <h3 className={cx('playlist-video-count')}>116</h3>
                    <PlaylistIcon />
                </div>
                <div className={cx('playlist-overlay')}>
                    <PlayIcon />
                    <h3 className={cx('playlist-play')}>Play All</h3>
                </div>
            </div>
            <div className={cx('playlist-info')}>
                <h3 className={cx('playlist-title')}>{data.snippet.title}</h3>
                <p className={cx('playlist-name')}>{data.snippet.channelTitle}</p>

                <p className={cx('playlist-desc')}>{data.snippet.description}</p>

                <Button className={cx('playlist-btn')}>View Full Playlist</Button>
            </div>
        </div>
    );
}

Playlist.propTypes = {
    data: PropTypes.object.isRequired,
};

export default Playlist;
