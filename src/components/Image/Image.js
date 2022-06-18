import classNames from 'classnames/bind';
import { forwardRef, useState } from 'react';
import { images } from '~/assets/images';
import styles from './Image.module.scss';

const cx = classNames.bind(styles);

function Image(
    { src, alt, className, fallback: customFallback = images.noImage, ...props },
    ref,
) {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(customFallback);
    };

    return (
        <img
            ref={ref}
            className={cx('wrapper', className)}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
}

export default forwardRef(Image);
