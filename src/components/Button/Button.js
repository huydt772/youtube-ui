import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import Image from '~/components/Image';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

const Button = forwardRef(
    (
        {
            to,
            href,
            children,
            primary = false,
            rounded = false,
            subscribe = false,
            small = false,
            leftIcon,
            rightIcon,
            image,
            className,
            onClick,
            ...passProps
        },
        ref,
    ) => {
        let Comp = 'button';

        const props = {
            onClick,
            ...passProps,
        };

        if (to) {
            props.to = to;
            Comp = Link;
        } else if (href) {
            props.href = href;
            Comp = 'a';
        }

        const classes = cx('wrapper', {
            primary,
            rounded,
            subscribe,
            small,
            [className]: className,
        });

        return (
            <Comp ref={ref} className={classes} {...props}>
                {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
                {image && <Image className={cx('image')} src={image} alt={children} />}
                <span className={cx('title')}>{children}</span>
                {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
            </Comp>
        );
    },
);

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    children: PropTypes.node.isRequired,
    primary: PropTypes.bool,
    rounded: PropTypes.bool,
    subscribe: PropTypes.bool,
    small: PropTypes.bool,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    image: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func,
};

export default Button;
