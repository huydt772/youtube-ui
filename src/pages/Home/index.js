import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

import * as videoService from '~/services/videoService';
import Product from '~/components/Product';
import styles from './Home.module.scss';
import ScrollHome from './ScrollHome';

const cx = classNames.bind(styles);

const SCROLL_HOME_DATA = [
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
    {
        id: 7,
        title: 'Live',
    },
    {
        id: 8,
        title: 'MixiGaming',
    },
    {
        id: 9,
        title: 'Sao nhập ngũ',
    },
    {
        id: 10,
        title: 'Watched',
    },
    {
        id: 11,
        title: 'Game shows',
    },
    {
        id: 12,
        title: 'JavaScript',
    },
    {
        id: 13,
        title: 'Lo-fi',
    },
    {
        id: 14,
        title: 'Pop Music',
    },
];

function Home() {
    const [apiData, setApiData] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await videoService.video('mostPopular');
            setApiData(result);
        };

        fetchApi();
    }, []);

    return (
        <div className={cx('wrapper')}>
            <ScrollHome data={SCROLL_HOME_DATA} />
            <div className={cx('products')}>
                <div className={cx('grid')}>
                    <div className={cx('row', 'yt-gutter')}>
                        {apiData.map((item) => (
                            <div
                                key={item.id}
                                className={cx('col', 'l-3', 'm-4', 'c-12')}
                            >
                                <Product data={item} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
