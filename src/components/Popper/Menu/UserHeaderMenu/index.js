import classNames from 'classnames/bind';
import Image from '~/components/Image';
import styles from './UserHeaderMenu.module.scss';

const cx = classNames.bind(styles);

function UserHeaderMenu({ image, name }) {
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

export default UserHeaderMenu;
