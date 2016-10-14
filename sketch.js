var r = 0;


function setup() {
  createCanvas(800, 600);
}

function draw() {

}


function keyPressed() {

  diatom(mouseX, mouseY, 200);
  diatom(mouseX, mouseY, 200);
  diatom(mouseX, mouseY, 200);
  diatom(mouseX, mouseY, 200);
  diatom(mouseX, mouseY, 200);
  diatom(mouseX, mouseY, 200);
  diatom(mouseX, mouseY, 200);

}

function diatom(one, two, three) {
  rotate(r);
  r +=.02
  translate(random(500), random(800));
  noStroke();
   fill(0, random(200), 0, 100);
  quad(0, 70, 10, -50, 0, -40, -10, -70)
   fill(0, random(200), 0, 100);
  rotate(QUARTER_PI);
   fill(0, random(200), 0, 100);
  quad(0, 70, 10, -50, 0, -40, -10, -70)
  rotate(QUARTER_PI);
   fill(0, random(200), 0, 100);
  quad(0, 70, 10, -50, 0, -40, -10, -70)
  rotate(QUARTER_PI);
   fill(0, random(200), 0, 100);
  quad(0, 70, 10, -50, 0, -40, -10, -70)
  rotate(QUARTER_PI);
   fill(0, random(200), 0, 100);
  quad(0, 70, 10, -50, 0, -40, -10, -70)
  rotate(QUARTER_PI);
   fill(0, random(200), 0, 100);
  quad(0, 70, 10, -50, 0, -40, -10, -70)
  rotate(QUARTER_PI);
   fill(0, random(200), 0, 100);
  quad(0, 70, 10, -50, 0, -40, -10, -70)
  rotate(QUARTER_PI);
   fill(0, random(200), 0, 100);
  quad(0, 70, 10, -50, 0, -40, -10, -70)



}
