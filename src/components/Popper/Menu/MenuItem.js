import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function MenuItem({ data }) {
    const props = {
        to: data.to,
        href: data.href,
    };

    if (data.href) {
        props.target = '_blank';
    }

    return (
        <div className={cx('wrap-menu-item')}>
            <Button {...props} leftIcon={data.icon} className={cx('menu-item')}>
                {data.title}
            </Button>
            {data.rightIcon && <span className={cx('right-icon')}>{data.rightIcon}</span>}
        </div>
    );
}

export default MenuItem;
