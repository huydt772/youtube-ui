import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
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
    CheckIcon,
    CreateIcon,
    DataIcon,
    FeedbackIcon,
    HelpIcon,
    KeyboardIcon,
    LanguageIcon,
    LiveIcon,
    LocationIcon,
    MenuIcon,
    NotifyIcon,
    PurchasesIcon,
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
import Menu from '~/components/Popper/Menu';
import Search from '../Search';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

const SETTING_ITEMS = [
    {
        icon: <ThemeIcon />,
        title: 'Appearance: Device theme',
        rightIcon: <ArrowIcon />,
        children: {
            title: 'Appearance',
            data: [
                {
                    icon: <CheckIcon />,
                    title: 'Use device theme',
                },
                {
                    title: 'Dark theme',
                },
                {
                    title: 'Light theme',
                },
            ],
        },
    },
    {
        icon: <LanguageIcon />,
        title: 'Language: English',
        rightIcon: <ArrowIcon />,
        children: {
            title: 'Choose your language',
            data: [
                {
                    icon: <CheckIcon />,
                    title: 'English (US)',
                },
                {
                    title: 'Tiếng Việt',
                },
                {
                    title: 'Türkçe',
                },
                {
                    title: 'Português',
                },
                {
                    title: 'Français',
                },
                {
                    title: 'Español (España)',
                },
                {
                    title: '中文 (简体)',
                },
                {
                    title: '한국어',
                },
            ],
        },
    },
    {
        icon: <LocationIcon />,
        title: 'Location: Vietnam',
        rightIcon: <ArrowIcon />,
        children: {
            title: 'Choose your location',
            data: [
                {
                    icon: <CheckIcon />,
                    title: 'Vietnam',
                },
                {
                    title: 'Australia',
                },
                {
                    title: 'South Korea',
                },
                {
                    title: 'Russia',
                },
                {
                    title: 'Japan',
                },
                {
                    title: 'France',
                },
                {
                    title: 'Canada',
                },
                {
                    title: 'Thailand',
                },
            ],
        },
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
    const currentUser = true;

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

                <Search />

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
                                userLogin={currentUser}
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
                                width="300px"
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
