import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import { useState } from 'react';
import 'tippy.js/dist/tippy.css';

import { CreateIcon, LiveIcon, UploadIcon } from '~/components/Icons';
import Menu from '~/components/Popper/Menu';
import styles from './HeaderActions.module.scss';

const cx = classNames.bind(styles);

const CREATE_ITEMS = [
    {
        icon: <UploadIcon />,
        title: 'Upload video',
        to: '/upload',
    },
    {
        icon: <LiveIcon />,
        title: 'Go live',
    },
];

function Create() {
    const [solidIcon, setSolidIcon] = useState(false);

    return (
        <Menu width="179px" placement="bottom-start" items={CREATE_ITEMS} onClickOutside={() => setSolidIcon(false)}>
            <Tippy content="Create" zIndex={99}>
                <button className={cx('action-btn')} onClick={() => setSolidIcon(!solidIcon)}>
                    <CreateIcon solidIcon={solidIcon} />
                </button>
            </Tippy>
        </Menu>
    );
}

export default Create;
