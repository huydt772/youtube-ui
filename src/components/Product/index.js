import classNames from 'classnames/bind';
import Image from '~/components/Image';
import { MenuIcon, TickIcon } from '~/components/Icons';
import styles from './Product.module.scss';
import { Link } from 'react-router-dom';
import config from '~/config';

const cx = classNames.bind(styles);

function Product({ explorePage = false }) {
    return (
        <div
            className={cx('wrapper', {
                'explore-wrapper': explorePage,
            })}
        >
            <div
                className={cx('wrap-thumbnail', {
                    'explore-wrap-thumbnail': explorePage,
                })}
            >
                <Image
                    className={cx('thumbnail')}
                    src="https://i.ytimg.com/vi/tSEUq6Ql01Y/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCURVI7IhG1zJOst5Zk-AGde0yO8A"
                    alt="Men's Bay"
                />
                <span className={cx('time')}>4:20</span>
            </div>

            <div className={cx('body')}>
                <Link
                    to={config.routes.profile}
                    className={cx('avatar-link', {
                        'explore-avatar-link': explorePage,
                    })}
                >
                    <Image
                        className={cx('avatar')}
                        src="https://yt3.ggpht.com/zBUnmMo28sCLCYtBl2vSKdKHTFgrF6wGhs2N1SsWqbWu8ERcxto3FV5WcYprDc6hIdJwGOgk3q0=s68-c-k-c0x00ffffff-no-rj"
                        alt="Men's Bay"
                    />
                </Link>

                <div
                    className={cx('info', {
                        'explore-info': explorePage,
                    })}
                >
                    <div className={cx('wrap-title')}>
                        <h3
                            className={cx('title', {
                                'explore-title': explorePage,
                            })}
                        >
                            5 ĐIỀU ĐÀN ÔNG THẦM KÍN MUỐN VÀ CÁCH ĐỂ CÓ ĐƯỢC CHÚNG | Men's
                            Bay
                        </h3>
                        <span className={cx('menu-icon')}>
                            <MenuIcon />
                        </span>
                    </div>

                    <div
                        className={cx('wrap-name', {
                            'explore-wrap-name': explorePage,
                        })}
                    >
                        <p className={cx('name')}>Men's Bay</p>
                        <TickIcon width="1.4rem" height="1.4rem" />
                    </div>

                    <div
                        className={cx('wrap-view', {
                            'explore-wrap-view': explorePage,
                        })}
                    >
                        <p className={cx('view')}>169K views</p>
                        <p>4 days ago</p>
                    </div>

                    {explorePage && (
                        <p className={cx('desc')}>
                            Rất đáng khen ngợi Thầy trò u23 VN đã chới lối đá tấn công nức
                            lòng người hâm mộ VN.Tiếc là phòng ngự còn khá lỏng lẻo đặc
                            biệt thủ môn Văn Toản mắc lỗi sơ đẳng, biếu không U23 TL 1 bàn
                            dẫn đến tinh thần u23 dâng cao. Song Thái Lan với dàn cầu thủ
                            đá cho nước ngoài cũng bình thường.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Product;
