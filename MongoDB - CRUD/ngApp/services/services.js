var productsapp;
(function (productsapp) {
    var Services;
    (function (Services) {
        var ProductService = (function () {
            function ProductService($resource) {
                this.ProductResource = $resource('/api/products');
            }
            ProductService.prototype.get = function (id) {
                return this.ProductResource.get({ id: id });
            };
            ProductService.prototype.list = function () {
                return this.ProductResource.query();
            };
            ProductService.prototype.save = function (product) {
                return this.ProductResource.save(product).$promise;
            };
            ProductService.prototype.remove = function (id) {
                return this.ProductResource.remove({ id: id }).$promise;
            };
            return ProductService;
        }());
        Services.ProductService = ProductService;
        angular.module('productsapp').service('productService', ProductService);
    })(Services = productsapp.Services || (productsapp.Services = {}));
})(productsapp || (productsapp = {}));
