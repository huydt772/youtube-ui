import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Header from '~/layouts/components/Header';
import Sidebar from '~/layouts/components/Sidebar';
import SidebarOverlay from '~/layouts/components/SidebarOverlay';
import SubSidebar from '~/layouts/components/SubSidebar';
import { showSidebar } from '~/store/actions/showSidebar';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    const isTransformSidebar = useSelector((state) => state.transformSidebar);
    const isShowSidebar = useSelector((state) => state.showSidebar);
    const [resizeWidth, setResizeWidth] = useState(window.innerWidth);
    const dispatch = useDispatch();

    useEffect(() => {
        const handleResize = () => {
            setResizeWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleClickOverlay = () => {
        dispatch(showSidebar());
    };

    const renderClassName = () => {
        if (!isTransformSidebar && resizeWidth >= 1024) {
            return 'content-sidebar';
        } else {
            return 'content-sub-sidebar';
        }
    };
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <SidebarOverlay />
                <SubSidebar />
                {!isTransformSidebar && resizeWidth >= 1024 && <Sidebar />}
                <div className={cx('content', renderClassName())}>{children}</div>
            </div>

            <div
                className={cx('overlay', {
                    'show-overlay': isShowSidebar,
                })}
                onClick={handleClickOverlay}
            ></div>
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
