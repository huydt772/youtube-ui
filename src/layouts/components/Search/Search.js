import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import axios from 'axios';
import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { CloseIcon, MicroPhoneIcon, SearchIcon } from '~/components/Icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { useDebounce } from '~/hooks';
import SearchResultItem from '../SearchResultItem';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowResult] = useState(false);

    const navigate = useNavigate();
    const inputRef = useRef();

    const debouncedValue = useDebounce(searchValue, 500);

    useEffect(() => {
        if (!debouncedValue.trim()) {
            setSearchResult([]);
            return;
        }

        const fetchApi = async () => {
            const res = await axios.get(
                'https://corsanywhere.herokuapp.com/http://suggestqueries.google.com/complete/search',
                {
                    params: {
                        q: debouncedValue,
                        client: 'firefox',
                        ds: 'yt',
                    },
                },
            );
            setSearchResult(res.data[1]);
        };

        fetchApi();
    }, [debouncedValue]);

    const handleChange = (e) => {
        const searchValue = e.target.value;

        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);

        inputRef.current.focus();
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    const handleSearch = () => {
        navigate(`/search?search_query=${searchValue}`);
    };

    const handleEnter = (e) => {
        if (e.which === 13) {
            navigate(`/search?search_query=${searchValue}`);
            e.target.blur();
            setShowResult(false);
        }
    };

    const handleClickResultItem = (result) => {
        setSearchValue(result);
        setShowResult(false);
    };

    const renderResult = (attrs) => (
        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx('search-popper')}>
                {searchResult.map((item, index) => (
                    <SearchResultItem key={index} content={item} onClick={() => handleClickResultItem(item)} />
                ))}
            </PopperWrapper>
        </div>
    );

    return (
        <div className={cx('wrap-between')}>
            <div className={cx('search', 'search-global')}>
                <HeadlessTippy
                    visible={showResult && searchResult.length > 0}
                    interactive
                    offset={[0]}
                    placement="bottom-start"
                    render={renderResult}
                    onClickOutside={handleHideResult}
                >
                    <div className={cx('wrap-search')}>
                        <span className={cx('search-icon')} onMouseDown={(e) => e.preventDefault()}>
                            <SearchIcon width="2rem" height="2rem" />
                        </span>

                        <div className={cx('wrap-input')}>
                            <input
                                ref={inputRef}
                                value={searchValue}
                                type="text"
                                spellCheck={false}
                                placeholder="Search"
                                className={cx('input')}
                                onChange={handleChange}
                                onKeyDown={handleEnter}
                                onFocus={() => setShowResult(true)}
                            />
                            {searchValue && (
                                <button className={cx('close-btn')} onClick={handleClear}>
                                    <CloseIcon />
                                </button>
                            )}
                        </div>
                    </div>
                </HeadlessTippy>

                <Tippy content="Search">
                    <button className={cx('search-btn')} onClick={handleSearch}>
                        <SearchIcon />
                    </button>
                </Tippy>
            </div>
            <Tippy content="Search with your voice">
                <button className={cx('micro-btn')}>
                    <MicroPhoneIcon />
                </button>
            </Tippy>
        </div>
    );
}

export default Search;
