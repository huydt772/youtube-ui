import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function Menu({
    width,
    placement,
    offset = [0],
    children,
    split,
    className,
    items = [],
}) {
    const [menuItems, setMenuItems] = useState();

    useEffect(() => {
        const menuItems = items.map((item, index) => (
            <MenuItem key={index} data={item} />
        ));
        const splitMenuItems = () =>
            split.map((splitItem, index) => (
                <PopperWrapper key={index} className={cx('menu-popper')}>
                    {menuItems.splice(0, splitItem)}
                </PopperWrapper>
            ));
        setMenuItems(
            split ? (
                splitMenuItems()
            ) : (
                <PopperWrapper className={cx('menu-popper')}>{menuItems}</PopperWrapper>
            ),
        );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <HeadlessTippy
            trigger="click"
            interactive
            offset={offset}
            placement={placement}
            render={(attrs) => (
                <div
                    className={cx('menu-list', className)}
                    style={{ width: width }}
                    tabIndex="-1"
                    {...attrs}
                >
                    {menuItems}
                </div>
            )}
        >
            {children}
        </HeadlessTippy>
    );
}

export default Menu;
