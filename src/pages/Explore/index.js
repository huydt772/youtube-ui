import axios from 'axios';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import Product from '~/components/Product';
import styles from './Explore.module.scss';
import Image from '~/components/Image';
import { images } from '~/assets/images';

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
    const [apiData, setApiData] = useState([]);

    useEffect(() => {
        const KEY = 'AIzaSyDfeGpdmR-o_qfGdNcUHKZfzckhWK8HdAc';
        axios
            .get('https://youtube.googleapis.com/youtube/v3/videos?', {
                params: {
                    part: 'snippet,contentDetails,statistics',
                    chart: 'mostPopular',
                    maxResults: 50,
                    regionCode: 'VN',
                    key: KEY,
                },
            })
            .then((res) => {
                setApiData(res.data.items);
            });
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('grid')}>
                <div className={cx('row', 'sm-gutter')}>
                    {EXPLORE_ACTIONS.map((item, index) => (
                        <div key={index} className={cx('col', 'l-2-4', 'm-4', 'c-6')}>
                            <div className={cx('explore-action')}>
                                <Image
                                    className={cx('image')}
                                    src={item.image}
                                    alt={item.title}
                                />
                                <h3 className={cx('title')}>{item.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={cx('row', 'no-gutters')}>
                    <h3 className={cx('heading')}>Trending videos</h3>
                    {apiData.map((item) => (
                        <div key={item.id} className={cx('col', 'l-10')}>
                            <Product data={item} explorePage />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Explore;
