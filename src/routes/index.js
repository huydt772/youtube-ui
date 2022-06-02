import config from '~/config';

// Layouts
import { HeaderOnly } from '~/layouts';

// Pages
import Home from '~/pages/Home';
import Explore from '~/pages/Explore';
import Search from '~/pages/Search';
import Settings from '~/pages/Settings';
import Shorts from '~/pages/Shorts';
import Subscriptions from '~/pages/Subscriptions';
import Library from '~/pages/Library';
import History from '~/pages/History';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.explore, component: Explore },
    { path: config.routes.search, component: Search },
    { path: config.routes.settings, component: Settings, layout: HeaderOnly },
    { path: config.routes.shorts, component: Shorts },
    { path: config.routes.subscriptions, component: Subscriptions },
    { path: config.routes.library, component: Library },
    { path: config.routes.history, component: History },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
