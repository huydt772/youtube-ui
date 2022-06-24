import { images } from '~/assets/images';
import Image from '~/components/Image';
import classNames from 'classnames/bind';
import styles from './NoResults.module.scss';

const cx = classNames.bind(styles);

function NoResults() {
    return (
        <div className={cx('wrapper')}>
            <Image className={cx('image')} src={images.noResults} alt="No Results" />

            <h3 className={cx('notify-text')}>This page is currently unavailable</h3>
        </div>
    );
}

export default NoResults;
