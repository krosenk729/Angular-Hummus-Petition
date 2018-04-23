webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- https://github.com/stolenng/Angular2Firebase/tree/master/src/app -->\n<!-- https://github.com/stolenng/Angular2Firebase/ -->\n<app-login></app-login>\n<div class=\"container root\">\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_auth_service__ = __webpack_require__("../../../../../src/app/shared/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_hummus_service__ = __webpack_require__("../../../../../src/app/shared/hummus.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__welcome_welcome_component__ = __webpack_require__("../../../../../src/app/welcome/welcome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__hummushome_hummushome_component__ = __webpack_require__("../../../../../src/app/hummushome/hummushome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shared_aggregator_pipe__ = __webpack_require__("../../../../../src/app/shared/aggregator.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// Firebase 



// Enviornment

// Modules


// Components 





var routes = [
    { path: 'hummus', component: __WEBPACK_IMPORTED_MODULE_14__hummushome_hummushome_component__["a" /* HummushomeComponent */] },
    { path: 'hummus/:id', component: __WEBPACK_IMPORTED_MODULE_14__hummushome_hummushome_component__["a" /* HummushomeComponent */] },
    { path: 'welcome', component: __WEBPACK_IMPORTED_MODULE_13__welcome_welcome_component__["a" /* WelcomeComponent */] },
    { path: '**', redirectTo: 'welcome' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_12__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_13__welcome_welcome_component__["a" /* WelcomeComponent */],
                __WEBPACK_IMPORTED_MODULE_14__hummushome_hummushome_component__["a" /* HummushomeComponent */],
                __WEBPACK_IMPORTED_MODULE_15__shared_aggregator_pipe__["a" /* AggregatorPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_5_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_8__environments_environment__["a" /* environment */].firebase),
                __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(routes)
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__shared_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_10__shared_hummus_service__["a" /* HummusService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/hummushome/hummushome.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card-image{\r\n\tmax-width: 250px;\r\n}\r\n.card.hummus-card{\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-pack: justify;\r\n\t    -ms-flex-pack: justify;\r\n\t        justify-content: space-between;\r\n\t-webkit-box-align: center;\r\n\t    -ms-flex-align: center;\r\n\t        align-items: center;\r\n}\r\n@media screen and (max-width: 600px){\r\n\t.card.hummus-card{\r\n\t\t-ms-flex-wrap: wrap;\r\n\t\t    flex-wrap: wrap;\r\n\t\ttext-align: center;\r\n\t}\r\n\t.card.hummus-card .card-image{\r\n\t\t-ms-flex-preferred-size: 100%;\r\n\t\t    flex-basis: 100%;\r\n\t\tmax-width: none;\r\n\t\tmax-height: 160px;\r\n\t\toverflow: hidden;\r\n\t}\r\n}\r\n.card.hummus-card .card-content{\r\n\tpadding: 0 24px;\r\n}\r\n.vote-btn{\r\n\tbackground: #eceff1;\r\n\tborder: 2px solid #eceff1;\r\n\tcolor: #90a4ae;\r\n\theight: auto;\r\n}\r\n.voted{\r\n\tbackground: #2bbbad;\r\n\tborder: 2px solid #2bbbad;\r\n\tcolor: white;\r\n}\r\n.share-block{\r\n\ttext-align: center;\r\n\tmargin-bottom: 1.5em;\r\n}\r\n.sign-form{\r\n\tmargin-bottom: 2.5em;\r\n}\r\ninput#name{\r\n\tdisplay: block;\r\n\tmax-width: 550px;\r\n}\r\n.error-text{\r\n\tcolor: red;\r\n\tdisplay: inline;\r\n\tpadding-left: 8px;\r\n\tcolor: #c2185b;\r\n}\r\n.form-btn-wrap{\r\n\tmargin: 1em;\r\n}\r\n.radio-wrap{\r\n\tdisplay: inline;\r\n\tpadding-right: .9em;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/hummushome/hummushome.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container hummus-home-page\">\n\t<div *ngIf=\"cached_user && !cached_user.hasSigned\" class=\"sign-form\">\n\t\t<h3>Sign <span class=\"emoji\">🖊</span></h3>\n\t\t<h5>In Support of a Hummus Emoji</h5>\n\t\t<form (ngSubmit)=\"userSign()\" #hummusForm=\"ngForm\">\n\t\t\t<label for=\"name\">Your Full Name</label>\n\t\t\t<div [hidden]=\"name.valid || name.pristine\" class=\"error-text\">Name is required</div>\n\t\t\t<input type=\"text\" [(ngModel)]=\"cached_user.signedName\" #name=\"ngModel\" name=\"name\" placeholder=\"{{cached_user.signedName || cached_user.name}}\" id=\"name\" required>\n\t\t\t<label>Do you want there to be a hummus emoji?</label>\n\t\t\t<div>\n\t\t\t\t<div class=\"radio-wrap\">\n\t\t\t\t\t<input #yes name=\"emoji-vote\" type=\"radio\" value=\"yes\" (click)=\"cached_user.signedVote = yes.value\" id=\"vote-yes\" selected required>\n\t\t\t\t\t<label for=\"vote-yes\">Yes</label>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"radio-wrap\">\n\t\t\t\t\t<input #no name=\"emoji-vote\" type=\"radio\" value=\"no\" (click)=\"cached_user.signedVote = no.value\" id=\"vote-no\">\n\t\t\t\t\t<label for=\"vote-no\">No</label>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"form-btn-wrap center\">\n\t\t\t\t<button class=\"waves-effect waves-light btn\">Sign Petition</button>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n\t<div *ngIf=\"cached_user && cached_user.hasSigned\" class=\"center\">\n\t\t<h4>Thanks Being a Hummus Emoji Voter</h4>\n\t\t<p>While we only allow one signature per user, we do allow lots and lots of sharing. Spread the word on social:</p>\n\t\t<div class=\"share-block\">\n\t\t\t<a class=\"btn btn-social-icon btn-facebook share s_facebook\"><span class=\"fa fa-facebook\"></span></a>\n\t\t\t<a class=\"btn btn-social-icon btn-twitter\"><span class=\"fa fa-twitter\"></span></a>\n\t\t\t<a class=\"btn btn-social-icon btn-google\"><span class=\"fa fa-google\"></span></a>\n\t\t</div>\n\t</div>\n\t<div class=\"divider\"></div>\n\t<div *ngIf=\"hummuses\" class=\"vote-container\">\n\t\t<h4>Vote For Your Fave Hummus</h4>\n\t\t<p>What else are you going to do while waiting for your hummus emoji?</p>\n\t\t<div *ngFor=\"let hummus of hummuses | async\" class=\"card hummus-card\">\n\t\t\t<div class=\"card-content\">\n\t\t\t\t<h3>{{hummus.name}}</h3>\n\t\t\t\t<button class=\"btn vote-btn\" [class.voted]=\"hummus.votes[cached_user.id] === 1\" (click)=\"userVote( hummus.name, 1 )\"><span class=\"emoji\">👍</span> Love It\n\t\t\t\t</button>\n\t\t\t\t<button class=\"btn vote-btn\" [class.voted]=\"hummus.votes[cached_user.id] === -1\" (click)=\"userVote( hummus.name, -1)\"><span class=\"emoji\">👎</span> Skip It\n\t\t\t\t</button>\n\t\t\t\t<h6>Votes: {{ hummus.votes | aggregator }}</h6>\n\t\t\t</div>\n\t\t\t<div class=\"card-image\">\n\t\t\t\t<img [src]=\"hummus.img\">\n\t\t\t</div>\n\t\t</div> <!-- card -->\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/hummushome/hummushome.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HummushomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_hummus_service__ = __webpack_require__("../../../../../src/app/shared/hummus.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Services

var HummushomeComponent = /** @class */ (function () {
    function HummushomeComponent(rtd, route, db) {
        this.rtd = rtd;
        this.route = route;
        this.db = db;
    }
    HummushomeComponent.prototype.ngOnInit = function () {
        this.getUser();
        this.getHummus();
    };
    HummushomeComponent.prototype.getHummus = function () {
        this.hummuses = this.db.list('hummuses').valueChanges();
    };
    HummushomeComponent.prototype.getUser = function () {
        var _this = this;
        // Get UID from parameter 
        var paramId = this.route.snapshot.paramMap.get('id');
        // Cache User in Component
        this.db.object("users/" + paramId).snapshotChanges().subscribe(function (action) {
            console.log('action type', action.type);
            console.log('action key', action.key);
            console.log('action payload', action.payload.val());
            _this.cached_user = action.payload.val();
        });
        this.user = this.db.object("users/" + paramId).valueChanges();
    };
    HummushomeComponent.prototype.userSign = function () {
        if (!this.cached_user.signedName || !this.cached_user.signedVote) {
            return '';
        }
        console.log('calling on submit with...', this.cached_user);
        this.cached_user.hasSigned = true;
        this.rtd.updateUser(this.cached_user.id, this.cached_user);
    };
    HummushomeComponent.prototype.userVote = function (hummid, val) {
        console.log(hummid);
        this.db.object("hummuses/" + hummid + "/votes").update((_a = {},
            _a[this.cached_user.id] = val,
            _a));
        var _a;
    };
    HummushomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-hummushome',
            template: __webpack_require__("../../../../../src/app/hummushome/hummushome.component.html"),
            styles: [__webpack_require__("../../../../../src/app/hummushome/hummushome.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__shared_hummus_service__["a" /* HummusService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], HummushomeComponent);
    return HummushomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nav-wrapper{\r\n\tpadding-left: .5em;\r\n\tpadding-right: .5em;\r\n}\r\n\r\nheader{\r\n\tbackground: #ee6e73;\r\n\tcolor: #ffffff;\r\n\twidth: 100%;\r\n}\r\n\r\n.header-wrapper{\r\n\tpadding: 1.5em;\r\n}\r\n\r\nh1{\r\n\tfont-size: 3.8rem;\r\n}\r\n\r\n@media screen and (max-width: 600px){\r\n\tnav{\r\n\t\theight: 100%;\r\n\t}\r\n\t.nav-wrapper{\r\n\t\tdisplay: -webkit-box;\r\n\t\tdisplay: -ms-flexbox;\r\n\t\tdisplay: flex;\r\n\t\t-webkit-box-orient: vertical;\r\n\t\t-webkit-box-direction: normal;\r\n\t\t    -ms-flex-direction: column;\r\n\t\t        flex-direction: column;\r\n\t}\r\n\t.brand-logo{\r\n\t\tposition: relative;\r\n\t\ttext-align: center;\r\n\t\tfont-size: 16px;\r\n\t}\r\n\tul.right{\r\n\t\tmargin: 0 auto;\r\n\t}\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<nav *ngIf=\"isLoggedIn && user_cache.name \">\n  <div class=\"nav-wrapper\">\n     <a href=\"#\" class=\"brand-logo\">Logged in: {{user_cache.name}}</a>\n     <ul class=\"right\">\n        <li><button class=\"waves-effect waves-light btn\" (click)=\"logout()\">Log Out</button></li>\n      </ul>\n  </div>\n</nav>\n<header *ngIf=\"!isLoggedIn && !user_cache.name\" class=\"login-page\">\n  <div class=\"header-wrapper center\">\n    <h1>The <span class=\"emoji\">🌍</span> Needs a Hummus Emoji</h1>\n    <h4>Sign In To Sign <span class=\"emoji\">🖊</span></h4>\n    <h4>the Hummus Emoji Petition</h4>\n    <button class=\"waves-effect waves-light btn\" (click)=\"login()\">Login With Google</button>\n  </div>\n</header>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_auth_service__ = __webpack_require__("../../../../../src/app/shared/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_hummus_service__ = __webpack_require__("../../../../../src/app/shared/hummus.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Services


var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, rdt, router) {
        var _this = this;
        this.authService = authService;
        this.rdt = rdt;
        this.router = router;
        this.user_cache = {
            id: '',
            name: '',
            email: '',
            img: ''
        };
        this.authService.afAuth.auth.onAuthStateChanged(function (auth) {
            if (!auth) {
                //console.log('logged out');
                _this.isLoggedIn = false;
                _this.user_cache = {
                    id: '',
                    name: '',
                    email: '',
                    img: ''
                };
                //console.log('routing to welcome');
                _this.router.navigate(['/welcome']);
            }
            else {
                //console.log('logged in', auth);
                _this.isLoggedIn = true;
                _this.user_cache = {
                    id: auth.uid,
                    name: auth.displayName,
                    email: auth.email,
                    img: auth.photoURL
                };
                //console.log('routing to ...', this.user_cache.id);
                _this.rdt.updateUser(_this.user_cache.id, _this.user_cache);
                _this.router.navigate(['/hummus', { id: _this.user_cache.id }]);
            }
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.authService.loginWithGoogle().then(function (data) {
            _this.router.navigate(['hummus/', { id: _this.user_cache.id }]);
        });
    };
    LoginComponent.prototype.logout = function () {
        var _this = this;
        this.authService.logout().then(function (data) {
            _this.router.navigate(['welcome']);
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__shared_hummus_service__["a" /* HummusService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/aggregator.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AggregatorPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AggregatorPipe = /** @class */ (function () {
    function AggregatorPipe() {
    }
    AggregatorPipe.prototype.transform = function (votes) {
        var totalVotes = 0;
        for (var i in votes) {
            totalVotes += votes[i];
        }
        return totalVotes;
    };
    AggregatorPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'aggregator',
            pure: false
        })
    ], AggregatorPipe);
    return AggregatorPipe;
}());



/***/ }),

/***/ "../../../../../src/app/shared/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__("../../../../firebase/app/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { AngularFireDatabase } from 'angularfire2/database';
//import { AngularFirestore } from 'angularfire2/firestore';


var AuthService = /** @class */ (function () {
    function AuthService(afAuth) {
        this.afAuth = afAuth;
    }
    AuthService.prototype.loginWithGoogle = function () {
        return this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].GoogleAuthProvider());
    };
    AuthService.prototype.logout = function () {
        return this.afAuth.auth.signOut();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/hummus.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HummusService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HummusService = /** @class */ (function () {
    function HummusService(db) {
        this.db = db;
    }
    HummusService.prototype.getUser = function (userid) {
        var observeUser, returnUser;
        //console.log('looking for user userid', userid);
        this.db.object("users/" + userid).snapshotChanges().subscribe(function (action) {
            returnUser = action.payload.val();
        });
        observeUser = this.db.object("users/" + userid).valueChanges();
        return [observeUser, returnUser];
    };
    HummusService.prototype.updateUser = function (userid, user) {
        if (userid && user) {
            this.db.object("users/" + userid).update(user.valueOf());
        }
    };
    HummusService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], HummusService);
    return HummusService;
}());



/***/ }),

/***/ "../../../../../src/app/welcome/welcome.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".welcome-flyer .emoji{\r\n\tfont-size: 3.7em;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/welcome/welcome.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"welcome-flyer center\">\n<span class=\"emoji\">\n🤷 🥕 👋\n</span>\n<h4>100% of Communication</h4>\nThat's right, one hundred percent of communications could benefit from a hummus emoji. Think about the change a hummus emoji could make in that work email you are about to send, or with utility bills coming in the mail. How about the text message from your ex at 2am? With an all-encompassing hummus emoji, every scenario could be improved and result in better communication. \n<br>\n<span class=\"emoji\">\n😱 🛰 🙈\n</span>\n<h4>Did Someone Say Dark Ages?</h4>\n<a href=\"https://trends.google.com/trends/explore?q=hummus%20emoji\" target=\"_blank\">Google Trends</a> will not even graph search trends for 'hummus emoji' -- there is so little data to return. Over three billion Google searches happen every day and yet almost none of those are for hummus emojis. As a hummus-loving species in 2018, are we supposed to accept that? \n<br>\n<span class=\"emoji\">\n🎍 🌟 💍\n</span>\n<h4>Spread Hummus: Not Hate</h4>\nYou have the power to be the change you want to see in the emoji keybord. Take action and sign the petition for a hummus emoji. \n<br>\n<span class=\"emoji\">\n🥦 🍴 💯\n</span>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/welcome/welcome.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent() {
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    WelcomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-welcome',
            template: __webpack_require__("../../../../../src/app/welcome/welcome.component.html"),
            styles: [__webpack_require__("../../../../../src/app/welcome/welcome.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyBnmTvL6c9A1SGYnyQY683TbSp5u9Rd-Zc",
        authDomain: "friendlychat-8d7a5.firebaseapp.com",
        databaseURL: "https://friendlychat-8d7a5.firebaseio.com",
        projectId: "friendlychat-8d7a5",
        storageBucket: "friendlychat-8d7a5.appspot.com",
        messagingSenderId: "755882330810"
    }
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map