class block {
  constructor(x, y, width, height) {
    this.visiblity = 255;
    this.image = loadImage('block.png');
    this.body = Bodies.rectangle(x, y, width, height);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  display() {
    if (this.body.speed > 5) {
      World.remove(world, this.body);
      this.visiblity = this.visiblity - 5;
    }
    var angle = this.body.angle;
    var pos = this.body.position;
    if (this.visiblity >= 0) {
      push();
      translate(pos.x, pos.y);
      tint(255, this.visiblity);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
  }
}
