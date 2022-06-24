import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { useState, useEffect, useRef } from 'react';

import Button from '~/components/Button';
import { ArrowLeftIcon, ArrowRightIcon } from '~/components/Icons';
import styles from './ScrollHome.module.scss';

const cx = classNames.bind(styles);

function ScrollHome({ data }) {
    const [clicked, setClicked] = useState('All');

    const contentRef = useRef();

    useEffect(() => {
        const contentElement = contentRef.current;

        const handleScroll = () => {};

        contentElement.addEventListener('scroll', handleScroll);

        return () => {
            contentElement.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('arrow-left-btn')}>
                <ArrowLeftIcon className={cx('arrow-icon')} />
            </div>
            <div ref={contentRef} className={cx('content')}>
                {data.map((item) => (
                    <Button
                        key={item.id}
                        className={cx({
                            clicked: clicked === item.title,
                        })}
                        title={`${item.title}`}
                        rounded
                        small
                        onClick={() => setClicked(item.title)}
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

ScrollHome.propTypes = {
    data: PropTypes.array.isRequired,
};

export default ScrollHome;
