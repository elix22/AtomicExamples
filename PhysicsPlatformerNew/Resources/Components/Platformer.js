var game = Atomic.game;
var scene = game.scene;
var node = self.node;

Platformer = self;

var physicsWorld = scene.createComponent("PhysicsWorld2D");
physicsWorld.continuousPhysics = false;
physicsWorld.subStepping = false;


self.level = node.createJSComponent("Level");
self.level.init("Level1.tmx");

function start() {
	
}

function update(timeStep) {	



}