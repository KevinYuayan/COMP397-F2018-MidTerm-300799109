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
    var Player = /** @class */ (function (_super) {
        __extends(Player, _super);
        // private instance variables
        // public properties
        // constructors
        function Player() {
            var _this = _super.call(this, "plane", -90) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        Player.prototype.Start = function () {
            this.regX = this.HalfWidth;
            this.regY = this.HalfHeight;
            this.x = 580;
        };
        Player.prototype.Update = function () {
            this.y = managers.Game.stage.mouseY;
            this._updatePosition();
            // checks the right boundary
            if (this.y > 480 - this.HalfHeight) {
                this.y = 480 - this.HalfHeight;
            }
            // check the left boundary
            if (this.y < this.HalfHeight) {
                this.y = this.HalfHeight;
            }
        };
        Player.prototype.Reset = function () {
        };
        Player.prototype.Destroy = function () {
        };
        return Player;
    }(objects.GameObject));
    leftObjects.Player = Player;
})(leftObjects || (leftObjects = {}));
//# sourceMappingURL=player.js.map