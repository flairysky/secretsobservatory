const app = new PIXI.Application({
    resizeTo: window,
    backgroundColor: 0x000000,
    antialias: true,
  });
  document.getElementById('canvas-container').appendChild(app.view);
  
  // Add viewport for zoom/pan
  const viewport = new pixi_viewport.Viewport({
    screenWidth: window.innerWidth,
    screenHeight: window.innerHeight,
    worldWidth: 3000,
    worldHeight: 3000,
    interaction: app.renderer.plugins.interaction
  });
  app.stage.addChild(viewport);
  
  // Enable interactions
  viewport
    .drag()
    .pinch()
    .wheel()
    .decelerate();
  
  // Dummy white graphics: a few circles and lines (replace later with assets)
  function addScene() {
    const tree = new PIXI.Graphics();
    tree.lineStyle(4, 0xFFFFFF);
    tree.moveTo(200, 500);
    tree.lineTo(200, 400);
    tree.lineTo(170, 420);
    tree.moveTo(200, 400);
    tree.lineTo(230, 420);
    tree.moveTo(200, 380);
    tree.lineTo(160, 410);
    tree.moveTo(200, 380);
    tree.lineTo(240, 410);
    viewport.addChild(tree);
  
    const sun = new PIXI.Graphics();
    sun.beginFill(0xFFFFFF);
    sun.drawCircle(800, 200, 30);
    sun.endFill();
    viewport.addChild(sun);
  
    for (let i = 0; i < 20; i++) {
      const bird = new PIXI.Graphics();
      bird.lineStyle(2, 0xFFFFFF);
      const x = 500 + Math.random() * 1000;
      const y = 100 + Math.random() * 300;
      bird.moveTo(x, y);
      bird.lineTo(x + 10, y - 5);
      bird.lineTo(x + 20, y);
      viewport.addChild(bird);
    }
  
    const water = new PIXI.Graphics();
    water.lineStyle(2, 0xFFFFFF);
    for (let i = 0; i < 1000; i += 20) {
      water.moveTo(i, 700 + Math.sin(i * 0.05) * 5);
      water.lineTo(i + 10, 700 + Math.sin((i + 10) * 0.05) * 5);
    }
    viewport.addChild(water);
  }
  
  addScene();
  