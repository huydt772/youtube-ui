import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import 'tippy.js/dist/tippy.css';

import Button from '~/components/Button';
import {
    AccountIcon,
    ArrowIcon,
    ChannelIcon,
    CheckIcon,
    DataIcon,
    FeedbackIcon,
    HelpIcon,
    KeyboardIcon,
    LanguageIcon,
    LocationIcon,
    MenuIcon,
    PurchasesIcon,
    SettingsIcon,
    SignOutIcon,
    ThemeIcon,
    UserIcon,
    YtStudioIcon,
} from '~/components/Icons';
import Image from '~/components/Image';
import Menu from '~/components/Popper/Menu';
import { signInWithGoogle } from '~/firebaseConfig';
import Apps from './Apps';
import Create from './Create';
import styles from './HeaderActions.module.scss';
import Notifications from './Notifications';

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
        to: '/c/Huydt772',
    },
    {
        icon: <PurchasesIcon />,
        title: 'Purchases and memberships',
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

function HeaderActions() {
    const currentUser = !!localStorage.getItem('name');

    return (
        <div className={cx('wrap-right')}>
            {currentUser ? (
                <>
                    <Create />
                    <Apps />
                    <Notifications />
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
                            src={localStorage.getItem('profilePic')}
                            alt={localStorage.getItem('name')}
                        />
                    </Menu>
                </>
            ) : (
                <>
                    <Apps />

                    <Menu width="300px" placement="bottom-end" items={SETTING_ITEMS} split={[8, 1]}>
                        <Tippy content="Settings" zIndex={99}>
                            <button className={cx('action-btn')}>
                                <MenuIcon />
                            </button>
                        </Tippy>
                    </Menu>

                    <Button primary leftIcon={<UserIcon />} className={cx('button')} onClick={signInWithGoogle}>
                        SIGN IN
                    </Button>
                </>
            )}
        </div>
    );
}

export default HeaderActions;
