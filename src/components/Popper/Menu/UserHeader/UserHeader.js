import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { memo } from 'react';
import Image from '~/components/Image';
import styles from './UserHeader.module.scss';

const cx = classNames.bind(styles);

function UserHeader({ image, name }) {
    return (
        <header className={cx('wrapper')}>
            <Image className={cx('image')} src={image} alt={name} />
            <div className={cx('info')}>
                <h4 className={cx('name')}>{name}</h4>
                <p className={cx('desc')}>Manage your Google Account</p>
            </div>
        </header>
    );
}

UserHeader.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

export default memo(UserHeader);
