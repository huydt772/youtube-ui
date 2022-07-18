import classNames from 'classnames/bind';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { images } from '~/assets/images';
import { BarsIcon } from '~/components/Icons';
import Image from '~/components/Image';
import config from '~/config';
import Sidebar from '~/layouts/components/Sidebar';
import { showSidebar } from '~/store/actions/showSidebar';
import styles from './SidebarOverlay.module.scss';

const cx = classNames.bind(styles);

function SidebarOverlay() {
    const isShowSidebar = useSelector((state) => state.showSidebar);
    const dispatch = useDispatch();

    const handleHideSidebar = () => {
        dispatch(showSidebar());
    };
    return (
        <div className={cx('wrapper', { 'show-sidebar': isShowSidebar })}>
            <header className={cx('header')}>
                <button className={cx('bars-btn')} onClick={handleHideSidebar}>
                    <BarsIcon />
                </button>
                <Link to={config.routes.home} className={cx('logo')} title="YouTube Home">
                    <Image src={images.logo} alt="YouTube" />
                </Link>
            </header>

            <Sidebar noPosition />
        </div>
    );
}

export default SidebarOverlay;
