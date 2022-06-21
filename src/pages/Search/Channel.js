import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import Button from '~/components/Button';
import Image from '~/components/Image';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Channel({ data }) {
    return (
        <div className={cx('channel')}>
            <div className={cx('wrap-channel-img')}>
                <Image
                    className={cx('channel-img')}
                    src={data.snippet.thumbnails.medium.url}
                    alt={data.snippet.channelTitle}
                />
            </div>
            <div className={cx('channel-info')}>
                <h3 className={cx('channel-title')}>{data.snippet.channelTitle}</h3>
                <p className={cx('video-count')}>453 videos</p>
                <p>{data.snippet.description}</p>
            </div>
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
