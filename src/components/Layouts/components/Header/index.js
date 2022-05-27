import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'tippy.js/dist/tippy.css';
import { images } from '~/assets/images';
import Button from '~/components/Button';
import {
    AccountIcon,
    AppsIcon,
    ArrowIcon,
    BarsIcon,
    ChannelIcon,
    CloseIcon,
    CreateIcon,
    DataIcon,
    FeedbackIcon,
    HelpIcon,
    KeyboardIcon,
    LanguageIcon,
    LiveIcon,
    LocationIcon,
    MenuIcon,
    MicroPhoneIcon,
    NotifyIcon,
    PurchasesIcon,
    SearchIcon,
    SettingsIcon,
    SignOutIcon,
    ThemeIcon,
    UploadIcon,
    UserIcon,
    YoutubeArtistsIcon,
    YoutubeKidsIcon,
    YoutubeMusicIcon,
    YoutubeTvIcon,
    YtStudioIcon,
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
        rightIcon: <ArrowIcon />,
    },
    {
        icon: <LanguageIcon />,
        title: 'Language: English',
        rightIcon: <ArrowIcon />,
    },
    {
        icon: <LocationIcon />,
        title: 'Location: Vietnam',
        rightIcon: <ArrowIcon />,
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
    {
        rightIcon: <ArrowIcon />,
        title: 'Restricted Mode: Off',
    },
];

const SETTING_LOGIN_ITEMS = [
    {
        icon: <ChannelIcon />,
        title: 'Your channel',
        to: '/channel',
    },
    {
        icon: <PurchasesIcon />,
        title: 'Purchases and memberships',
        to: '/paid_memberships',
    },
    {
        icon: <YtStudioIcon />,
        title: 'YouTube Studio',
    },
    {
        icon: <AccountIcon />,
        title: 'Switch account',
        rightIcon: <ArrowIcon />,
    },
    {
        icon: <SignOutIcon />,
        title: 'Sign out',
    },
    ...SETTING_ITEMS,
];

const APP_ITEMS = [
    {
        icon: <YoutubeTvIcon />,
        title: 'YouTube TV',
        href: 'https://tv.youtube.com/',
    },
    {
        icon: <YoutubeMusicIcon />,
        title: 'YouTube Music',
        href: 'https://music.youtube.com/',
    },
    {
        icon: <YoutubeKidsIcon />,
        title: 'YouTube Kids',
        href: 'https://www.youtubekids.com/',
    },
    {
        icon: <YoutubeArtistsIcon />,
        title: 'YouTube for Artists',
        href: 'https://artists.youtube.com/',
    },
];

const CREATE_ITEMS = [
    {
        icon: <UploadIcon />,
        title: 'Upload video',
        to: '/upload',
    },
    {
        icon: <LiveIcon />,
        title: 'Go live',
        to: '/golive',
    },
];

function Header() {
    const [searchResult, setSearchResult] = useState([]);
    const currentUser = true;

    useEffect(() => {
        setTimeout(() => {
            setSearchResult(['Huy']);
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
                            <Menu
                                width="179px"
                                placement="bottom-start"
                                items={CREATE_ITEMS}
                            >
                                <Tippy content="Create">
                                    <button className={cx('action-btn')}>
                                        <CreateIcon />
                                    </button>
                                </Tippy>
                            </Menu>
                            <Menu
                                width="218px"
                                placement="bottom-end"
                                items={APP_ITEMS}
                                split={[1, 2, 1]}
                            >
                                <Tippy content="YouTube apps">
                                    <button className={cx('action-btn')}>
                                        <AppsIcon />
                                    </button>
                                </Tippy>
                            </Menu>
                            <Tippy content="Notifications">
                                <button className={cx('action-btn')}>
                                    <span className={cx('badge')}>9+</span>
                                    <NotifyIcon />
                                </button>
                            </Tippy>
                            <Menu
                                className={cx('menu-user')}
                                width="300px"
                                placement="bottom-end"
                                offset={[-46, -36]}
                                split={[5, 8, 1]}
                                items={SETTING_LOGIN_ITEMS}
                            >
                                <Image
                                    className={cx('user')}
                                    src="https://yt3.ggpht.com/yti/APfAmoEiqTDD0tVCf541rMgwlZ_uCo4BRuFg7xflPOfAEw=s88-c-k-c0x00ffffff-no-rj-mo"
                                    alt="Nguyen Van Huy"
                                />
                            </Menu>
                        </>
                    ) : (
                        <>
                            <Menu
                                width="216.08px"
                                placement="bottom-end"
                                items={APP_ITEMS}
                                split={[1, 2, 1]}
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
                                split={[8, 1]}
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
