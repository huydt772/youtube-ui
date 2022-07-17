import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import axios from 'axios';
import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { BackIcon, CloseIcon, MicroPhoneIcon, SearchIcon } from '~/components/Icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { useDebounce } from '~/hooks';
import SearchResultItem from '../SearchResultItem';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowResult] = useState(false);
    const [active, setActive] = useState(-1);
    const [showSearchBox, setShowSearchBox] = useState(false);
    const [resizeWidth, setResizeWidth] = useState(window.innerWidth);

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

    useEffect(() => {
        setActive(-1);
    }, [searchResult]);

    useEffect(() => {
        const handleResize = () => {
            setResizeWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (resizeWidth >= 740) {
            setShowSearchBox(false);
        }
    }, [resizeWidth]);

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
        if (searchValue === '') return;
        navigate(`/search?search_query=${searchValue}`);
    };

    const handleEnter = (e) => {
        if (e.which === 13) {
            navigate(`/search?search_query=${searchValue}`);
            e.target.blur();
            setShowResult(false);
        } else if (e.which === 40) {
            setActive((prevActive) => {
                if (prevActive > searchResult.length - 2) {
                    return -1;
                } else {
                    return prevActive + 1;
                }
            });
        } else if (e.which === 38) {
            setActive((prevActive) => {
                if (prevActive === -1) {
                    return searchResult.length - 1;
                } else {
                    return prevActive - 1;
                }
            });
        }
    };

    const handleClickResultItem = (result) => {
        setSearchValue(result);
        setShowResult(false);
    };

    const handleShowSearchBox = () => {
        setShowSearchBox(true);
    };

    const handleHideSearchBox = () => {
        setShowSearchBox(false);
    };

    const renderResult = (attrs) => (
        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx('search-popper')}>
                {searchResult.map((item, index) => (
                    <SearchResultItem
                        key={index}
                        content={item}
                        active={active === index}
                        onClick={() => handleClickResultItem(item)}
                    />
                ))}
            </PopperWrapper>
        </div>
    );

    return (
        <div
            className={cx('wrap-between', {
                'mobile-search-box': showSearchBox,
            })}
        >
            <Tippy content="Back">
                <button className={cx('mobile-back-btn')} onClick={handleHideSearchBox}>
                    <BackIcon />
                </button>
            </Tippy>

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

            <Tippy content="Search">
                <button className={cx('mobile-search-btn')} onClick={handleShowSearchBox}>
                    <SearchIcon />
                </button>
            </Tippy>

            <Tippy content="Search with your voice">
                <button className={cx('micro-btn')}>
                    <MicroPhoneIcon />
                </button>
            </Tippy>
        </div>
    );
}

export default Search;
