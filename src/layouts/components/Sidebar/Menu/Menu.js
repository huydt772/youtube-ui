import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import Button from '~/components/Button';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function Menu({ items, active, heading, lessPadding = false, onActive }) {
    return (
        <div
            className={cx('wrapper', {
                block: lessPadding,
            })}
        >
            {heading && <h3 className={cx('heading')}>{heading}</h3>}

            {items.map((item, index) => {
                const Icon = item.icon;

                return (
                    <Button
                        key={index}
                        className={cx('item', {
                            active: active === item.title,
                        })}
                        to={item.to}
                        title={`${item.title}`}
                        leftIcon={item.icon && <Icon solidIcon={active === item.title} />}
                        image={item.image}
                        onClick={() => onActive(item.title)}
                    >
                        {item.title}
                    </Button>
                );
            })}
        </div>
    );
}

Menu.propTypes = {
    items: PropTypes.array.isRequired,
    active: PropTypes.string,
    heading: PropTypes.string,
    lessPadding: PropTypes.bool,
    onActive: PropTypes.func,
};

export default Menu;
