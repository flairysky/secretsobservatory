let bubbles = [];
let player;
let blowStartTime = null;
let maxBlowDuration = 3000;
let butterflies = [];
let butterflyImg;
let bubbleImg;
let playerImg;
let popSound;
let fadeDuration = 2000;
let score = 0;
let maxButterflies = 6;
let lastSpawnTime = 0;
let buttons = [];
let currentDifficulty = 'bubble-lord';

function preload() {
  butterflyImg = loadImage("butterfly-unscreen.gif");
  bubbleImg = loadImage("bubbleb.png");
  playerImg = loadImage("BBV.svg");
  popSound = loadSound("bubble-sound.mp3");

  let link = createElement('link');
  link.attribute('rel', 'stylesheet');
  link.attribute('href', 'https://fonts.googleapis.com/css2?family=Bitter:wght@400;700&display=swap');
  document.head.appendChild(link.elt);
}

function setDifficulty(level) {
  currentDifficulty = level;
  if (level === 'bubble-lord') {
    maxButterflies = 9;
    maxBlowDuration = 3000;
  } else if (level === 'bubble-tamer') {
    maxButterflies = 6;
    maxBlowDuration = 1500;
  } else if (level === 'bubble-novice') {
    maxButterflies = 3;
    maxBlowDuration = 700;
  } else if (level === 'tiny-puffer') {
    maxButterflies = 1;
    maxBlowDuration = 200;
  }
  updateButtonStyles();
}

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("game-container");
  textFont('Bitter');

  let lordBtn = createButton("Bubble Lord").position(40, 600).mousePressed(() => setDifficulty("bubble-lord"));
  let tamerBtn = createButton("Bubble Tamer").position(40, 650).mousePressed(() => setDifficulty("bubble-tamer"));
  let noviceBtn = createButton("Bubble Novice").position(40, 700).mousePressed(() => setDifficulty("bubble-novice"));
  let pufferBtn = createButton("Tiny Puffer").position(40, 750).mousePressed(() => setDifficulty("tiny-puffer"));
  buttons = [lordBtn, tamerBtn, noviceBtn, pufferBtn];

  buttons.forEach(btn => {
    btn.style('background', 'transparent');
    btn.style('color', 'white');
    btn.style('border', 'none');
    btn.style('font-family', 'Bitter');
    btn.style('font-size', '20px');
    btn.style('padding', '10px 10px');
    btn.style('cursor', 'pointer');
  });

  updateButtonStyles();
  angleMode(DEGREES);
  player = new Player();
  setDifficulty('bubble-lord');

  for (let i = 0; i < maxButterflies; i++) {
    butterflies.push(new Butterfly());
  }
}

function updateButtonStyles() {
  buttons.forEach(btn => {
    const label = btn.html().toLowerCase();
    if (label.includes(currentDifficulty.replace('-', ' '))) {
      btn.style('color', '#a3d7ff');
    } else {
      btn.style('color', 'white');
    }
  });
}

function draw() {
  background(0);

  for (let i = butterflies.length - 1; i >= 0; i--) {
    let bfly = butterflies[i];
    bfly.update();
    bfly.show();
    if (bfly.done) {
      butterflies.splice(i, 1);
    }
  }

  for (let i = bubbles.length - 1; i >= 0; i--) {
    let b = bubbles[i];
    b.update();
    b.show();

    if (!b.captured) {
      for (let bfly of butterflies) {
        if (!bfly.captured && dist(b.x, b.y, bfly.x, bfly.y) < b.r) {
          b.captured = true;
          b.captureTime = millis();
          b.capturedButterfly = bfly;
          bfly.captured = true;
          score++;
          break;
        }
      }
    }

    if (b.captured && millis() - b.captureTime > 3000) {
      if (b.capturedButterfly) {
        let bfly = b.capturedButterfly;
        bfly.captured = false;
        bfly.released = true;
        bfly.releaseTime = millis();
      }

      if (popSound && popSound.isLoaded()) {
        popSound.play();
      }

      bubbles.splice(i, 1);
    } else if (!b.captured && b.offScreen()) {
      bubbles.splice(i, 1);
    }
  }

  player.update();
  player.show();

  if (blowStartTime && millis() - blowStartTime <= maxBlowDuration) {
    if (frameCount % 10 === 0) {
      bubbles.push(player.blowBubble());
    }
  }

  fill(255);
  textSize(20);
  textAlign(CENTER, TOP);
  textFont('Bitter');
  text("Bubbled Butterflies: " + score, width / 2, 30);

  if (millis() - lastSpawnTime > 1000) {
    while (butterflies.length < maxButterflies) {
      butterflies.push(new Butterfly());
      lastSpawnTime = millis();
    }
  }
}

function mousePressed() {
  let isClickOnButton = buttons.some(btn => {
    const bounds = btn.elt.getBoundingClientRect();
    return mouseX >= bounds.left && mouseX <= bounds.right && mouseY >= bounds.top && mouseY <= bounds.bottom;
  });
  if (isClickOnButton) return;

  if (!blowStartTime || millis() - blowStartTime > maxBlowDuration) {
    blowStartTime = millis();
  }
}

class Bubble {
  constructor(x, y, angle) {
    this.x = x;
    this.y = y;
    this.r = random(15, 30);
    this.speed = random(1.2, 2.2);
    this.angle = angle + random(-10, 10);
    this.phase = random(0, 100);
    this.captured = false;
    this.released = false;
    this.releaseTime = null;
    this.alpha = 255;
    this.originalSize = this.size;
    this.capturedButterfly = null;
    this.captureTime = null;
  }

  update() {
    if (this.released) {
      let t = millis() - this.releaseTime;
      this.alpha = map(t, 0, fadeDuration, 255, 0);
      this.size = map(t, 0, fadeDuration, this.originalSize, 0);
      if (t > fadeDuration) {
        this.alpha = 0;
        this.size = 0;
      }
      return;
    }
    if (!this.captured) {
      this.x += this.speed * cos(this.angle) + sin(this.phase + frameCount * 0.05) * 0.8;
      this.y += this.speed * sin(this.angle) + cos(this.phase + frameCount * 0.05) * 0.8;
    } else {
      this.y -= 0.5;
      if (this.capturedButterfly) {
        this.capturedButterfly.x = this.x;
        this.capturedButterfly.y = this.y;
      }
    }
  }

  show() {
    if (this.alpha <= 0 || this.size <= 0) return;
    imageMode(CENTER);
    image(bubbleImg, this.x, this.y, this.r * 2, this.r * 2);
  }

  offScreen() {
    return this.y < -this.r || this.x < -this.r || this.x > width + this.r;
  }
}

class Player {
  constructor() {
    this.x = width / 2;
    this.y = height - 60;
  }

  update() {
    this.angle = atan2(mouseY - this.y, mouseX - this.x);
  }

  show() {
    push();
    translate(this.x, this.y);
    rotate(this.angle + 90);
    imageMode(CENTER);
    image(playerImg, 0, 0, 40, 60);
    pop();
  }

  blowBubble() {
    let angle = atan2(mouseY - this.y, mouseX - this.x);
    let bx = this.x + cos(angle) * 40;
    let by = this.y + sin(angle) * 40;
    return new Bubble(bx, by, angle);
  }
}

class Butterfly {
  constructor() {
    this.x = random(width * 0.2, width * 0.8);
    this.y = random(height * 0.3, height * 0.7);
    this.offsetX = random(1000);
    this.offsetY = random(1000);
    this.size = random(20, 50);
    this.originalSize = this.size;
    this.alpha = 255;
    this.captured = false;
    this.released = false;
    this.releaseTime = null;
    this.done = false;
  }

  update() {
    if (this.released) {
      let t = millis() - this.releaseTime;
      this.y -= 0.5;
      this.alpha = map(t, 0, fadeDuration, 255, 0);
      this.size = map(t, 0, fadeDuration, this.originalSize, 0);
      if (t > fadeDuration) {
        this.alpha = 0;
        this.size = 0;
        this.done = true;
      }
    } else if (!this.captured) {
      this.x += (noise(this.offsetX + frameCount * 0.01) - 0.5) * 3;
      this.y += (noise(this.offsetY + frameCount * 0.01) - 0.5) * 3;
      this.x = constrain(this.x, 0, width);
      this.y = constrain(this.y, 0, height * 0.8);
    }
  }

  resetMotion() {
    this.offsetX = random(1000);
    this.offsetY = random(1000);
  }

  show() {
    if (this.alpha <= 0 || this.size <= 0) return;
    imageMode(CENTER);
    tint(255, this.alpha);
    image(butterflyImg, this.x, this.y, this.size, this.size);
    noTint();
  }
}

