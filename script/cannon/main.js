/**
 * Created by p5030 on 2017/6/11.
 */
var canvas = document.getElementById("renderCanvas");
var engine = new BABYLON.Engine(canvas, true);
var chair = 0;
var room = 0;
var canvas = document.getElementById("renderCanvas");

var engine = new BABYLON.Engine(canvas, true);
var inScreen = false;

var name;

var objList = [];

var size = [];
var mouseOutUnit = function(unit_mesh) {
    if (unit_mesh.source !== null) {
        var children;
        var size = unit_mesh.meshUnderPointer.scaling.x;
        if(unit_mesh.meshUnderPointer){
            children = unit_mesh.meshUnderPointer.getChildren();
            children.push(unit_mesh.meshUnderPointer);
            for (var index = 0; index < children.length; index++) {
                children[index].scaling.x = size - 0.05;
                children[index].scaling.y = size - 0.05;
                children[index].scaling.z = size - 0.05;
            }
        }
        if(unit_mesh.source){
            if(unit_mesh.source.parent){
                //unit_mesh.source.parent.scaling.x = 0.3;
                //unit_mesh.source.parent.scaling.y = 0.3;
                //unit_mesh.source.parent.scaling.z = 0.3;
                mouseOutUnit(unit_mesh.source.parent);
            }else{
                unit_mesh.meshUnderPointer.scaling.x = size - 0.05;
                unit_mesh.meshUnderPointer.scaling.y = size - 0.05;
                unit_mesh.meshUnderPointer.scaling.z = size - 0.05;
            }
        }
    }
};


var createScene = function(){
    var scene = new BABYLON.Scene(engine);//建立場景
    scene.actionManager = new BABYLON.ActionManager(scene);
    var camera = cameraSetting(scene);//建立攝影機
    camera.setTarget(BABYLON.Vector3.Zero());
    camera.attachControl(canvas, true);
    initPointerLock(scene,camera);
    var leftGroup = createLeftHand(camera, scene);
    var rightGroup = createRightHand(camera, scene);
    var aim = createAim(camera, scene);
    aim.isPickable = false;
    var aim2 = createAim2(camera, scene);
    aim2.isPickable = false;
    var light = lightSetting(scene);//建立燈光
    scene = createTheRoom(scene); //建立房間
    Windowsloader = new BABYLON.AssetsManager(scene);
    Windowsloader.load();
    //console.log(chair.loadedMeshes);
    scene.onPointerMove = function (evt, pickingInfo) {
        //pickingInfo doesn'T work for some reason, must debug!
        var pickResult = scene.pick(scene.pointerX, scene.pointerY);
        name = "nothing";
        if (pickResult.pickedMesh) {
            var dis = distance(pickResult.pickedMesh);
            var condition = (dis <= 50) ? true : false;
            if(condition){
                name = pickResult.pickedMesh.name;
            }
        }
    };
   /* setInterval(function(){
        mouseOverOut(objList, size);
        //console.log(name);
    }, 30);*/
    return scene;
};


var scene = createScene();

var counter = 0;
engine.runRenderLoop(function() {
    //room=gravity(room);
    scene.render();
    if(camera.rotation.y >= Math.PI) camera.rotation.y = Math.PI;
    if(camera.rotation.y <= Math.PI * (-1)) camera.rotation.y = (-1) * Math.PI;

});

// Resize
window.addEventListener("resize", function() {
    engine.resize();
});
window.addEventListener("resize", function () {
    engine.resize();
});

//limit camera y-position = 5;
window.addEventListener("keyup", function(e){
    camera.position.y = 10;
}, false);

//limit camera y-position = 5;
window.addEventListener("keydown", function(e){
    camera.position.y = 10;
}, false);

//limit camera y-position = 5;
window.addEventListener("keyleft", function(e){
    camera.position.y = 10;
}, false);

//limit camera y-position = 5;
window.addEventListener("keyright", function(e){
    camera.position.y = 10;
}, false);

//limit camera y-position = 5;
window.addEventListener("keypress", function(e){
    if(e.keyCode == 106){
        if(name == objList[0].loadedMeshes[0].name){
            objList[0].loadedMeshes[0].parent = camera;
            for(var i = 0; i < objList[0].loadedMeshes.length; i++){
                objList[0].loadedMeshes[i].scaling.x = 0.05;
                objList[0].loadedMeshes[i].scaling.y = 0.05;
                objList[0].loadedMeshes[i].scaling.z = 0.05;
            }
        }
    }
}, false);
