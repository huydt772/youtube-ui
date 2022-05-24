import classNames from 'classnames/bind';
import { images } from '~/assets/images';
import {
    AppsIcon,
    BarsIcon,
    CloseIcon,
    MenuIcon,
    MicroPhoneIcon,
    SearchIcon,
    UserIcon,
} from '~/components/Icons';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('wrap-left')}>
                    <button className={cx('bars-icon')}>
                        <BarsIcon />
                    </button>
                    <div className={cx('logo')}>
                        <img src={images.logo} alt="YouTube" />
                    </div>
                </div>
                <div className={cx('wrap-between')}>
                    <div className={cx('search')}>
                        <span className={cx('search-icon')}>
                            <SearchIcon width="2rem" height="2rem" />
                        </span>

                        <input type="text" className={cx('input')} />

                        <button className={cx('close-btn')}>
                            <CloseIcon />
                        </button>
                        <button className={cx('search-btn')}>
                            <SearchIcon />
                        </button>
                    </div>
                    <button className={cx('miro-btn')}>
                        <MicroPhoneIcon />
                    </button>
                </div>
                <div className={cx('wrap-right')}>
                    <button className={cx('apps-btn')}>
                        <AppsIcon />
                    </button>
                    <button className={cx('menu-btn')}>
                        <MenuIcon />
                    </button>
                    <button className={cx('signIn-btn')}>
                        <UserIcon />
                        <h4>SIGN IN</h4>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Header;
