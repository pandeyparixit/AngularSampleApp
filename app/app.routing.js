"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./home/home.component');
var cources_component_1 = require('./courses/cources.component');
var aboutUs_component_1 = require('./aboutUs/aboutUs.component');
var appRoutes = [
    {
        path: 'home',
        component: home_component_1.HomeComponent
    },
    {
        path: 'cources',
        component: cources_component_1.CourcesComponent
    },
    {
        path: 'aboutUs',
        component: aboutUs_component_1.AboutUsComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map