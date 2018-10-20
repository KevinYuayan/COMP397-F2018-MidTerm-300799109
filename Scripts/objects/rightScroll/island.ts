module rightObjects {
    export class Island extends objects.GameObject {
        // private instance variables
        private _horizontalSpeed:number;

        // public properties

        // constructor
        constructor() {
            super("island", 90);

            this.Start();
        }

        // private methods
        private _move():void {
            this.x -= this._horizontalSpeed;
            this._updatePosition();
        }

        private _checkBounds():void {
            if(this.x < 0 - this.Width) {
                this.Reset();
            }
        }

        // public methods

        public Reset(): void {
            this._horizontalSpeed = 5;
            this.x = 640 + this.Height;
            this.y = Math.floor((Math.random() * (480 - this.Width)) + this.HalfWidth);
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