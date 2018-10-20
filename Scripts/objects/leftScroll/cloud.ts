module leftObjects {
    export class Cloud extends objects.GameObject {
        // private instance variables
        private _verticalSpeed:number;
        private _horizontalSpeed:number;

        // public properties

        // constructor
        constructor() {
            super("cloud", -90);

            this.Start();
        }

        // private methods
        private _move():void {
            this.y += this._verticalSpeed;
            this.x += this._horizontalSpeed;
            this._updatePosition();
        }

        private _checkBounds():void {
            if(this.x > 640 + this.Width) {
                this.Reset();
            }
        }

        // public methods

        public Reset(): void {
            this._horizontalSpeed = Math.floor((Math.random() * 5) + 5);
            this._verticalSpeed = Math.floor((Math.random() * 4) - 2);
            this.x = -this.Width;
            this.y = Math.floor((Math.random() * (480 - this.Height)) + this.HalfHeight);
            this.IsColliding = false;
        }        
        
        public Start(): void {
            this.regX = this.HalfWidth;
            this.regY = this.HalfHeight;
            this.Reset();
        }

        public Update(): void {
            this._move();
            this._checkBounds();
        }

        public Destroy(): void {
        }
    }
}