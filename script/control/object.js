/**
 * Created by sky65 on 2017/6/1.
 */



function createLeftHand(camera, scene)
{

    //藍色 手臂的材質
    var handMaterial = new BABYLON.StandardMaterial('handMaterial', scene);
    handMaterial.diffuseColor = new BABYLON.Color3(0.15, 0.5, 1);

	//白色 手掌的材質
    var circleMaterial = new BABYLON.StandardMaterial('circleMaterial', scene);
    circleMaterial.diffuseColor = new BABYLON.Color3(1, 1, 1);

	//左手掌和左手臂包起來	
    var leftGroup = BABYLON.Mesh.CreateSphere("leftGroup", 16, 3, scene);
    leftGroup.isVisible = false;
    // Our built-in 'sphere' shape. Params: name, subdivs, size, scene
    // 左手掌
    var sphere1 = BABYLON.Mesh.CreateSphere("sphereLeft", 16, 3, scene);

    sphere1.position.x -= 3.6;
    sphere1.position.y -= 3.7;
    sphere1.position.z += 17;
    sphere1.material = circleMaterial;
    sphere1.parent = leftGroup;
    sphere1.checkCollisions = true;

    //左手臂
    var leftHand = BABYLON.Mesh.CreateCylinder("leftHand",10 ,3 ,2, 360, scene, 5);

    leftHand.rotation.x = Math.PI/0.75;
    leftHand.rotation.y = Math.PI/6;
    leftHand.material = handMaterial;
    leftHand.position.x -= 5.8;
    leftHand.position.y -= 6.2;
    leftHand.position.z += 14.5;
    leftHand.parent = leftGroup;

    leftGroup.parent = camera;//固定在鏡頭前面

    return leftGroup;
}

function createRightHand(camera, scene)
{

    //藍色 手臂的材質
    var handMaterial = new BABYLON.StandardMaterial('handMaterial', scene);
    handMaterial.diffuseColor = new BABYLON.Color3(0.15, 0.5, 1);

//白色 手掌的材質
    var circleMaterial = new BABYLON.StandardMaterial('circleMaterial', scene);
    circleMaterial.diffuseColor = new BABYLON.Color3(1, 1, 1);
    //右手掌和右手臂包起來
    var rightGroup = BABYLON.Mesh.CreateSphere("rightGroup", 16, 3, scene);
    rightGroup.isVisible = false;
    // Our built-in 'sphere' shape. Params: name, subdivs, size, scene
    var sphere2 = BABYLON.Mesh.CreateSphere("sphereRight", 16, 3, scene);

    sphere2.position.x += 3.5;
    sphere2.position.y -= 3.7;
    sphere2.position.z += 17;
    sphere2.material = circleMaterial;
    sphere2.parent = rightGroup;
    sphere2.checkCollisions = true;

    var rightHand = BABYLON.Mesh.CreateCylinder("rightHand",10 ,3 ,2, 360, scene, 5);

    rightHand.rotation.x = Math.PI/0.75;
    rightHand.rotation.y = Math.PI/0.55;
    rightHand.material = handMaterial;
    rightHand.position.x += 5.8;
    rightHand.position.y -= 6.2;
    rightHand.position.z += 14.5;
    rightHand.parent = rightGroup;

    rightGroup.parent = camera;
    return rightGroup;
}


function createGround(camera, material, scene){
	var ground = BABYLON.Mesh.CreateGround("ground", 100, 100, 2, scene);
	ground.position.x = 0;
	ground.position.y = -10;
	ground.position.z = -10;
	ground.material = material;
	return ground;		
}

function createAim(camera, scene){
	var aim = BABYLON.Mesh.CreateLines("aim", [
		new BABYLON.Vector3(0.5, 0, 0),
		new BABYLON.Vector3(-0.5, 0, 0),
	],scene);
	var red = new BABYLON.StandardMaterial('red', scene);
		red.diffuseColor = new BABYLON.Color3(1, 0, 0);
		red.emissiveColor = BABYLON.Color3.Red();
    aim.material = red;
	aim.parent = camera;
	aim.position.z += 10;
	return aim;
}

function createAim2(camera, scene){
	var aim2 = BABYLON.Mesh.CreateLines("aim2", [
			new BABYLON.Vector3(0, -0.5, 0),
			new BABYLON.Vector3(0, 0.5, 0),
		],scene);
	var red = new BABYLON.StandardMaterial('red', scene);
		red.diffuseColor = new BABYLON.Color3(1, 0, 0);
		red.emissiveColor = BABYLON.Color3.Red();
	aim2.material = red;	
	aim2.parent = camera;
	aim2.position.z += 10; 
	return aim2;
}

/**********裝潢區**********/
function createChair(name,loader){
    BABYLON.OBJFileLoader.OPTIMIZE_WITH_UV = true;
    var chair = loader.addMeshTask(name, "", "ItemModels/chair/", "chair.obj");
    chair.onSuccess = function(task) {
        task.loadedMeshes.forEach(function(obj) {
            obj.scaling.x = 0.3;//調整物體大小
            obj.scaling.y = 0.3;
            obj.scaling.z = 0.3;
			obj.position.x -= 15;
			obj.position.y += 2; 
			obj.position.z += 2;
            obj.checkCollisions = true; //加入碰撞，不可穿越
            obj.name = 'objChair';
            //console.log(obj);
        });
        //console.log(task.loadedMeshes[0]);
    };
    return chair;
}


function createLamp(name,loader){
    BABYLON.OBJFileLoader.OPTIMIZE_WITH_UV = true;
    var lamp = loader.addMeshTask(name, "", "ItemModels/lamp/lamp/", "lamp.obj");
    lamp.onSuccess = function(task) {
        task.loadedMeshes.forEach(function(obj) {
            obj.scaling.x = 0.1;//調整物體大小
            obj.scaling.y = 0.1;
            obj.scaling.z = 0.1;
			obj.position.x = 15;
			obj.position.y = 2;
			obj.position.z = 2;
            obj.checkCollisions = true; //加入碰撞，不可穿越
            obj.name = 'objLamp';
            //console.log(obj);
        });
        //console.log(task.loadedMeshes[0]);
    };
    return lamp;
}

function createDesk(name,loader){
    BABYLON.OBJFileLoader.OPTIMIZE_WITH_UV = true;
    var desk = loader.addMeshTask(name, "", "ItemModels/desk/desk/", "desk.obj");
    desk.onSuccess = function(task) {
        task.loadedMeshes.forEach(function(obj) {
            obj.scaling.x = 0.1;//調整物體大小
            obj.scaling.y = 0.1;
            obj.scaling.z = 0.1;
			obj.position.x = 25;
			obj.position.y = 2;
			obj.position.z = 2;
            obj.checkCollisions = true; //加入碰撞，不可穿越
            obj.name = 'objLamp';
            //console.log(obj);
        });
        //console.log(task.loadedMeshes[0]);
    };
    return desk;
}

function createBox(material ,x ,y ,z ,name ,size ,scene){
	
	var box = BABYLON.Mesh.CreateBox(name, size ,scene);
	box.material = material;
	box.position.x = x;
    box.position.y = y;
	box.position.z = z;
		
	return box;	
}
/**********裝潢區結束**********/