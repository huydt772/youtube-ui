import classNames from 'classnames/bind';
import { useState } from 'react';
import { images } from '~/assets/images';
import styles from './Image.module.scss';

const cx = classNames.bind(styles);

function Image({
    src,
    alt,
    className,
    fallback: customFallback = images.noImage,
    ...props
}) {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(customFallback);
    };

    return (
        <img
            className={cx('wrapper', className)}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
}

export default Image;
