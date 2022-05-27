import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'tippy.js/dist/tippy.css';
import { images } from '~/assets/images';
import Button from '~/components/Button';
import {
    AppsIcon,
    BarsIcon,
    CloseIcon,
    CreateIcon,
    DataIcon,
    FeedbackIcon,
    HelpIcon,
    KeyboardIcon,
    LanguageIcon,
    LocationIcon,
    MenuIcon,
    MicroPhoneIcon,
    NotifyIcon,
    SearchIcon,
    SettingsIcon,
    ThemeIcon,
    UserIcon,
    YoutubeArtistsIcon,
    YoutubeKidsIcon,
    YoutubeMusicIcon,
    YoutubeTvIcon,
} from '~/components/Icons';
import Image from '~/components/Image';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Menu from '~/components/Popper/Menu';
import SearchResultItem from '../SearchResultItem';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

const SETTING_ITEMS = [
    {
        icon: <ThemeIcon />,
        title: 'Appearance: Device theme',
    },
    {
        icon: <LanguageIcon />,
        title: 'Language: English',
    },
    {
        icon: <LocationIcon />,
        title: 'Vietnam',
    },
    {
        icon: <SettingsIcon />,
        title: 'Settings',
        to: '/settings',
    },
    {
        icon: <DataIcon />,
        title: 'Your data in YouTube',
    },
    {
        icon: <HelpIcon />,
        title: 'Help',
    },
    {
        icon: <FeedbackIcon />,
        title: 'Send feedback',
    },
    {
        icon: <KeyboardIcon />,
        title: 'Keyboard shortcuts',
    },
];

const APP_ITEMS = [
    {
        icon: <YoutubeTvIcon />,
        title: 'YouTube TV',
    },
    {
        icon: <YoutubeMusicIcon />,
        title: 'YouTube Music',
    },
    {
        icon: <YoutubeKidsIcon />,
        title: 'YouTube Kids',
    },
    {
        icon: <YoutubeArtistsIcon />,
        title: 'YouTube for Artists',
    },
];

function Header() {
    const [searchResult, setSearchResult] = useState([]);
    const currentUser = false;

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('wrap-left')}>
                    <button className={cx('bars-icon')}>
                        <BarsIcon />
                    </button>
                    <Link to="/" className={cx('logo')} title="YouTube Home">
                        <img src={images.logo} alt="YouTube" />
                    </Link>
                </div>
                <div className={cx('wrap-between')}>
                    <div className={cx('search', 'search-global')}>
                        <HeadlessTippy
                            visible={searchResult.length > 0}
                            interactive
                            offset={[0]}
                            placement="bottom-start"
                            render={(attrs) => (
                                <div
                                    className={cx('search-result')}
                                    tabIndex="-1"
                                    {...attrs}
                                >
                                    <PopperWrapper className={cx('search-popper')}>
                                        <SearchResultItem
                                            content="f8 sơn đặng"
                                            searched
                                        />
                                        <SearchResultItem
                                            content="code music player"
                                            searched
                                        />
                                        <SearchResultItem content="có không giữ mất đừng tìm trúc nhân" />
                                        <SearchResultItem content="đám cưới nha" />
                                    </PopperWrapper>
                                </div>
                            )}
                        >
                            <div className={cx('wrap-search')}>
                                <span className={cx('search-icon')}>
                                    <SearchIcon width="2rem" height="2rem" />
                                </span>

                                <div className={cx('wrap-input')}>
                                    <input
                                        type="text"
                                        placeholder="Search"
                                        className={cx('input')}
                                    />
                                    <button className={cx('close-btn')}>
                                        <CloseIcon />
                                    </button>
                                </div>
                            </div>
                        </HeadlessTippy>

                        <Tippy content="Search">
                            <button className={cx('search-btn')}>
                                <SearchIcon />
                            </button>
                        </Tippy>
                    </div>
                    <Tippy content="Search with your voice">
                        <button className={cx('miro-btn')}>
                            <MicroPhoneIcon />
                        </button>
                    </Tippy>
                </div>
                <div className={cx('wrap-right')}>
                    {currentUser ? (
                        <>
                            <Tippy content="Create">
                                <button className={cx('action-btn')}>
                                    <CreateIcon />
                                </button>
                            </Tippy>
                            <Tippy content="YouTube apps">
                                <button className={cx('action-btn')}>
                                    <AppsIcon />
                                </button>
                            </Tippy>
                            <Tippy content="Notifications">
                                <button className={cx('action-btn')}>
                                    <span className={cx('badge')}>9+</span>
                                    <NotifyIcon />
                                </button>
                            </Tippy>
                            <Image
                                className={cx('user')}
                                src="https://yt3.ggpht.com/yti/APfAmoEiqTDD0tVCf541rMgwlZ_uCo4BRuFg7xflPOfAEw=s88-c-k-c0x00ffffff-no-rj-mo"
                                alt="Nguyen Van Huy"
                            />
                        </>
                    ) : (
                        <>
                            <Menu
                                width="216.08px"
                                placement="bottom-end"
                                items={APP_ITEMS}
                                split={[1, 2, 1]}
                                className={cx('apps-popper')}
                            >
                                <Tippy content="YouTube apps">
                                    <button className={cx('action-btn')}>
                                        <AppsIcon />
                                    </button>
                                </Tippy>
                            </Menu>

                            <Menu
                                width="298px"
                                placement="bottom-end"
                                items={SETTING_ITEMS}
                            >
                                <Tippy content="Settings">
                                    <button className={cx('action-btn')}>
                                        <MenuIcon />
                                    </button>
                                </Tippy>
                            </Menu>

                            <Button primary leftIcon={<UserIcon />}>
                                SIGN IN
                            </Button>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
