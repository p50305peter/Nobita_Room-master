/**
 * Created by p5030 on 2017/5/25.
 */

function createSingleRect(scene,name,boxPosition,boxScaling,boxRotation,texturePath,scale){
    //texturePath is the image Path of the texture

    var box = BABYLON.Mesh.CreateBox(name,10,scene)
    box.position.x = boxPosition.x
    box.position.y = boxPosition.y
    box.position.z = boxPosition.z
    box.scaling.x = boxScaling.x
    box.scaling.y = boxScaling.y
    box.scaling.z = boxScaling.z
    box.rotation.x = boxRotation.x
    box.rotation.y = boxRotation.y
    box.rotation.z = boxRotation.z
    var texture = new BABYLON.StandardMaterial(name,scene)
    texture.diffuseTexture = new BABYLON.Texture(texturePath,scene)
    texture.diffuseTexture.uScale = scale.u;//Repeat 5 times on the Vertical Axes
    texture.diffuseTexture.vScale = scale.v;//Repeat 5 times on the Horizontal Axes
    texture.backFaceCulling = false;//Always show the front and the back of an element
    box.material = texture
    return scene
}


//10 70 0 20 0.3 20 -Math.PI/60 Math.PI/60 "ItemModels/room/roofTop.jpg"

function LoadScene(){
    var scene = new BABYLON.Scene(engine);
    var camera = new BABYLON.ArcRotateCamera("Camera",0,0,10,BABYLON.Vector3.Zero(),scene)
    camera.setPosition(new BABYLON.Vector3(-10,10,0))
    camera.attachControl(canvas,true)
    var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(2, 2, 1), scene);
   light.groundColor = new BABYLON.Color3(1, 1, 1);
   light.color = new BABYLON.Color3(1,1,1);
    light.intensity = 0.7;
    var returnDatas= loadObj(scene,"scene","ItemModels/room/","roomSceme.obj",{x:0,y:0,z:0},{x:1,y:1,z:1},{x:0,y:0,z:0})
    room = returnDatas["object"];
    scene = returnDatas["scene"];
    var loader = new BABYLON.AssetsManager(scene);
    loader.load()
    returnDatas = loadObj(scene,"window","ItemModels/window/","window.obj",{x:40,y:0,z:60},{x:0.8,y:0.5,z:0.8},{x:0,y:Math.PI/100,z:0})
    scene = returnDatas["scene"];


    createSingleRect(scene,"RoofTop",{x:10,y:70,z:10},{x:20,y:0.6,z:20},{x:-Math.PI/45,y:Math.PI/60,z:Math.PI},"ItemModels/room/roofTop.jpeg",{u:5.0,v:5.0})
    createSingleRect(scene,"door",{x:96,y:5,z:-17},{x:7,y:8,z:0.01},{x:-Math.PI  ,y:-Math.PI/2 + Math.PI/34 + Math.PI/4444 ,z:Math.PI- Math.PI/100 - Math.PI/44 + Math.PI/100},"ItemModels/room/door.jpg",{u:1.0,v:1.0})

    returnDatas = loadObj(scene,"chair","ItemModels/chair/","chair.obj",{x:40,y:0,z:30},{x:0.8,y:0.5,z:0.8},{x:0,y:Math.PI/100,z:0})
    scene = returnDatas["scene"]
    chair = returnDatas["object"]
    setInterval(function(){
        chair = boom(chair,chair.loadedMeshes.length)
    },10000)
    Windowsloader = new BABYLON.AssetsManager(scene)
    Windowsloader.load()
    var g = new BABYLON.Vector3(0, -9.81, 0);
    var dt = 0.002;
    var physicsPlugin = new BABYLON.CannonJSPlugin();

    //physicsPlugin.setTimeStep(dt);		// nothing happens
    scene.enablePhysics(g, physicsPlugin);
    //physicsPlugin.setTimeStep(dt);		// works
    var sphere = BABYLON.Mesh.CreateSphere("sphere1", 16, 2, scene);
    sphere.y = 100;
    sphere.x = 50;
    sphere.physicsImpostor = new BABYLON.PhysicsImpostor(sphere, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 10, restitution: 0.9, friction: 0.05 }, scene);
    room=gravity(room);
    return scene;
}

