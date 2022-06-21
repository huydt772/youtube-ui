import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import 'tippy.js/dist/tippy.css';

import { images } from '~/assets/images';
import { BarsIcon } from '~/components/Icons';
import config from '~/config';
import HeaderActions from '../HeaderActions';
import Search from '../Search';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('wrap-left')}>
                    <button className={cx('bars-icon')}>
                        <BarsIcon />
                    </button>
                    <Link
                        to={config.routes.home}
                        className={cx('logo')}
                        title="YouTube Home"
                    >
                        <img src={images.logo} alt="YouTube" />
                    </Link>
                </div>

                <Search />

                <HeaderActions />
            </div>
        </header>
    );
}

export default Header;
