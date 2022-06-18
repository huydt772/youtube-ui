import classNames from 'classnames/bind';
import MenuSidebar from './Menu';
import styles from './Sidebar.module.scss';
import config from '~/config';
import {
    AddIcon,
    ArrowDownIcon,
    ExploreIcon,
    FeedbackIcon,
    FlagIcon,
    GamingIcon,
    HelpIcon,
    HistoryIcon,
    HomeIcon,
    LibraryIcon,
    LikeIcon,
    LiveIcon,
    SettingsIcon,
    ShortsIcon,
    SubsIcon,
    TrophyIcon,
    UserIcon,
    VideoIcon,
    WatchIcon,
} from '~/components/Icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '~/components/Button';

const HOME = [
    {
        icon: HomeIcon,
        title: 'Home',
        to: config.routes.home,
    },
    {
        icon: ExploreIcon,
        title: 'Explore',
        to: config.routes.explore,
    },
    {
        icon: ShortsIcon,
        title: 'Shorts',
        to: config.routes.shorts,
    },
    {
        icon: SubsIcon,
        title: 'Subscriptions',
        to: config.routes.subscriptions,
    },
];

const LIBRARY = [
    {
        icon: LibraryIcon,
        title: 'Library',
        to: config.routes.library,
    },
    {
        icon: HistoryIcon,
        title: 'History',
        to: config.routes.history,
    },
];

const LIBRARY_LOGIN = [
    ...LIBRARY,
    {
        icon: VideoIcon,
        title: 'Your videos',
    },
    {
        icon: WatchIcon,
        title: 'Watch later',
    },
    {
        icon: LikeIcon,
        title: 'Liked videos',
    },
    {
        icon: ArrowDownIcon,
        title: 'Show more',
    },
];

const SUBSCRIPTIONS = [
    {
        image: 'https://yt3.ggpht.com/Y7ypZe5mKqqUxTGIAjI1Ng_DvP2_eDQDWvCWaTAfxxY4rYNtFxA5hf3PAw0YsAWfgQ_5jyPVQnA=s88-c-k-c0x00ffffff-no-rj',
        title: 'English Speeches',
        to: config.routes.profile,
    },
    {
        image: 'https://yt3.ggpht.com/wgneNTiW753q5G6XMnjyNLAzReR4TVFJryTKTpIqJefrKMyhABPwfnyNWIoT5NNGstFlva1tgw=s88-c-k-c0x00ffffff-no-rj',
        title: 'F8 Official',
        to: config.routes.profile,
    },
    {
        image: 'https://yt3.ggpht.com/dgZwDRAhI3JFzmKIQFr5OPemgZ2swu5QOyn1N58eSs4bLREQ1SMQ6AIwGLwajKwAClOSZKibwg=s88-c-k-c0x00ffffff-no-rj',
        title: 'FAP TV',
        to: config.routes.profile,
    },
    {
        image: 'https://yt3.ggpht.com/zBUnmMo28sCLCYtBl2vSKdKHTFgrF6wGhs2N1SsWqbWu8ERcxto3FV5WcYprDc6hIdJwGOgk3q0=s88-c-k-c0x00ffffff-no-rj',
        title: "Men's Bay",
        to: config.routes.profile,
    },
    {
        image: 'https://yt3.ggpht.com/QLk0PHIv9cFYiq03xr6gL67shtQ0vRDaTAz5WSpwSU3IEB005aZLbOnJ4rnF732VY7fgFszKig=s88-c-k-c0x00ffffff-no-rj',
        title: 'evondev',
        to: config.routes.profile,
    },
    {
        image: 'https://yt3.ggpht.com/ytc/AKedOLS0_8Eb99PwVL_DhysKXBT5zKiqbIhC5x2DnaaJmWQ=s88-c-k-c0x00ffffff-no-rj',
        title: 'Easy Frontend',
        to: config.routes.profile,
    },
    {
        icon: ArrowDownIcon,
        title: 'Show 43 more',
    },
];

const BEST_OF_YOUTUBE = [
    {
        image: 'https://yt3.ggpht.com/hJYteupJuM2N43U7LXb9lFLSxXwOZHlYwrv7oUwaXVvNtsDIxcZbWeHlL4erKyfJ4NMO_9wtOQ=s88-c-k-c0x00ffffff-no-rj',
        title: 'Music',
    },
    {
        image: 'https://yt3.ggpht.com/c58SswnJjLFeXoT1Wr4g-21fj3LWsmhxniA8xjLWF_8huAzREvLWm2F0DO_nXl0gBbCzqQkJvXc=s88-c-k-c0x00ffffff-no-rj',
        title: 'Sports',
    },
    {
        image: 'https://yt3.ggpht.com/E5kOP_y7U4cD0IiEwoWDnwB_h6UXyAIF1QSs9rHMjmBTceLRh2G6YJzEs1K5kew239sLvfqZ=s88-c-k-c0x00ffffff-no-rj',
        title: 'Gaming',
    },
    {
        image: 'https://yt3.ggpht.com/K9BzDvWNMKeg31sN74H_WGtYXsSBWNSF0OICeXPy4XGKksJt8RxFqgO2xTL1CPE4m4NfXgkkyA=s88-c-k-c0x00ffffff-no-rj',
        title: 'News',
    },
    {
        image: 'https://yt3.ggpht.com/8D6JlsnvwDZFMdcbjqVji82kggP3aXXbO-yBD0RFrKlp4G1zNt9wcqcVTSPnAI8GuUAbDYQwsg=s88-c-k-c0x00ffffff-no-rj',
        title: 'Live',
    },
    {
        image: 'https://yt3.ggpht.com/X-W0Y_Dde3x0AY8CL6Xv3ooxZ6f2zP2x4OD8Lcm8phN9c7APUHe3z4ThTethc5-cio93-Bgq=s88-c-k-c0x00ffffff-no-rj',
        title: '360° Video',
    },
];

const BROWSE_CHANNELS = [
    {
        icon: AddIcon,
        title: 'Browse channels',
    },
];

const MORE_FROM_YOUTUBE = [
    {
        icon: LiveIcon,
        title: 'Live',
        to: config.routes.live,
    },
];

const MORE_FROM_YOUTUBE_LOGIN = [
    {
        icon: GamingIcon,
        title: 'Gaming',
        to: config.routes.gaming,
    },
    ...MORE_FROM_YOUTUBE,
    {
        icon: TrophyIcon,
        title: 'Sports',
        to: config.routes.sports,
    },
];

const SETTINGS = [
    {
        icon: SettingsIcon,
        title: 'Settings',
        to: config.routes.settings,
    },
    {
        icon: FlagIcon,
        title: 'Report history',
        to: config.routes.report,
    },
    {
        icon: HelpIcon,
        title: 'Help',
    },
    {
        icon: FeedbackIcon,
        title: 'Send feedback',
    },
];

const cx = classNames.bind(styles);

function Sidebar() {
    const currentUser = true;
    const [active, setActive] = useState('Home');

    return (
        <div className={cx('wrapper')}>
            <MenuSidebar items={HOME} active={active} onActive={setActive} />

            <MenuSidebar
                items={currentUser ? LIBRARY_LOGIN : LIBRARY}
                lessPadding={!currentUser}
                active={active}
                onActive={setActive}
            />

            {currentUser ? (
                <>
                    <MenuSidebar
                        items={SUBSCRIPTIONS}
                        heading="Subscriptions"
                        lessPadding
                        active={active}
                        onActive={setActive}
                    />
                </>
            ) : (
                <>
                    <div className={cx('sign-in')}>
                        <p>Sign in to like videos, comment, and subscribe.</p>
                        <Button primary leftIcon={<UserIcon />} className={cx('button')}>
                            SIGN IN
                        </Button>
                    </div>
                    <MenuSidebar
                        items={BEST_OF_YOUTUBE}
                        heading="Best of YouTube"
                        lessPadding
                        active={active}
                        onActive={setActive}
                    />
                    <MenuSidebar
                        items={BROWSE_CHANNELS}
                        lessPadding
                        active={active}
                        onActive={setActive}
                    />
                </>
            )}

            <MenuSidebar
                items={currentUser ? MORE_FROM_YOUTUBE_LOGIN : MORE_FROM_YOUTUBE}
                heading="More from YouTube"
                lessPadding
                active={active}
                onActive={setActive}
            />

            <MenuSidebar
                items={SETTINGS}
                lessPadding
                active={active}
                onActive={setActive}
            />

            <footer className={cx('footer')}>
                <div className={cx('links-primary')}>
                    <a href="https://www.youtube.com/about/">About</a>
                    <a href="https://www.youtube.com/about/press/">Press</a>
                    <a href="https://www.youtube.com/about/copyright/">Copyright</a>
                    <Link to="/t/contact_us/">Contact us</Link>
                    <a href="https://www.youtube.com/creators/">Creators</a>
                    <a href="https://www.youtube.com/ads/">Advertise</a>
                    <a href="https://developers.google.com/youtube">Developers</a>
                </div>

                <div className={cx('links-secondary')}>
                    <Link to="/t/terms">Terms</Link>
                    <Link to="/t/privacy">Privacy</Link>
                    <a href="https://www.youtube.com/about/policies/">
                        Policy &amp; Safety
                    </a>
                    <a href="https://www.youtube.com/howyoutubeworks">
                        How YouTube works
                    </a>
                    <Link to="/new">Test new features</Link>
                </div>

                <p className={cx('copyright')}>© 2022 Google LLC</p>
            </footer>
        </div>
    );
}

export default Sidebar;
