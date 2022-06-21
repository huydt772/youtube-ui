import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import Button from '~/components/Button';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    const props = {
        to: data.to,
        href: data.href,
    };

    if (data.href) {
        props.target = '_blank';
    }

    return (
        <div className={cx('wrap-menu-item')} onClick={onClick}>
            <Button {...props} leftIcon={data.icon} className={cx('menu-item')}>
                {data.title}
            </Button>
            {data.rightIcon && <span className={cx('right-icon')}>{data.rightIcon}</span>}
        </div>
    );
}

MenuItem.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};

export default MenuItem;
