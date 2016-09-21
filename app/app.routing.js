"use strict";
var router_1 = require('@angular/router');
var dashboard_component_1 = require('./dashboard/dashboard.component');
var home_component_1 = require('./home/home.component');
var cources_component_1 = require('./courses/cources.component');
var cource_detail_component_1 = require('./courses/cource-detail.component');
var aboutUs_component_1 = require('./aboutUs/aboutUs.component');
//index Route
var indexRoute = {
    path: '',
    component: dashboard_component_1.DashboardComponent
};
//fallback Route
var fallbackRoute = {
    path: '**',
    component: dashboard_component_1.DashboardComponent
};
//shell Route
var courcesRoutes = [
    {
        path: 'cources',
        component: cources_component_1.CourcesComponent
    },
    {
        path: 'cource/:id',
        component: cource_detail_component_1.CourceDetailComponent
    }
];
var appRoutes = [
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: 'home',
        component: home_component_1.HomeComponent
    },
    {
        path: 'cources',
        children: [
            {
                path: '',
                component: cources_component_1.CourcesComponent,
            },
            {
                path: ':id',
                component: cource_detail_component_1.CourceDetailComponent,
            },
        ]
    },
    {
        path: 'aboutUs',
        component: aboutUs_component_1.AboutUsComponent
    },
    indexRoute,
    fallbackRoute //for unknow route, always apply in last because having top priority.
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map