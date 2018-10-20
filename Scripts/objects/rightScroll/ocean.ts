module rightObjects {
    export class Ocean extends objects.GameObject {
        // private instance variables
        private _speed:number;

        // public properties

        // constructor
        constructor() {
            super("ocean", 90);

            this.Start();
        }

        // private methods
        private _checkBounds():void {
            if(this.x <= 5) {
                this.Reset();
            }
        }

        private _move():void {
            this.x -= this._speed;
        }

        // public methods

        public Reset(): void {
            this.x = 2080;
        }        
        
        public Start(): void {
            this.x = 1440;
            this._speed = 5; // 5 px per frame
        }

        public Update(): void {
            this._move();
            this._checkBounds();
        }

        public Destroy(): void {
            
        }

    }
}