import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Button from '~/components/Button';
import { SearchedIcon, SearchIcon } from '~/components/Icons';
import styles from './SearchResultItem.module.scss';

const cx = classNames.bind(styles);

function SearchResultItem({ content, searched = false, active, onClick }) {
    return (
        <Link
            to={`/search?search_query=${content}`}
            className={cx('wrapper', {
                active,
            })}
            onClick={onClick}
        >
            <Button
                className={cx('item')}
                leftIcon={searched ? <SearchedIcon /> : <SearchIcon width="2rem" height="2rem" />}
            >
                {content}
            </Button>
            {searched && <span className={cx('remove-btn')}>Remove</span>}
        </Link>
    );
}

SearchResultItem.propTypes = {
    content: PropTypes.string.isRequired,
    searched: PropTypes.bool,
    active: PropTypes.bool,
    onClick: PropTypes.func,
};

export default SearchResultItem;
