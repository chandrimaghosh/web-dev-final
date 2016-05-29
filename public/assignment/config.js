/**
 * Created by chandrimaghosh on 5/26/16.
 */
(function () {
    angular
        .module("WebAppMaker")
        .config(Config);
    function Config($routeProvider)
    {
        $routeProvider
            .when("/", {
                templateUrl: "views/home.html"
            })

            .when("/login", {
                templateUrl: "views/user/login.view.client.html",
                controller:"LoginController",
                controllerAs:"model"

            })
            .when("/register", {
                templateUrl: "views/user/register.view.client.html",
                controller:"RegisterController",
                controllerAs:"model"

            })

            .when("/profile/:id", {
                templateUrl: "views/user/profile.view.client.html",
                controller:"ProfileController",
                controllerAs:"model"

            })

            .when("/user/:userId/website", {
                templateUrl: "views/website/website-list.view.client.html",
                controller: "WebsiteListController",
                controllerAs: "model"
            })

            .when("/user/:userId/website/:websiteId/page", {
                templateUrl: "views/page/page-list.view.client.html",
                controller: "PageListController",
                controllerAs: "model"
            })

            .when("/user/:userId/website/new", {
                templateUrl: "views/website/website-new.view.client.html",
                controller: "NewWebsiteController",
                controllerAs: "model"
            })

            .when("/user/:userId/website/:websiteId", {
                templateUrl: "views/website/website-edit.view.client.html",
                controller: "EditWebsiteController",
                controllerAs: "model"
            })


            .when("/user/:userId/website/:websiteId/page/new", {
                templateUrl: "views/page/page-new.view.client.html",
                controller: "NewPageController",
                controllerAs: "model"
            })

            .when("/user/:userId/website/:websiteId/page/:pageId", {
                templateUrl: "views/page/page-edit.view.client.html",
                controller: "EditPageController",
                controllerAs: "model"
            })



        .when("/user/:uid/website/:wid/page/:pid/widget", {
                templateUrl: "views/widget/widget-list.view.client.html",
                controller: "WidgetListController",
                controllerAs: "model"
            })
            .otherwise({
                redirectTo: "/login"
            });

    }

})();