import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import GeneralHeaderMenu from './GeneralHeaderMenu';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import UserHeaderMenu from './UserHeaderMenu';

const cx = classNames.bind(styles);

function Menu({
    width,
    userLogin,
    placement,
    offset = [0],
    children,
    split,
    items = [],
}) {
    const [history, setHistory] = useState([{ data: items }]);
    const [menuItems, setMenuItems] = useState();
    const [resizeHeight, setResizeHeight] = useState(window.innerHeight);

    const current = history[history.length - 1];

    console.log(current);

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
                    <PopperWrapper className={cx('menu-popper')}>
                        {menuItems}
                    </PopperWrapper>
                )
            ) : (
                <PopperWrapper className={cx('menu-popper')}>{menuItems}</PopperWrapper>
            ),
        );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [history]);

    const handleMenuHide = () => {
        setHistory(history.slice(0, 1));
    };
    return (
        <HeadlessTippy
            trigger="click"
            interactive
            offset={offset}
            placement={placement}
            onHide={handleMenuHide}
            render={(attrs) => (
                <div
                    style={{ width: width, maxHeight: resizeHeight - 8 }}
                    className={cx('menu-list')}
                    tabIndex="-1"
                    {...attrs}
                >
                    {userLogin && history.length < 2 && (
                        <UserHeaderMenu
                            image="https://yt3.ggpht.com/yti/APfAmoEiqTDD0tVCf541rMgwlZ_uCo4BRuFg7xflPOfAEw=s108-c-k-c0x00ffffff-no-rj"
                            name="HMonster"
                        />
                    )}
                    {history.length > 1 && (
                        <GeneralHeaderMenu
                            title={current.title}
                            onBack={() =>
                                setHistory(history.slice(0, history.length - 1))
                            }
                        />
                    )}
                    {menuItems}
                </div>
            )}
        >
            {children}
        </HeadlessTippy>
    );
}

export default Menu;
