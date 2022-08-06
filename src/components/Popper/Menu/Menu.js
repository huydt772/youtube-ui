import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import { handleSignOut } from '~/firebaseConfig';
import GeneralHeaderMenu from './GeneralHeader';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import UserHeaderMenu from './UserHeader';

const cx = classNames.bind(styles);

const defaultFn = function () {};

function Menu({ width, userLogin, placement, offset = [0], children, split, items = [], onClickOutside = defaultFn }) {
    const [history, setHistory] = useState([{ data: items }]);
    const [menuItems, setMenuItems] = useState();
    const [resizeHeight, setResizeHeight] = useState(window.innerHeight);

    const current = history[history.length - 1];

    useEffect(() => {
        const handleResizeHeight = () => {
            setResizeHeight(window.innerHeight);
        };

        window.addEventListener('resize', handleResizeHeight);

        return () => {
            window.removeEventListener('resize', handleResizeHeight);
        };
    }, [resizeHeight]);

    useEffect(() => {
        const menuItems = current.data.map((item, index) => (
            <MenuItem
                key={index}
                data={item}
                onClick={() => {
                    if (item.children) {
                        setHistory((prev) => [...prev, item.children]);
                    } else if (item.title === 'Sign out') {
                        handleSignOut();
                    }
                }}
            />
        ));

        const splitMenuItems = () =>
            split.map((splitItem, index) => (
                <PopperWrapper key={index} className={cx('menu-popper')}>
                    {menuItems.splice(0, splitItem)}
                </PopperWrapper>
            ));

        setMenuItems(
            split ? (
                history.length < 2 ? (
                    splitMenuItems()
                ) : (
                    <PopperWrapper className={cx('menu-popper')}>{menuItems}</PopperWrapper>
                )
            ) : (
                <PopperWrapper className={cx('menu-popper')}>{menuItems}</PopperWrapper>
            ),
        );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [history]);

    const handleReset = () => {
        setHistory(history.slice(0, 1));
    };

    const handleBack = () => {
        setHistory(history.slice(0, history.length - 1));
    };

    const renderResult = (attrs) => (
        <div style={{ width: width, maxHeight: resizeHeight - 8 }} className={cx('menu-list')} tabIndex="-1" {...attrs}>
            {userLogin && history.length < 2 && (
                <UserHeaderMenu image={localStorage.getItem('profilePic')} name={localStorage.getItem('name')} />
            )}
            {history.length > 1 && <GeneralHeaderMenu title={current.title} onBack={handleBack} />}
            <div className={cx('menu-body')}>{menuItems}</div>
        </div>
    );
    return (
        // Using a wrapper <div> or <span> tag around the reference element solves this
        // by creating a new parentNode context.
        <div>
            <HeadlessTippy
                trigger="click"
                interactive
                offset={offset}
                placement={placement}
                render={renderResult}
                onHide={handleReset}
                onClickOutside={onClickOutside}
            >
                {children}
            </HeadlessTippy>
        </div>
    );
}

Menu.propTypes = {
    width: PropTypes.string,
    userLogin: PropTypes.bool,
    placement: PropTypes.string,
    offset: PropTypes.array,
    children: PropTypes.node.isRequired,
    split: PropTypes.array,
    items: PropTypes.array.isRequired,
    onClickOutside: PropTypes.func,
};

export default Menu;
