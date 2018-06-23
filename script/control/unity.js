/**
 * Created by p5030 on 2017/6/11.
 */


function fuckTest(){
    console.log("fuck")
}
//讓螢幕跟著滑鼠移動
function  initPointerLock(scene,camera) {

    // Request pointer lock
    var canvas = scene.getEngine().getRenderingCanvas();
    // On click event, request pointer lock
    canvas.addEventListener("click", function(evt) {
        canvas.requestPointerLock = canvas.requestPointerLock || canvas.msRequestPointerLock || canvas.mozRequestPointerLock || canvas.webkitRequestPointerLock;
        if (canvas.requestPointerLock) {
            canvas.requestPointerLock();
        }
    }, false);

    // Event listener when the pointerlock is updated (or removed by pressing ESC for example).
    var pointerlockchange = function (event) {
        var controlEnabled = (
        document.mozPointerLockElement === canvas
        || document.webkitPointerLockElement === canvas
        || document.msPointerLockElement === canvas
        || document.pointerLockElement === canvas);
        // If the user is alreday locked
        if (! controlEnabled) {
            //camera.detachControl(canvas);
            console.log('The pointer lock status is now locked');
            inScreen = false;
        } else {
            //camera.attachControl(canvas);
            console.log('The pointer lock status is now unlocked');
            inScreen = true;
        }
    };

    // Attach events to the document
    document.addEventListener("pointerlockchange", pointerlockchange, false);
    document.addEventListener("mspointerlockchange", pointerlockchange, false);
    document.addEventListener("mozpointerlockchange", pointerlockchange, false);
    document.addEventListener("webkitpointerlockchange", pointerlockchange, false);
}



var mouseOverUnit = function(unit_mesh) {
    if (unit_mesh.meshUnderPointer !== null) {
        var children;
        var size = unit_mesh.meshUnderPointer.scaling.x;
        if(unit_mesh.meshUnderPointer){
            children = unit_mesh.meshUnderPointer.getChildren();
            children.push(unit_mesh.meshUnderPointer);
            for (var index = 0; index < children.length; index++) {
                children[index].scaling.x = size + 0.05;
                children[index].scaling.y = size + 0.05;
                children[index].scaling.z = size + 0.05;
            }
        }
        if(unit_mesh.source){
            if(unit_mesh.source.parent){
                //unit_mesh.source.parent.scaling.x = size + 0.1;
                //unit_mesh.source.parent.scaling.y = size + 0.1;
                //unit_mesh.source.parent.scaling.z = size + 0.1;
                mouseOverUnit(unit_mesh.source.parent);
            }else{
                unit_mesh.meshUnderPointer.scaling.x = size + 0.05;
                unit_mesh.meshUnderPointer.scaling.y = size + 0.05;
                unit_mesh.meshUnderPointer.scaling.z = size + 0.05;
            }
        }
    }
};

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




function mouseOverOut(objList, size) {

    for(var objIndex = 0; objIndex < 3; objIndex++){
        for(var k = 1; k < objList[objIndex].loadedMeshes.length;k++){
            if(objList[objIndex].loadedMeshes){
                objList[objIndex].loadedMeshes[k].parent = objList[objIndex].loadedMeshes[0];
                objList[objIndex].loadedMeshes[k].scaling.x = size[objIndex].x;
                objList[objIndex].loadedMeshes[k].scaling.y = size[objIndex].y;
                objList[objIndex].loadedMeshes[k].scaling.z = size[objIndex].z;
            }
        }

        for(var j = 0;j < objList[objIndex].loadedMeshes.length; j++){
            j *= 1;
            var dis = distance(objList[objIndex].loadedMeshes[j]);
            var condition = new BABYLON.PredicateCondition(objList[objIndex].loadedMeshes[j].actionManager, function () {
                if(dis <= 50){
                    return true;
                }else{
                    return false;
                }
            });

            var action = new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOverTrigger, mouseOverUnit, condition);
            var action2 = new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOutTrigger, mouseOutUnit, condition);

            objList[objIndex].loadedMeshes[j].actionManager = new BABYLON.ActionManager(scene);
            objList[objIndex].loadedMeshes[j].actionManager.registerAction(action);
            objList[objIndex].loadedMeshes[j].actionManager.registerAction(action2);
            //console.log(objList[i].loadedMeshes[j].scaling.x);
        }
    }


}

function distance(mesh){
    var detlaPosition = new BABYLON.Vector3(camera.position.x - mesh.position.x, camera.position.y - mesh.position.y, camera.position.z - mesh.position.z);
    var dis = Math.sqrt(Math.pow(detlaPosition.x,2) + Math.pow(detlaPosition.y,2) + Math.pow(detlaPosition.z,2));
    return dis;
}

function runInterval(){
    setInterval(function(){
        mouseOverOut(objList, size);
        //console.log(name);
    }, 30);
}