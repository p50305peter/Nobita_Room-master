/**
* Created by sky65 on 2017/6/1.
*/
//拿物品的動畫
function pick(scene, hand, obj, keyValue, keys, name, Fps){


	var animate = new BABYLON.Animation(name, "position", Fps , BABYLON.Animation.ANIMATIONTYPE_VECTOR3,
		BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);

	animate.setKeys(keys);

	obj.animations.push(animate);

	var animation = scene.beginAnimation(obj ,0 ,Fps, false);

	animation.onAnimationEnd = function(){
		if(hand) {
			var objX = obj.position.x;
			var objY = obj.position.y;
			var objZ = obj.position.z;
			console.log(objX);
			console.log(objY);
			console.log(objZ);
			obj.parent = hand;//讓拿到的物品和手黏再一起
			obj.position.x = objX + 5;
			obj.position.y = objY - 5;
			obj.position.z = objZ + 25;
		}
	}

	return scene;
}

//產生key值的function
function generateKeys(type, start, mid, end, Fps){

	var keys = [];

	//startPoint
	keys.push({
		frame: 0,
		value: start
	});

	//mid point
	keys.push({
		frame: Fps / 2,
		value: mid
	});

	//3 * mid point / 2
	if(type == 0){
		keys.push({
			frame: 3 * Fps / 4,
			value: new BABYLON.Vector3((mid.x + end.x) / 2, (mid.y + end.y) / 2, (mid.z + end.z) / 2)
		});
	}

	//end point
	keys.push({
		frame: Fps,
		value: end
	});

	return keys;
}



function takeObj(rightGroup, objList, scene){
		
			//右手動畫的key
		var pickKey = generateKeys(0, new BABYLON.Vector3(0, 0, 0), new BABYLON.Vector3(-3, 3, 0),
									new BABYLON.Vector3(0, 0, 0), 200);
			
		//物體動畫的key	
		var objKey = generateKeys(1, new BABYLON.Vector3(0, 10, 18), new BABYLON.Vector3(0, 10, 18),
									new BABYLON.Vector3(0, 0, 0), 200);				
		
		
		//0 for left, 1 for center, 2 for right
		canvas.addEventListener("click", function(evt){
			switch(evt.button){
			
				case 0://left click
					scene = pick(scene, null, rightGroup, 0, pickKey, "pickMotion", 200);
					mouseOverOut(objList);
					switch(name){
						case "box":
							if(inScreen)	pick(scene, rightGroup, objList[0], 0, objKey, "box", 200);
							break;
						case "box2":
							if(inScreen)	pick(scene, rightGroup, objList[1], 0, objKey, "box2", 200);
							break;
						default:
							break;
					}
						
					break;
					
				case 1://center click
					break;
					
				case 2://right click
					break;
					
				default:
					break;
					
			}
		});
		
	}
