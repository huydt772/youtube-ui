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
import Profile from '~/pages/Profile';
import Watch from '~/pages/Watch';
import Gaming from '~/pages/Gaming';
import Live from '~/pages/Live';
import Sports from '~/pages/Sports';
import Report from '~/pages/Report';
import Upload from '~/pages/Upload';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.explore, component: Explore },
    { path: config.routes.search, component: Search },
    { path: config.routes.settings, component: Settings, layout: HeaderOnly },
    { path: config.routes.shorts, component: Shorts },
    { path: config.routes.subscriptions, component: Subscriptions },
    { path: config.routes.library, component: Library },
    { path: config.routes.history, component: History },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.watch, component: Watch, layout: HeaderOnly },
    { path: config.routes.gaming, component: Gaming },
    { path: config.routes.live, component: Live },
    { path: config.routes.sports, component: Sports },
    { path: config.routes.report, component: Report },
    { path: config.routes.upload, component: Upload },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
