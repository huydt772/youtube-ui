import classNames from 'classnames/bind';
import Product from '~/components/Product';
import styles from './Explore.module.scss';

const cx = classNames.bind(styles);

function Explore() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('grid')}>
                <div className={cx('row', 'no-gutters')}>
                    <div className={cx('col', 'l-10')}>
                        <Product explorePage />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Explore;
