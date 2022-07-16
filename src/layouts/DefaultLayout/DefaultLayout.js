import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
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
    const dispatch = useDispatch();

    const handleClickOverlay = () => {
        dispatch(showSidebar());
    };
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <SidebarOverlay />
                {isTransformSidebar ? <SubSidebar /> : <Sidebar />}
                <div className={cx('content', isTransformSidebar ? 'content-sub-sidebar' : 'content-sidebar')}>
                    {children}
                </div>
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
