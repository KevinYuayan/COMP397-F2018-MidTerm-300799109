namespace scenes {
  export class Level2 extends objects.Scene {
    // private instance variable
    private _player: rightObjects.Player;
    private _ocean2: rightObjects.Ocean;
    private _ocean: rightObjects.Ocean;
    private _island: rightObjects.Island;


    private _cloudNum: number;
    private _clouds: rightObjects.Cloud[];

    private _engineSound: createjs.AbstractSoundInstance;

    // public properties

    // constructor
    constructor() {
      console.log("level 2");
      super();

      this.Start();
    }

    // private methods

    // public methods

    public Start(): void {
      this._cloudNum = 2;


      // Instantiates a new Array container of Type objects.Cloud
      this._clouds = new Array<rightObjects.Cloud>();

      // Fill the Cloud Array with Clouds
      for (let count = 0; count < this._cloudNum; count++) {
        this._clouds[count] = new rightObjects.Cloud();
      }

      // play background engine sound when the level starts
      this._engineSound = createjs.Sound.play("engineSound");
      this._engineSound.volume = 0.1;
      this._engineSound.loop = -1; // loop forever

      this.Main();
    }

    public Update(): void {
      this._player.Update();
      this._island.Update();

      // updates ocean 1
      if (this._ocean.x >= 1440 || this._ocean.x <= 640) {
        this._ocean2.Update();
      }

      // updates ocean 2
      if (this._ocean2.x >= 1440 || this._ocean2.x <= 640) {
        this._ocean.Update();
      }

      // check if player and island are colliding
      managers.Collision.Check(this._player, this._island);

      // Update Each cloud in the Cloud Array
      this._clouds.forEach(cloud => {
        cloud.Update();
        managers.Collision.Check(this._player, cloud);
      });
    }

    public Destroy(): void {
      this.removeAllChildren();
      this._engineSound.stop();
    }

    public Reset(): void { }

    public Main(): void {
      // adds ocean to the scene
      this._ocean = new rightObjects.Ocean();
      this.addChild(this._ocean);

      this._ocean2 = new rightObjects.Ocean();
      this._ocean2.Reset();
      this.addChild(this._ocean2);

      // adds island to the scene
      this._island = new rightObjects.Island();
      this.addChild(this._island);

      // adds player to the scene
      this._player = new rightObjects.Player();
      this.addChild(this._player);

      // adds Each Cloud in the Cloud Array to the Scene
      this._clouds.forEach(cloud => {
        this.addChild(cloud);
      });

      // add ScoreBoard UI to the Scene
      managers.Game.scoreBoard.AddGameUI(this);
    }
  }
}
