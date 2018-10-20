var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var rightObjects;
(function (rightObjects) {
    var Ocean = /** @class */ (function (_super) {
        __extends(Ocean, _super);
        // public properties
        // constructor
        function Ocean() {
            var _this = _super.call(this, "ocean", 90) || this;
            _this.Start();
            return _this;
        }
        // private methods
        Ocean.prototype._checkBounds = function () {
            if (this.x <= 5) {
                this.Reset();
            }
        };
        Ocean.prototype._move = function () {
            this.x -= this._speed;
        };
        // public methods
        Ocean.prototype.Reset = function () {
            this.x = 2080;
        };
        Ocean.prototype.Start = function () {
            this.x = 1440;
            this._speed = 5; // 5 px per frame
        };
        Ocean.prototype.Update = function () {
            this._move();
            this._checkBounds();
        };
        Ocean.prototype.Destroy = function () {
        };
        return Ocean;
    }(objects.GameObject));
    rightObjects.Ocean = Ocean;
})(rightObjects || (rightObjects = {}));
//# sourceMappingURL=ocean.js.map