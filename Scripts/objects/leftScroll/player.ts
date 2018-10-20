module leftObjects {
    export class Player extends objects.GameObject {
        // private instance variables
        
        // public properties
        
        // constructors
        constructor() {
            super("plane", -90);

            this.Start();
        }

        // private methods

        // public methods
        public Start():void {
            this.regX = this.HalfWidth;
            this.regY = this.HalfHeight;

            this.x = 580;
        }

        public Update():void {
            this.y = managers.Game.stage.mouseY;
            this._updatePosition();

            // checks the right boundary
            if(this.y > 480 - this.HalfHeight) {
                this.y = 480 - this.HalfHeight;
            }

            // check the left boundary
            if(this.y < this.HalfHeight) {
                this.y = this.HalfHeight;
            }
        }

        public Reset():void {

        }

        public Destroy():void {
            
        }
    }
}