import { useState, memo } from 'react';
import classNames from 'classnames/bind';

import Button from '~/components/Button';
import { ArrowLeftIcon, ArrowRightIcon } from '~/components/Icons';
import styles from './ScrollCategory.module.scss';

const SCROLL_DATA = [
    {
        id: 1,
        title: 'All',
    },
    {
        id: 2,
        title: 'Mixes',
    },
    {
        id: 3,
        title: 'Music',
    },
    {
        id: 4,
        title: 'Hương Ly',
    },
    {
        id: 5,
        title: 'FAP TV',
    },
    {
        id: 6,
        title: 'Gaming',
    },
];

const cx = classNames.bind(styles);

function ScrollCategory() {
    const [clicked, setClicked] = useState(1);

    const handleClicked = (id) => {
        setClicked(id);
    };

    return (
        <div className={cx('scroll-category')}>
            <div className={cx('arrow-left-btn')}>
                <ArrowLeftIcon className={cx('arrow-icon')} />
            </div>
            <div className={cx('scroll-item')}>
                {SCROLL_DATA.map((item) => (
                    <Button
                        className={cx({ clicked: clicked === item.id })}
                        key={item.id}
                        rounded
                        small
                        onClick={() => handleClicked(item.id)}
                    >
                        {item.title}
                    </Button>
                ))}
            </div>
            <div className={cx('arrow-right-btn')}>
                <ArrowRightIcon className={cx('arrow-icon')} />
            </div>
        </div>
    );
}

export default memo(ScrollCategory);
