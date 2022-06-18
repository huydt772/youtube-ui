import classNames from 'classnames/bind';
import { useState } from 'react';
import Button from '~/components/Button';
import styles from './ScrollHome.module.scss';

const cx = classNames.bind(styles);

function ScrollHome({ data }) {
    const [clicked, setClicked] = useState('All');

    return (
        <div className={cx('wrapper')}>
            {data.map((item) => (
                <Button
                    key={item.id}
                    className={cx({
                        clicked: clicked === item.title,
                    })}
                    rounded
                    small
                    onClick={() => setClicked(item.title)}
                >
                    {item.title}
                </Button>
            ))}
        </div>
    );
}

export default ScrollHome;
