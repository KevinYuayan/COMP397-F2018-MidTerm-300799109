namespace scenes {
  export class Level3 extends objects.Scene {
    // private instance variable
    private _player: leftObjects.Player;
    private _ocean2: leftObjects.Ocean;
    private _ocean: leftObjects.Ocean;
    private _island: leftObjects.Island;


    private _cloudNum: number;
    private _clouds: leftObjects.Cloud[];

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
      this._cloudNum = 3;


      // Instantiates a new Array container of Type objects.Cloud
      this._clouds = new Array<leftObjects.Cloud>();

      // Fill the Cloud Array with Clouds
      for (let count = 0; count < this._cloudNum; count++) {
        this._clouds[count] = new leftObjects.Cloud();
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
      if (this._ocean.x <= -800 || this._ocean.x >= 0) {
        this._ocean2.Update();
      }

      // updates ocean 2
      if (this._ocean2.x <= -800 || this._ocean2.x >= 0) {
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
      this._ocean = new leftObjects.Ocean();
      this.addChild(this._ocean);

      this._ocean2 = new leftObjects.Ocean();
      this._ocean2.Reset();
      this.addChild(this._ocean2);

      // adds island to the scene
      this._island = new leftObjects.Island();
      this.addChild(this._island);

      // adds player to the scene
      this._player = new leftObjects.Player();
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
