function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {

  background(0);

  let tamanho;

  if (mouseX < width / 2 && mouseY < height / 2) {
    fill(150, 80, 200);
    tamanho = 10;
  }

  else if (mouseX >= width / 2 && mouseY < height / 2) {
    fill(255, 120, 180);
    tamanho = 18;
  }

  else if (mouseX >= width / 2 && mouseY >= height / 2) {
    fill(255, 150, 50);
    tamanho = 30;
  }

  else {
    fill(220, 40, 40);
    tamanho = 40;
  }

noStroke();

  for (let x = 20; x < width; x += 35) {
    for (let y = 20; y < height; y += 35) {
      circle(x, y, tamanho);
    }
  }
}