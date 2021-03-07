class Box extends BaseClass {
  constructor(x, y, width, height, r, g, b) {
    var options = {
      'restitution': 0.8,
      'friction': 1.0,
      'density': 1.0,
      'isStatic': true
    }
    super(x, y, width, height, 0);
    this.red = r;
    this.green = g;
    this.blue = b;
    this.Visiblity = 255;
    this.colorArg = color(this.red, this.green, this.blue, this.Visiblity);
    //this.image = loadImage("sprites/wood1.png");
  }

  display() {
    if (this.body.speed < 3) {
      fill(this.colorArg);
      rect(this.body.position.x, this.body.position.y, this.width, this.height);
    } else {
      World.remove(world, this.body);
      push();
      this.Visibility = this.Visibility - 5;
      //this.color = rgb(r, g, b, this.Visiblity);
      fill(this.colorArg);
      pop();
      //console.log(this.Visiblity);
      
    }
    //console.log(this.Visiblity);
    //console.log(this.color);
    
  }

  score() {
    if (this.Visibility >= 105 && this.Visibility <= 255) {
      console.log(true);
      console.log(gameScore);
      gameScore++;
    }
    
  }

};
