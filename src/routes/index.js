// Layouts
import { HeaderOnly } from '~/components/Layouts';

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
    { path: '/', component: Home },
    { path: '/explore', component: Explore },
    { path: '/search', component: Search },
    { path: '/settings', component: Settings, layout: HeaderOnly },
    { path: '/shorts', component: Shorts },
    { path: '/subscriptions', component: Subscriptions },
    { path: '/library', component: Library },
    { path: '/history', component: History },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
