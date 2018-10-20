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
var leftObjects;
(function (leftObjects) {
    var Cloud = /** @class */ (function (_super) {
        __extends(Cloud, _super);
        // public properties
        // constructor
        function Cloud() {
            var _this = _super.call(this, "cloud", -90) || this;
            _this.Start();
            return _this;
        }
        // private methods
        Cloud.prototype._move = function () {
            this.y += this._verticalSpeed;
            this.x += this._horizontalSpeed;
            this._updatePosition();
        };
        Cloud.prototype._checkBounds = function () {
            if (this.x > 640 + this.Width) {
                this.Reset();
            }
        };
        // public methods
        Cloud.prototype.Reset = function () {
            this._horizontalSpeed = Math.floor((Math.random() * 5) + 5);
            this._verticalSpeed = Math.floor((Math.random() * 4) - 2);
            this.x = -this.Width;
            this.y = Math.floor((Math.random() * (480 - this.Height)) + this.HalfHeight);
            this.IsColliding = false;
        };
        Cloud.prototype.Start = function () {
            this.regX = this.HalfWidth;
            this.regY = this.HalfHeight;
            this.Reset();
        };
        Cloud.prototype.Update = function () {
            this._move();
            this._checkBounds();
        };
        Cloud.prototype.Destroy = function () {
        };
        return Cloud;
    }(objects.GameObject));
    leftObjects.Cloud = Cloud;
})(leftObjects || (leftObjects = {}));
//# sourceMappingURL=cloud.js.map