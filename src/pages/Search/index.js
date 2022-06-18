import classNames from 'classnames/bind';
import { useState } from 'react';
import { useEffect } from 'react';
import Button from '~/components/Button';
import { FilterIcon } from '~/components/Icons';
import Product from '~/components/Product';
import styles from './Search.module.scss';
import * as searchService from '~/services/searchService';
import ChannelResult from './Channel';
import { useSearchParams } from 'react-router-dom';

const cx = classNames.bind(styles);

function Search() {
    const [dataApi, setDataApi] = useState([]);
    // eslint-disable-next-line no-unused-vars
    const [searchQuery, setSearchQuery] = useSearchParams();
    const searchQueryValue = searchQuery.get('search_query');

    useEffect(() => {
        const fetchApi = async () => {
            const result = await searchService.search(searchQueryValue);
            console.log(result);
            setDataApi(result);
        };

        fetchApi();
    }, [searchQueryValue]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('filters')}>
                <Button className={cx('filter-btn')} leftIcon={<FilterIcon />}>
                    Filters
                </Button>
            </div>
            <div className={cx('result')}>
                <div className={cx('grid')}>
                    <div className={cx('row', 'no-gutters')}>
                        {dataApi.map((item, index) => {
                            let Result = Product;
                            if (item.id.kind === 'youtube#channel') {
                                Result = ChannelResult;
                            }

                            return (
                                <div
                                    key={index}
                                    className={cx('col', 'l-12', 'm-12', 'c-12')}
                                >
                                    <Result data={item} searchPage />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search;
