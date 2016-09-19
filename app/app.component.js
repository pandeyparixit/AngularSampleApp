"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.title = "Parixit Angular App";
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <nav class=\"navbar navbar-inverse navbar-fixed-top\">\n      <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n          <a class=\"navbar-brand\" href=\"#\">Project name</a>\n        </div>\n        <div id=\"navbar\" class=\"navbar-collapse collapse\">\n          <ul class=\"nav navbar-nav navbar-right\">\n            <li><a href=\"#\">Dashboard</a></li>\n            <li><a routerLink=\"/home\">Home</a></li>\n            <li><a routerLink=\"/cources\">Cources</a></li>\n            <li> <a routerLink=\"/aboutUs\">AboutUs</a></li>\n          </ul>\n          <form class=\"navbar-form navbar-right\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Search...\">\n          </form>\n        </div>\n      </div>\n    </nav>\n   <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-sm-3 col-md-2 sidebar\">\n                    <ul class=\"nav nav-sidebar\">\n                        <li class=\"active\"><a href=\"#\">Overview <span class=\"sr-only\">(current)</span></a></li>\n                        <li><a href=\"#\">Reports</a></li>\n                        <li><a href=\"#\">Analytics</a></li>\n                        <li><a href=\"#\">Export</a></li>\n                   </ul>\n             </div>\n             <div class=\"col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main\">\n                <router-outlet></router-outlet>\n                <h2 class=\"sub-header\">Section title</h2>\n                <div class=\"table-responsive\">\n                <table class=\"table table-striped\">\n                 <thead>\n                    <tr>\n                        <th>#</th>\n                        <th>Header</th>\n                        <th>Header</th>\n                        <th>Header</th>\n                        <th>Header</th>\n                    </tr>\n                </thead>\n                 <tbody>\n                    <tr>\n                    <td>1,003</td>\n                    <td>Integer</td>\n                    <td>nec</td>\n                    <td>odio</td>\n                    <td>Praesent</td>\n                    </tr>\n                    <tr>\n                    <td>1,003</td>\n                    <td>libero</td>\n                    <td>Sed</td>\n                    <td>cursus</td>\n                    <td>ante</td>\n                    </tr>\n                 </tbody>\n                </table>\n            </div>\n        </div>\n    </div> \n ",
            styles: [
                "\n        .outlet-border{\n            border:1px solid red;\n        }\n     "
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map