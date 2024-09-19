let waveOffset = 0;

function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(135, 206, 235); 

  for (let i = 0; i < 10; i++) {
    drawWave(i * 30 + 150, 50 + i * 10, 30 - i * 3, i * 0.2);
  }
  drawSmallWaves();
  waveOffset += 0.05;
}
function drawWave(y, amplitude, frequency, speedFactor) {
  fill(70, 130, 180, 150);

  beginShape();
  for (let x = 0; x <= width; x += 10) {
    let angle = (x * frequency + waveOffset * speedFactor);
    let waveHeight = sin(angle) * amplitude;
    vertex(x, y + waveHeight);
  }
  vertex(width, height); 
  vertex(0, height);     
  endShape(CLOSE);
}

function drawSmallWaves() {
  fill(255); 
  for (let i = 0; i < 8; i++) {
    let x = 50 + i * 40;
    let y = 160 + sin(i + frameCount * 0.1) * 5;
    ellipse(x, y, 15, 5); 
  }
}
