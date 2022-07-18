import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { memo } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { Link } from 'react-router-dom';
import 'tippy.js/dist/tippy.css';

import { showSidebar } from '~/store/actions/showSidebar';
import { transformSidebar } from '~/store/actions/transformSidebar';
import { images } from '~/assets/images';
import { BarsIcon } from '~/components/Icons';
import config from '~/config';
import HeaderActions from '../HeaderActions';
import Search from '../Search';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header({ headerOnly = false }) {
    const dispatch = useDispatch();

    const handleTransformSidebar = () => {
        if (window.innerWidth < 1024 || headerOnly) {
            dispatch(showSidebar());
        } else {
            dispatch(transformSidebar());
        }
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('wrap-left')}>
                    <button className={cx('bars-icon')} onClick={handleTransformSidebar}>
                        <BarsIcon />
                    </button>
                    <Link to={config.routes.home} className={cx('logo')} title="YouTube Home">
                        <img src={images.logo} alt="YouTube" />
                    </Link>
                </div>

                <Search />

                <HeaderActions />
            </div>
        </header>
    );
}

Header.propTypes = {
    headerOnly: PropTypes.bool,
};

export default memo(Header);
