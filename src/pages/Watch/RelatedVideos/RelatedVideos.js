import classNames from 'classnames/bind';
import { useEffect, useState, memo } from 'react';

import Product from '~/components/Product';
import * as videoService from '~/services/videoService';
import styles from './RelatedVideos.module.scss';

const cx = classNames.bind(styles);

function RelatedVideos() {
    const [relatedData, setRelatedData] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const relatedVideo = await videoService.video('mostPopular');
            setRelatedData(relatedVideo);
        };

        fetchApi();
    }, []);

    return (
        <div className={cx('grid')}>
            <div className={cx('row', 'no-gutters')}>
                {relatedData.map((item) => (
                    <div key={item.id} className={cx('col', 'l-12', 'm-0', 'c-0')}>
                        <Product data={item} watchPage />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default memo(RelatedVideos);
