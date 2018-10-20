var managers;
(function (managers) {
    var Collision = /** @class */ (function () {
        function Collision() {
        }
        // private instance variables
        // public properties
        // constructor
        // private methods
        // public methods
        Collision.Check = function (object1, object2) {
            if (!object2.IsColliding) {
                var distance = util.Vector2.Distance(object1.Position, object2.Position);
                var totalDistance = void 0;
                if (managers.Game.currentState == config.Scene.PLAY) {
                    totalDistance = object1.HalfHeight + object2.HalfHeight;
                }
                else {
                    totalDistance = object1.HalfWidth + object2.HalfWidth;
                }
                // check if object 1 is colliding with object 2
                if (distance < totalDistance) {
                    object2.IsColliding = true;
                    switch (object2.name) {
                        case "island":
                            var yaySound = createjs.Sound.play("yaySound");
                            yaySound.volume = 0.1;
                            managers.Game.scoreBoard.Score += 100;
                            // TODO change back to 500 (100 is for testing)
                            if (managers.Game.scoreBoard.Score == 500) {
                                managers.Game.currentState = config.Scene.LEVEL2;
                            }
                            if (managers.Game.scoreBoard.Score == 1000) {
                                managers.Game.currentState = config.Scene.LEVEL3;
                            }
                            break;
                        case "cloud":
                            var thunderSound = createjs.Sound.play("thunderSound");
                            thunderSound.volume = 0.1;
                            managers.Game.scoreBoard.Lives -= 1;
                            if (managers.Game.scoreBoard.Lives <= 0) {
                                managers.Game.currentState = config.Scene.OVER;
                                if (managers.Game.scoreBoard.HighScore <= managers.Game.scoreBoard.Score) {
                                    managers.Game.scoreBoard.HighScore = managers.Game.scoreBoard.Score;
                                }
                            }
                            break;
                    }
                }
            }
        };
        return Collision;
    }());
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map