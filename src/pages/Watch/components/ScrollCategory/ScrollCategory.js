import classNames from 'classnames/bind';
import { memo, useState, useEffect, useRef } from 'react';

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
    const [showArrowLeftBtn, setShowArrowLeftBtn] = useState(false);

    const contentRef = useRef();

    useEffect(() => {
        const contentElement = contentRef.current;

        const handleScroll = () => {
            if (contentElement.scrollLeft > 0) {
                setShowArrowLeftBtn(true);
            } else {
                setShowArrowLeftBtn(false);
            }
        };

        contentElement.addEventListener('scroll', handleScroll);

        return () => {
            contentElement.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScrollLeft = () => {
        contentRef.current.scrollLeft -= 250;
    };

    const handleScrollRight = () => {
        contentRef.current.scrollLeft += 250;
    };

    const handleClicked = (id) => {
        setClicked(id);
    };

    return (
        <div className={cx('scroll-category')}>
            {showArrowLeftBtn && (
                <div className={cx('arrow-left-btn')} onClick={handleScrollLeft}>
                    <ArrowLeftIcon className={cx('arrow-icon')} />
                </div>
            )}
            <div ref={contentRef} className={cx('scroll-item')}>
                {SCROLL_DATA.map((item) => (
                    <Button
                        className={cx({ clicked: clicked === item.id })}
                        key={item.id}
                        title={`${item.title}`}
                        rounded
                        small
                        onClick={() => handleClicked(item.id)}
                    >
                        {item.title}
                    </Button>
                ))}
            </div>
            <div className={cx('arrow-right-btn')} onClick={handleScrollRight}>
                <ArrowRightIcon className={cx('arrow-icon')} />
            </div>
        </div>
    );
}

export default memo(ScrollCategory);
