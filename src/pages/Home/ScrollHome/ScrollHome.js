import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

import Button from '~/components/Button';
import { ArrowLeftIcon, ArrowRightIcon } from '~/components/Icons';
import styles from './ScrollHome.module.scss';

const cx = classNames.bind(styles);

function ScrollHome({ data }) {
    const [clicked, setClicked] = useState(1);
    const [showArrowLeftBtn, setShowArrowLeftBtn] = useState(false);
    const isTransformSidebar = useSelector((state) => state.transformSidebar);

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

    return (
        <div className={cx('wrapper', isTransformSidebar ? 'left-sub-sidebar-width' : 'left-sidebar-width')}>
            {showArrowLeftBtn && (
                <div className={cx('arrow-left-btn')} onClick={handleScrollLeft}>
                    <ArrowLeftIcon className={cx('arrow-icon')} />
                </div>
            )}
            <div ref={contentRef} className={cx('content')}>
                {data.map((item) => (
                    <Button
                        key={item.id}
                        className={cx({
                            clicked: clicked === item.id,
                        })}
                        title={`${item.title}`}
                        rounded
                        small
                        onClick={() => setClicked(item.id)}
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

ScrollHome.propTypes = {
    data: PropTypes.array.isRequired,
};

export default ScrollHome;
