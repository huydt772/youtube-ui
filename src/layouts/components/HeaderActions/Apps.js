import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import { useState } from 'react';
import 'tippy.js/dist/tippy.css';

import { AppsIcon, YoutubeArtistsIcon, YoutubeKidsIcon, YoutubeMusicIcon, YoutubeTvIcon } from '~/components/Icons';
import Menu from '~/components/Popper/Menu';
import styles from './HeaderActions.module.scss';

const cx = classNames.bind(styles);

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

function Apps() {
    const [solidIcon, setSolidIcon] = useState(false);

    return (
        <Menu
            width="218px"
            placement="bottom-end"
            items={APP_ITEMS}
            split={[1, 2, 1]}
            onClickOutside={() => setSolidIcon(false)}
        >
            <Tippy content="YouTube apps" zIndex={99}>
                <button className={cx('action-btn')} onClick={() => setSolidIcon(!solidIcon)}>
                    <AppsIcon solidIcon={solidIcon} />
                </button>
            </Tippy>
        </Menu>
    );
}

export default Apps;
