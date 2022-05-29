import classNames from 'classnames/bind';
import { BackIcon } from '~/components/Icons';
import styles from './GeneralHeaderMenu.module.scss';

const cx = classNames.bind(styles);

function GeneralHeaderMenu({ title, onBack }) {
    return (
        <header className={cx('wrapper')}>
            <span className={cx('icon')} onClick={onBack}>
                <BackIcon />
            </span>
            <h4 className={cx('title')}>{title}</h4>
        </header>
    );
}

export default GeneralHeaderMenu;
