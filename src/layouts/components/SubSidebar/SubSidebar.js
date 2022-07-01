import classNames from 'classnames/bind';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExploreIcon, HomeIcon, LibraryIcon, ShortsIcon, SubsIcon } from '~/components/Icons';
import config from '~/config';
import styles from './SubSidebar.module.scss';

const cx = classNames.bind(styles);

const SIDEBAR_DATA = [
    {
        id: 1,
        title: 'Home',
        icon: HomeIcon,
        to: config.routes.home,
    },
    {
        id: 2,
        title: 'Explore',
        icon: ExploreIcon,
        to: config.routes.explore,
    },
    {
        id: 3,
        title: 'Shorts',
        icon: ShortsIcon,
        to: config.routes.shorts,
    },
    {
        id: 4,
        title: 'Subscriptions',
        icon: SubsIcon,
        to: config.routes.subscriptions,
    },
    {
        id: 5,
        title: 'Library',
        icon: LibraryIcon,
        to: config.routes.library,
    },
];

function SubSidebar() {
    const [solidIcon, setSolidIcon] = useState('Home');

    const handleSolidIcon = (title) => {
        setSolidIcon(title);
    };
    return (
        <div className={cx('wrapper')}>
            {SIDEBAR_DATA.map((item) => {
                const Icon = item.icon;
                return (
                    <Link
                        key={item.id}
                        className={cx('button-link')}
                        to={item.to}
                        title={item.title}
                        onClick={() => handleSolidIcon(item.title)}
                    >
                        <span className={cx('icon')}>
                            <Icon solidIcon={solidIcon === item.title} />
                        </span>
                        <span className={cx('title')}>{item.title}</span>
                    </Link>
                );
            })}
        </div>
    );
}

export default SubSidebar;
