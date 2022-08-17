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
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var User_1 = require("./User");
var Stock_1 = require("./Stock");
var Cart = /** @class */ (function () {
    function Cart() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Cart.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Cart.prototype, "total", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return Stock_1.default; }, function (product) { return product.carrinho; }),
        __metadata("design:type", Array)
    ], Cart.prototype, "produtos", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return User_1.default; }),
        (0, typeorm_1.JoinColumn)(),
        __metadata("design:type", User_1.default)
    ], Cart.prototype, "user", void 0);
    Cart = __decorate([
        (0, typeorm_1.Entity)("tb_shopCart")
    ], Cart);
    return Cart;
}());
exports.default = Cart;
