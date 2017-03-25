var productsapp;
(function (productsapp) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController(productService) {
                this.productService = productService;
                this.products = productService.list();
            }
            HomeController.prototype.save = function () {
                var _this = this;
                this.productService.save(this.product).then(function () {
                    _this.products = _this.productService.list();
                    _this.product = null;
                });
            };
            HomeController.prototype.remove = function (id) {
                var _this = this;
                this.productService.remove(id).then(function () {
                    _this.products = _this.productService.list();
                });
            };
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
        var EditController = (function () {
            function EditController(productService, $state, $stateParams) {
                this.productService = productService;
                this.$state = $state;
                this.$stateParams = $stateParams;
                var productId = $stateParams['id'];
                this.product = productService.get(productId);
            }
            EditController.prototype.save = function () {
                var _this = this;
                this.productService.save(this.product).then(function () {
                    _this.$state.go('home');
                });
            };
            return EditController;
        }());
        Controllers.EditController = EditController;
        var AboutController = (function () {
            function AboutController() {
                this.message = 'Hello from the about page!';
            }
            return AboutController;
        }());
        Controllers.AboutController = AboutController;
    })(Controllers = productsapp.Controllers || (productsapp.Controllers = {}));
})(productsapp || (productsapp = {}));
