import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { images } from '~/assets/images';
import Button from '~/components/Button';
import {
    AppsIcon,
    BarsIcon,
    CloseIcon,
    CreateIcon,
    MenuIcon,
    MicroPhoneIcon,
    NotifyIcon,
    SearchIcon,
    UserIcon,
} from '~/components/Icons';
import styles from './Header.module.scss';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

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
                <div className={cx('wrap-between')}>
                    <div className={cx('search')}>
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
                            <Tippy content="YouTube apps">
                                <button className={cx('action-btn')}>
                                    <AppsIcon />
                                </button>
                            </Tippy>
                            <Tippy content="Settings">
                                <button className={cx('action-btn')}>
                                    <MenuIcon />
                                </button>
                            </Tippy>
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
