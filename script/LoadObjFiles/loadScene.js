/**
 * Created by p5030 on 2017/5/25.
 */
var canvas = document.getElementById("renderCanvas")
console.log(canvas)
var engine = new BABYLON.Engine(canvas, true);
var chair = 0
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

var createScene = function(){
    var scene = new BABYLON.Scene(engine)
    var camera = new BABYLON.FreeCamera("Camera",new BABYLON.Vector3(17,15,-15),scene)    //-60 ,-32.5 , -80
    //camera.setPosition(new BABYLON.Vector3(-10,10,0))
    camera.attachControl(canvas,true);
    var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(2, 2, 1), scene);
    light.groundColor = new BABYLON.Color3(0.6, 0.6, 0.6);
    light.intensity = 0.52;
    var returnDatas= loadObj(scene,"scene","ItemModels/room/","roomSceme.obj",{x:0,y:0,z:0},{x:1,y:1,z:1},{x:0,y:0,z:0});
    scene = returnDatas["scene"]
    var loader = new BABYLON.AssetsManager(scene);
    loader.load()
    returnDatas = loadObj(scene,"window","ItemModels/window/","window.obj",{x:40,y:0,z:60},{x:0.8,y:0.5,z:0.8},{x:0,y:Math.PI/100,z:0})
    scene = returnDatas["scene"]


createSingleRect(scene,"floor",{x:10,y:-31,z:-20},{x:50,y:0.05,z:60},{x:-Math.PI/60,y:Math.PI/60,z:-Math.PI/150},"ItemModels/floor.png",{u:5.0,v:5.0})
createSingleRect(scene,"bath",{x:40,y:20,z:61},{x:4,y:0.1,z:5},{x:Math.PI/300,y:Math.PI/2,z:Math.PI/2},"ItemModels/bath.jpg",{u:1.0,v:1.0})

    //returnDatas = loadObj(scene,"bookcase","ItemModels/bookcase/","bookcase.obj",{x:-38,y:-32,z:-56},{x:0.6,y:0.6,z:0.6},{x:0,y:Math.PI/1.9,z:-Math.PI/68})
    returnDatas = loadObj(scene,"bookcase","ItemModels/bookcase/","bookcase.obj",{x:-34,y:-32,z:-56},{x:0.65,y:0.69,z:0.65},{x:0,y:Math.PI/1.9,z:-Math.PI/68}) //大書櫃
    scene = returnDatas["scene"]

    returnDatas = loadObj(scene,"bookcase2","ItemModels/bookcase2/","bookcase2.obj",{x:-46,y:-25,z:62},{x:0.4,y:0.4,z:0.4},{x:0,y:Math.PI/1.9,z:-Math.PI/68}) //藍色小櫃子
    scene = returnDatas["scene"]

    returnDatas = loadObj(scene,"droplight","ItemModels/droplight/","droplight.obj",{x:17,y:45,z:-15},{x:0.35,y:0.35,z:0.35},{x:0,y:Math.PI/1.95,z:-Math.PI/68}) //吊燈
    scene = returnDatas["scene"]

    //書櫃第一層

    returnDatas = loadObj(scene,"book1","ItemModels/book/","Redbook.obj",{x:-38.2,y:-10.9,z:-64.8},{x:0.7,y:0.82,z:1},{x:0,y:Math.PI/1.9,z:-Math.PI/68})
    scene = returnDatas["scene"]
    returnDatas = loadObj(scene,"book2","ItemModels/book/","Bluebook.obj",{x:-37.9,y:-10.7,z:-59.2},{x:1,y:0.82,z:1},{x:0,y:Math.PI/1.9,z:-Math.PI/68})
    scene = returnDatas["scene"]
    returnDatas = loadObj(scene,"book3","ItemModels/book/","Greenbook.obj",{x:-37.8,y:-10.6,z:-57.1},{x:1,y:0.82,z:1},{x:0,y:Math.PI/1.9,z:-Math.PI/68})
    scene = returnDatas["scene"]
    returnDatas = loadObj(scene,"book3","ItemModels/book/","Bluebook.obj",{x:-37.7,y:-10.5,z:-55},{x:1,y:0.82,z:1},{x:0,y:Math.PI/1.9,z:-Math.PI/68})
    scene = returnDatas["scene"]
    returnDatas = loadObj(scene,"book4","ItemModels/book/","Yellowbook.obj",{x:-37.6,y:-10.4,z:-52.9},{x:1,y:0.8,z:1},{x:0,y:Math.PI/1.9,z:-Math.PI/68})
    scene = returnDatas["scene"]
    returnDatas = loadObj(scene,"book5","ItemModels/book/","Bluebook.obj",{x:-37.5,y:-10.3,z:-50.8},{x:1,y:0.79,z:1},{x:0,y:Math.PI/1.9,z:-Math.PI/68})
    scene = returnDatas["scene"]
    returnDatas = loadObj(scene,"book6","ItemModels/book/","Redbook.obj",{x:-37.4,y:-10.2,z:-48.7},{x:1,y:0.77,z:1},{x:0,y:Math.PI/1.9,z:-Math.PI/68})
    scene = returnDatas["scene"]
    returnDatas = loadObj(scene,"book7","ItemModels/book/","Bluebook.obj",{x:-37.3,y:-10.1,z:-46.6},{x:1,y:0.78,z:1},{x:0,y:Math.PI/1.9,z:-Math.PI/68})
    scene = returnDatas["scene"]
    returnDatas = loadObj(scene,"book8","ItemModels/book/","Greenbook.obj",{x:-37.2,y:-10,z:-44.5},{x:1,y:0.79,z:1},{x:0,y:Math.PI/1.9,z:-Math.PI/68})
    scene = returnDatas["scene"]
    returnDatas = loadObj(scene,"book9","ItemModels/book/","Redbook.obj",{x:-37.1,y:-9.9,z:-42.4},{x:1,y:0.78,z:1},{x:0,y:Math.PI/1.9,z:-Math.PI/68})
    scene = returnDatas["scene"]
    returnDatas = loadObj(scene,"book10","ItemModels/book/","Orangebook.obj",{x:-37,y:-9.8,z:-40.3},{x:1,y:0.8,z:1},{x:0,y:Math.PI/1.9,z:-Math.PI/68})
    scene = returnDatas["scene"]
    returnDatas = loadObj(scene,"book11","ItemModels/book/","Bluebook.obj",{x:-36.9,y:-9.7,z:-38.2},{x:1,y:0.75,z:1},{x:0,y:Math.PI/1.9,z:-Math.PI/68})
    scene = returnDatas["scene"]
    returnDatas = loadObj(scene,"book12","ItemModels/book/","Bluebook.obj",{x:-36.8,y:-9.6,z:-36.1},{x:1,y:0.69,z:1},{x:0,y:Math.PI/1.9,z:-Math.PI/68})
    scene = returnDatas["scene"]
    returnDatas = loadObj(scene,"book13","ItemModels/book/","Bluebook.obj",{x:-36.7,y:-9.5,z:-34},{x:1,y:0.7,z:1},{x:0,y:Math.PI/1.9,z:-Math.PI/68})
    scene = returnDatas["scene"]
    returnDatas = loadObj(scene,"book14","ItemModels/book/","Bluebook.obj",{x:-36.6,y:-9.4,z:-31.9},{x:1,y:0.69,z:1},{x:0,y:Math.PI/1.9,z:-Math.PI/68})
    scene = returnDatas["scene"]
    returnDatas = loadObj(scene,"book15","ItemModels/book/","Orangebook.obj",{x:-36.5,y:-9.3,z:-29.8},{x:1,y:0.69,z:1},{x:0,y:Math.PI/1.9,z:-Math.PI/68})
    scene = returnDatas["scene"]
    returnDatas = loadObj(scene,"book16","ItemModels/book/","Yellowbook.obj",{x:-36.4,y:-9.2,z:-27.7},{x:1,y:0.75,z:1},{x:0,y:Math.PI/1.9,z:-Math.PI/68})
    scene = returnDatas["scene"]
    returnDatas = loadObj(scene,"book17","ItemModels/book/","Bluebook.obj",{x:-36.3,y:-9.1,z:-25.6},{x:1,y:0.73,z:1},{x:0,y:Math.PI/1.9,z:-Math.PI/68})
    scene = returnDatas["scene"]
    returnDatas = loadObj(scene,"book18","ItemModels/book/","Bluebook.obj",{x:-36.2,y:-9,z:-23.5},{x:1,y:0.75,z:1},{x:0,y:Math.PI/1.9,z:-Math.PI/68})
    scene = returnDatas["scene"]
    
    //書櫃第二層

    returnDatas = loadObj(scene,"2book1","ItemModels/book/","Bluebook.obj",{x:-38,y:7.8,z:-61.5},{x:1,y:0.73,z:1},{x:0,y:Math.PI/1.9,z:-Math.PI/68})
    scene = returnDatas["scene"]
    returnDatas = loadObj(scene,"2book2","ItemModels/book/","Bluebook.obj",{x:-37.9,y:7.9,z:-59.2},{x:1,y:0.72,z:1},{x:0,y:Math.PI/1.9,z:-Math.PI/68})
    scene = returnDatas["scene"]
    returnDatas = loadObj(scene,"2book3","ItemModels/book/","Greenbook.obj",{x:-37.8,y:8,z:-57.1},{x:1,y:0.73,z:1},{x:0,y:Math.PI/1.9,z:-Math.PI/68})
    scene = returnDatas["scene"]
    returnDatas = loadObj(scene,"2book3","ItemModels/book/","Orangebook.obj",{x:-37.7,y:8.1,z:-55},{x:1,y:0.74,z:1},{x:0,y:Math.PI/1.9,z:-Math.PI/68})
    scene = returnDatas["scene"]
    returnDatas = loadObj(scene,"2book4","ItemModels/book/","Orangebook.obj",{x:-37.6,y:8.2,z:-52.9},{x:1,y:0.72,z:1},{x:0,y:Math.PI/1.9,z:-Math.PI/68})
    scene = returnDatas["scene"]
    returnDatas = loadObj(scene,"2book5","ItemModels/book/","Greenbook.obj",{x:-37.5,y:8.3,z:-50.8},{x:1,y:0.7,z:1},{x:0,y:Math.PI/1.9,z:-Math.PI/68})
    scene = returnDatas["scene"]
    returnDatas = loadObj(scene,"2book6","ItemModels/book/","Redbook.obj",{x:-37.4,y:8.4,z:-48.7},{x:1,y:0.69,z:1},{x:0,y:Math.PI/1.9,z:-Math.PI/68})
    scene = returnDatas["scene"]
    returnDatas = loadObj(scene,"2book7","ItemModels/book/","Bluebook.obj",{x:-37.3,y:8.5,z:-46.6},{x:1,y:0.69,z:1},{x:0,y:Math.PI/1.9,z:-Math.PI/68})
    scene = returnDatas["scene"]
    returnDatas = loadObj(scene,"2book8","ItemModels/book/","Greenbook.obj",{x:-37.2,y:8.6,z:-44.5},{x:1,y:0.69,z:1},{x:0,y:Math.PI/1.9,z:-Math.PI/68})
    scene = returnDatas["scene"]
    returnDatas = loadObj(scene,"2book9","ItemModels/book/","Redbook.obj",{x:-37.1,y:8.7,z:-42.4},{x:1,y:0.72,z:1},{x:0,y:Math.PI/1.9,z:-Math.PI/68})
    scene = returnDatas["scene"]
    returnDatas = loadObj(scene,"2book10","ItemModels/book/","Bluebook.obj",{x:-37,y:8.8,z:-40.3},{x:1,y:0.71,z:1},{x:0,y:Math.PI/1.9,z:-Math.PI/68})
    scene = returnDatas["scene"]
    returnDatas = loadObj(scene,"2book11","ItemModels/book/","Bluebook.obj",{x:-36.9,y:8.9,z:-38.2},{x:1,y:0.72,z:1},{x:0,y:Math.PI/1.9,z:-Math.PI/68})
    scene = returnDatas["scene"]
    returnDatas = loadObj(scene,"2book12","ItemModels/book/","Yellowbook.obj",{x:-36.8,y:9,z:-36.1},{x:1,y:0.72,z:1},{x:0,y:Math.PI/1.9,z:-Math.PI/68})
    scene = returnDatas["scene"]


    //書櫃第三層

    scene = returnDatas["scene"]
    returnDatas = loadObj(scene,"3book4","ItemModels/book/","Orangebook.obj",{x:-36.6,y:22.9,z:-52.9},{x:1,y:0.7,z:1},{x:0,y:Math.PI/1.9,z:-Math.PI/68})
    scene = returnDatas["scene"]
    returnDatas = loadObj(scene,"3book5","ItemModels/book/","Orangebook.obj",{x:-36.5,y:23,z:-50.8},{x:1,y:0.72,z:1},{x:0,y:Math.PI/1.9,z:-Math.PI/68})
    scene = returnDatas["scene"]
    returnDatas = loadObj(scene,"3book6","ItemModels/book/","Greenbook.obj",{x:-36.4,y:23.1,z:-48.7},{x:1,y:0.71,z:1},{x:0,y:Math.PI/1.9,z:-Math.PI/68})
    scene = returnDatas["scene"]
    returnDatas = loadObj(scene,"3book7","ItemModels/book/","Bluebook.obj",{x:-36.3,y:23.2,z:-46.6},{x:1,y:0.69,z:1},{x:0,y:Math.PI/1.9,z:-Math.PI/68})
    scene = returnDatas["scene"]
    returnDatas = loadObj(scene,"3book8","ItemModels/book/","Greenbook.obj",{x:-36.2,y:23.3,z:-44.5},{x:1,y:0.68,z:1},{x:0,y:Math.PI/1.9,z:-Math.PI/68})
    scene = returnDatas["scene"]
    returnDatas = loadObj(scene,"3book9","ItemModels/book/","Greenbook.obj",{x:-36.1,y:23.4,z:-42.4},{x:1,y:0.68,z:1},{x:0,y:Math.PI/1.9,z:-Math.PI/68})
    scene = returnDatas["scene"]
    returnDatas = loadObj(scene,"3book10","ItemModels/book/","Redbook.obj",{x:-36,y:23.5,z:-40.3},{x:1,y:0.68,z:1},{x:0,y:Math.PI/1.9,z:-Math.PI/68})
    scene = returnDatas["scene"]
    returnDatas = loadObj(scene,"3book11","ItemModels/book/","Yellowbook.obj",{x:-35.9,y:23.6,z:-38.2},{x:1,y:0.68,z:1},{x:0,y:Math.PI/1.9,z:-Math.PI/68})
    scene = returnDatas["scene"]
    returnDatas = loadObj(scene,"3book12","ItemModels/book/","Bluebook.obj",{x:-35.8,y:23.7,z:-36.1},{x:1,y:0.69,z:1},{x:0,y:Math.PI/1.9,z:-Math.PI/68})
    scene = returnDatas["scene"]
    returnDatas = loadObj(scene,"3book13","ItemModels/book/","Greenbook.obj",{x:-35.7,y:23.8,z:-34},{x:1,y:0.7,z:1},{x:0,y:Math.PI/1.9,z:-Math.PI/68})
    scene = returnDatas["scene"]
    returnDatas = loadObj(scene,"3book14","ItemModels/book/","Bluebook.obj",{x:-35.6,y:23.9,z:-31.9},{x:1,y:0.67,z:1},{x:0,y:Math.PI/1.9,z:-Math.PI/68})
    scene = returnDatas["scene"]
    returnDatas = loadObj(scene,"3book15","ItemModels/book/","Bluebook.obj",{x:-35.5,y:24,z:-29.8},{x:1,y:0.67,z:1},{x:0,y:Math.PI/1.9,z:-Math.PI/68})
    scene = returnDatas["scene"]
    returnDatas = loadObj(scene,"3book16","ItemModels/book/","Bluebook.obj",{x:-35.4,y:24.1,z:-27.7},{x:1,y:0.67,z:1},{x:0,y:Math.PI/1.9,z:-Math.PI/68})
    scene = returnDatas["scene"]
    returnDatas = loadObj(scene,"3book17","ItemModels/book/","Redbook.obj",{x:-35.3,y:24.2,z:-25.6},{x:1,y:0.70,z:1},{x:0,y:Math.PI/1.9,z:-Math.PI/68})
    scene = returnDatas["scene"]
    returnDatas = loadObj(scene,"3book18","ItemModels/book/","Redbook.obj",{x:-35.2,y:24.3,z:-23.5},{x:1,y:0.71,z:1},{x:0,y:Math.PI/1.9,z:-Math.PI/68})
    scene = returnDatas["scene"]

    createSingleRect(scene,"RoofTop",{x:10,y:70,z:10},{x:20,y:0.6,z:20},{x:-Math.PI/45,y:Math.PI/60,z:Math.PI},"ItemModels/room/roofTop.jpeg",{u:5.0,v:5.0})
    createSingleRect(scene,"door",{x:96,y:5,z:-17},{x:7,y:8,z:0.01},{x:-Math.PI  ,y:-Math.PI/2 + Math.PI/34 + Math.PI/4444 ,z:Math.PI- Math.PI/100 - Math.PI/44 + Math.PI/100},"ItemModels/room/door.jpg",{u:1.0,v:1.0})

    returnDatas = loadObj(scene,"chair","ItemModels/chair/","chair.obj",{x:70,y:-18,z:20},{x:0.5,y:0.5,z:0.5},{x:0,y:Math.PI/100,z:0})  //椅子
    scene = returnDatas["scene"]
    
    returnDatas = loadObj(scene,"lamp","ItemModels/lamp/","lamp.obj",{x:45,y:2,z:40},{x:0.2,y:0.2,z:0.2},{x:0,y:Math.PI/1.5,z:0}) //檯燈
    scene = returnDatas["scene"]
    
    returnDatas = loadObj(scene,"desk","ItemModels/desk/","desk.obj",{x:64,y:-30,z:40},{x:0.35,y:0.35,z:0.35},{x:0,y:-Math.PI/2,z:Math.PI/100}) //書桌
    scene = returnDatas["scene"]

    //書桌上的書
    returnDatas = loadObj(scene,"RedBook","ItemModels/book/","RedBook.obj",{x:100,y:0,z:50},{x:1,y:1,z:1},{x:0,y:Math.PI,z:0})
    scene = returnDatas["scene"]
    returnDatas = loadObj(scene,"GreenBook","ItemModels/book/","GreenBook.obj",{x:98,y:0,z:50},{x:1,y:0.8,z:1},{x:0,y:Math.PI,z:0})
    scene = returnDatas["scene"]
    returnDatas = loadObj(scene,"BlueBook","ItemModels/book/","BlueBook.obj",{x:102,y:0,z:50},{x:1,y:0.9,z:1},{x:0,y:Math.PI,z:0})
    scene = returnDatas["scene"]
    returnDatas = loadObj(scene,"RedBook2","ItemModels/book/","RedBook.obj",{x:106,y:0,z:50},{x:1,y:1,z:1},{x:0,y:Math.PI,z:0})
    scene = returnDatas["scene"]
    returnDatas = loadObj(scene,"GreenBook2","ItemModels/book/","GreenBook.obj",{x:104,y:0,z:50},{x:1,y:0.8,z:1},{x:0,y:Math.PI,z:0})
    scene = returnDatas["scene"]
    returnDatas = loadObj(scene,"BlueBook2","ItemModels/book/","BlueBook.obj",{x:108,y:0,z:50},{x:1,y:0.9,z:1},{x:0,y:Math.PI,z:0})
    scene = returnDatas["scene"]


    
    //chair = returnDatas["object"]
    /*setInterval(function(){
        chair = boom(chair,chair.loadedMeshes.length)
    },10000)*/
    Windowsloader = new BABYLON.AssetsManager(scene)
    Windowsloader.load()
    return scene;
}


var scene = createScene();
var counter = 0
engine.runRenderLoop(function() {
    scene.render();


});

// Resize
window.addEventListener("resize", function() {
    engine.resize();
});