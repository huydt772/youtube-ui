import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import Button from '~/components/Button';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function Menu({ items, heading, lessPadding = false }) {
    return (
        <div
            className={cx('wrapper', {
                block: lessPadding,
            })}
        >
            {heading && <h3 className={cx('heading')}>{heading}</h3>}

            {items.map((item, index) => {
                const Icon = item.icon;

                let Comp;
                const props = {};

                if (item.to || item.pathname) {
                    Comp = NavLink;
                    props.to = item.pathname ? `/c${item.pathname}` : item.to;
                    props.className = (nav) =>
                        cx({
                            active: nav.isActive,
                        });
                } else {
                    Comp = Fragment;
                }

                return (
                    <Comp key={index} {...props}>
                        <Button
                            className={cx('item')}
                            title={`${item.title}`}
                            leftIcon={item.icon && <Icon solidIcon={window.location.pathname === item.to} />}
                            image={item.image}
                        >
                            {item.title}
                        </Button>
                    </Comp>
                );
            })}
        </div>
    );
}

Menu.propTypes = {
    items: PropTypes.array.isRequired,
    heading: PropTypes.string,
    lessPadding: PropTypes.bool,
};

export default Menu;
