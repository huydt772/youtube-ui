import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import 'tippy.js/dist/tippy.css';

import { NotifyIcon } from '~/components/Icons';
import styles from './HeaderActions.module.scss';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Notifications() {
    const [solidIcon, setSolidIcon] = useState(false);

    return (
        <Tippy content="Notifications" zIndex={99}>
            <button className={cx('action-btn')} onClick={() => setSolidIcon(!solidIcon)}>
                <span className={cx('badge')}>9+</span>
                <NotifyIcon solidIcon={solidIcon} />
            </button>
        </Tippy>
    );
}

export default Notifications;
