import classNames from 'classnames/bind';
import Button from '~/components/Button';
import { SearchedIcon, SearchIcon } from '~/components/Icons';
import styles from './SearchResultItem.module.scss';

const cx = classNames.bind(styles);

function SearchResultItem({ content, searched }) {
    return (
        <div className={cx('wrapper')}>
            <Button
                className={cx('item')}
                leftIcon={
                    searched ? (
                        <SearchedIcon />
                    ) : (
                        <SearchIcon width="2rem" height="2rem" />
                    )
                }
            >
                {content}
            </Button>
            {searched && <span className={cx('remove-btn')}>Remove</span>}
        </div>
    );
}

export default SearchResultItem;
