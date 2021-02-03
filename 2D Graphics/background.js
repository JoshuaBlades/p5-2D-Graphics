//rect(x, y, w, h)
class Back {
  constructor() {
    var redCar = loadImage("images/redCar.png");
    var blueCar = loadImage("images/blueCar.png");
    var greenCar = loadImage("images/greenCar.png");
    var jet = loadImage("images/jet.png");
    var boat = loadImage("images/boat.png");
    var library = loadImage("images/library.png");
    var tree = loadImage("images/tree.png");
    var bigTree = loadImage("images/bigTree.png");
    var ufo = loadImage("images/ufo.png");
    var ufo2 = loadImage("images/ufo2.png");
    var ufo3 = loadImage("images/ufo3.png");
    var missile = loadImage("images/miss.png");
    var rx = 200;
    var bx = 300;
    var gx = 300;
    var jx = 0;
    var ux = 0;
    var mx = 0;
    var btx = 0;


    this.grass = function () {
      fill(10, 200, 50);
      rect(0, 400, 800, 350);
    };

    this.grass2 = function () {
      fill(10, 200, 50);
      rect(0, 120, 800, 200);
    };

    this.sky = function () {
      fill(135, 206, 255);
      rect(0, 0, 800, 250);
    };

    this.water = function () {
      fill(100, 100, 200);
      rect(0, 300, 800, 100);

    };

    this.road = function () {
      fill(51);
      rect(0, 500, 800, 100);
      var x = 0;
      for (var i = 0; i < 7; i++) {
        fill(255);
        rect(x, 540, 80, 10);
        x += 120;
      }
    };


    this.redCar = function () {
      image(redCar, rx, 520, redCar.width * 2, redCar.height * 2);
      rx += -5;
      if (rx === -100) {
        rx = 900;
      }
    };

    this.blueCar = function () {
      image(blueCar, bx, 520, blueCar.width * 2, blueCar.height * 2);
      bx += -5;
      if (bx === -100) {
        bx = 900;
      }
    };

    this.greenCar = function () {
      image(greenCar, gx, 480, greenCar.width * 2, greenCar.height * 2);
      gx += 5;
      if (gx === 900) {
        gx = -100;
      }
    };

    this.ufo = function () {
      image(ufo2, ux + -500, 80);
      ux += -10;
      if (ux === -300) {
        ux = 1500;
      }
    };

    this.jet = function () {
      image(jet, jx, 100, jet.width * 2, jet.height * 2);
      image(jet, jx + 100, 150, jet.width * 2, jet.height * 2);
      image(jet, jx + 100, 50, jet.width * 2, jet.height * 2);
      image(jet, jx + 180, 100, jet.width * 2, jet.height * 2);
      jx += -10;
      if (jx === -300) {
        jx = 1500;
      }
    };

    this.missile = function () {
      image(missile, mx + 20, 150, missile.width / 12, missile.height / 12);
      image(missile, mx + 120, 198, missile.width / 12, missile.height / 12);
      mx += -10;
      if (mx === -300) {
        mx = 1500;
      }
    };

    this.boat = function () {
      image(boat, btx + 900, 270, boat.width * 1.4, boat.height * 1.4);
      btx += -1;
      if (btx === -1100) {
        btx = 850;
      }
    };

    this.library = function () {
      image(library, 350, 150, library.width * 1.4, library.height * 1.4);
    };

    this.sun = function () {
      fill(255, 255, 0);
      ellipse(100, 100, 100, 100);
      //triangle(30, 75, 58, 20, 86, 75);
    };

    this.tree = function () {
      image(tree, 100, 400, tree.width * 2, tree.height * 2);
    };

    this.show = function () {
      this.grass();
      this.grass2();
      this.sky();
      this.water();
      this.library();
      this.road();
      this.redCar();
      this.blueCar();
      this.greenCar();
      this.sun();
      this.boat();
      this.tree();
      this.ufo();
      this.jet();
      this.missile();
    };
  }
}
