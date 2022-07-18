import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { showSidebar } from '~/store/actions/showSidebar';
import Header from '~/layouts/components/Header';
import SidebarOverlay from '~/layouts/components/SidebarOverlay';
import styles from './HeaderOnly.module.scss';

const cx = classNames.bind(styles);

function HeaderOnly({ children }) {
    const isShowSidebar = useSelector((state) => state.showSidebar);
    const dispatch = useDispatch();

    const handleClickOverlay = () => {
        dispatch(showSidebar());
    };

    return (
        <div className={cx('wrapper')}>
            <Header headerOnly />
            <SidebarOverlay />
            <div className={cx('container')}>{children}</div>

            <div
                className={cx('overlay', {
                    'show-overlay': isShowSidebar,
                })}
                onClick={handleClickOverlay}
            ></div>
        </div>
    );
}

HeaderOnly.propTypes = {
    children: PropTypes.node.isRequired,
};

export default HeaderOnly;
