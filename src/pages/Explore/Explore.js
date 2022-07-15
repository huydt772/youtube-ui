import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

import { images } from '~/assets/images';
import Image from '~/components/Image';
import Product from '~/components/Product';
import * as videoService from '~/services/videoService';
import styles from './Explore.module.scss';

const EXPLORE_ACTIONS = [
    {
        image: images.trending,
        title: 'Trending',
    },
    {
        image: images.music,
        title: 'Music',
    },
    {
        image: images.gaming,
        title: 'Gaming',
    },
    {
        image: images.news,
        title: 'News',
    },
    {
        image: images.sports,
        title: 'Sports',
    },
];

const cx = classNames.bind(styles);

function Explore() {
    const [popularVideo, setPopularVideo] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await videoService.video('mostPopular');
            setPopularVideo(result);

            setLoading(false);
        };
        fetchApi();
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [popularVideo]);

    useEffect(() => {
        document.title = 'Explore - YouTube';
    }, []);

    return (
        <div className={cx('wrapper')}>
            {loading && <div className={cx('loading')}></div>}
            <div className={cx('grid')}>
                <div className={cx('row', 'sm-gutter')}>
                    {EXPLORE_ACTIONS.map((item, index) => (
                        <div key={index} className={cx('col', 'l-2-4', 'm-4', 'c-6')}>
                            <div className={cx('explore-action')}>
                                <Image className={cx('image')} src={item.image} alt={item.title} />
                                <h3 className={cx('title')}>{item.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={cx('row', 'no-gutters')}>
                    <h3 className={cx('heading')}>Trending videos</h3>
                    {popularVideo.map((item) => (
                        <div key={item.id} className={cx('col', 'l-10', 'm-10', 'c-12')}>
                            <Product data={item} explorePage />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Explore;
