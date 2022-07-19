import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import 'tippy.js/dist/tippy.css';

import Button from '~/components/Button';
import { FilterIcon } from '~/components/Icons';
import Product from '~/components/Product';
import * as searchService from '~/services/searchService';
import ChannelResult from './Channel';
import Playlist from './Playlist';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [loading, setLoading] = useState(true);
    // eslint-disable-next-line no-unused-vars
    const [searchQuery, setSearchQuery] = useSearchParams();
    const searchQueryValue = searchQuery.get('search_query');

    useEffect(() => {
        document.title = `${searchQueryValue} - YouTube`;
        setLoading(true);

        const fetchApi = async () => {
            const result = await searchService.search(searchQueryValue);
            setSearchResult(result);

            setLoading(false);
        };

        fetchApi();
    }, [searchQueryValue]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [searchResult]);

    return (
        <div className={cx('wrapper')}>
            {loading && <div className={cx('loading')}></div>}
            <div className={cx('filters')}>
                <Tippy content="Open search filters" placement="bottom">
                    <Button className={cx('filter-btn')} leftIcon={<FilterIcon />}>
                        Filters
                    </Button>
                </Tippy>
            </div>
            <div className={cx('grid')}>
                <div className={cx('row', 'no-gutters')}>
                    {searchResult.map((item) => {
                        let Result = Product;

                        const props = {
                            data: item,
                            searchPage: true,
                        };

                        if (item.id.kind === 'youtube#channel') {
                            Result = ChannelResult;
                            delete props.searchPage;
                        } else if (item.id.kind === 'youtube#playlist') {
                            Result = Playlist;
                            delete props.searchPage;
                        }

                        return (
                            <div key={item.etag} className={cx('col', 'l-12', 'm-12', 'c-12')}>
                                <Result {...props} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Search;
