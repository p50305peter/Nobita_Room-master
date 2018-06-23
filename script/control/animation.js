//create by mikechen by 2017/6/16
/*
function pick(scene, hand, obj, keyValue, keys, name, Fps){

	console.log("inPick");
	
	var animate = new BABYLON.Animation(name, "position", Fps , BABYLON.Animation.ANIMATIONTYPE_VECTOR3,
		BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);

	animate.setKeys(keys);
	
	obj.animations.push(animate);
	
	console.log(obj);

	var animation = scene.beginAnimation(obj ,0 ,Fps, false);

	animation.onAnimationEnd = function(){
		if(hand){
			var deltaX = 0,//物件與parentBox的relative pos
				deltaY = 0,
				deltaZ = 0;
			obj.position.x = 1*Math.sin(camera.rotation.y) - camera.position.x + 20 + deltaX;
			obj.position.y = 1*Math.sin(camera.rotation.x) - camera.position.y + deltaY;
			obj.position.z = 1*Math.cos(camera.rotation.y) - camera.position.z + 60 + deltaZ;
			obj.parent = camera;
		}	
	};
	
	return scene;
}
*/
function reverseArr(input) {
    var ret = new Array;
    for(var i = input.length-1; i >= 0; i--) {
        ret.push(input[i]);
    }
    return ret;
}
function pick(objList, objParent, camera){
	var index;
	console.log("pickUp : " + objParent[0].position);
	for(var i=0;i<objList.length;i++){
		if(name == objList[i].loadedMeshes[0].name) index = i;
	}
	/*switch(name){
		case objList[0].loadedMeshes[0].name:	//chair
			var dis = distance(objParent[0]);
			index = 0;
			var deltaX = 0,//物件與parentBox的relative pos
				deltaY = 0,
				deltaZ = 0;
			break;
		case objList[1].loadedMeshes[0].name:	//lamp
			var dis = distance(objParent[1]);
			index = 1;
			var deltaX = 0,//物件與parentBox的relative pos
				deltaY = 0,
				deltaZ = 0;
			break;
		case objList[2].loadedMeshes[0].name:
			var dis = distance(objParent[2]);
			index = 2;
			var deltaX = 0,//物件與parentBox的relative pos
				deltaY = 0,
				deltaZ = 0;
			break;						
		default:
			break;
	}*/

	if(objParent[index]){
		objParent[index].parent = camera;
		for(item in objParent[index].getChildren()){
			objParent[index].getChildren()[item].isVisible = false;
			objParent[index].getChildren()[item].isPickable = false;
		}
		console.log(objParent[index]);
		BaiBaoDie.push(objParent[index].getChildren()[0].name);
		BBDIndex++;
		var booksTypeArrays = returnBookArray();
		var tempBBD = reverseArr(BaiBaoDie);
		//tempBBD.reverse();
		console.log("Origin BaiBaoDie");
		console.log(BaiBaoDie);
        console.log("tempBBD");
        console.log(tempBBD);
		console.log("booksTypeArrays");
		console.log(booksTypeArrays);
		for(var i=0; i<3 ;i++){
			if(tempBBD[i].replace(/\d+/g,"")!=="book") {
                if (tempBBD[i])
                    $("#q" + i).attr("src", "//you-chin-hsieh.github.io/Nobita_Room/BaiBaoDie/" + tempBBD[i] + ".png");
                else
                    $("#q" + i).attr("src", "//you-chin-hsieh.github.io/Nobita_Room/BaiBaoDie/blank.png");
            }
            else{
                if (tempBBD[i]){
                    console.log(booksTypeArrays[tempBBD[i]])
                    $("#q" + i).attr("src", "//you-chin-hsieh.github.io/Nobita_Room/BaiBaoDie/" + booksTypeArrays[tempBBD[i]] + ".png");
                }
                else
                    $("#q" + i).attr("src", "//you-chin-hsieh.github.io/Nobita_Room/BaiBaoDie/blank.png");
			}
		}
	}
	return objParent;
}
		
function throwObj(objList, objParent, camera, scene){
	
	if(BBDIndex > 0){
		var putDownObj = camera.getChildren()[3 + BBDIndex];
		
		BBDIndex--;
			
		for(item in putDownObj.getChildren()){
			putDownObj.getChildren()[item].isVisible = true;
			putDownObj.getChildren()[item].isPickable = true;
		}
		
		putDownObj.rotation.y = camera.rotation.y;
		
		putDownObj.parent = null;

        //console.log(BaiBaoDie);
        BaiBaoDie.pop();
       //console.log(BaiBaoDie);
		
		var tempBBD = reverseArr(BaiBaoDie);
		


		var rotateY = camera.rotation.y;
			
		var xPlus;
		var zPlus;
		
		xPlus = 80 * Math.sin(rotateY);
		zPlus = 80 * Math.cos(rotateY);
		
		putDownObj.position = camera.position;

		var moveBox =  new BABYLON.Animation(
			"moveBox",
			"position",
			40,
			BABYLON.Animation.ANIMATIONTYPE_VECTOR3,
			BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);
			
		var start = putDownObj.position;
		
		var end =  new BABYLON.Vector3(camera.position.x + xPlus, -20, camera.position.z + zPlus);

		var keys = [];
		keys.push({
			frame: 0,
			value: start
		});

		keys.push({
			frame: 20,
			value: end
		});

		moveBox.setKeys(keys);
		putDownObj.animations.push(moveBox);
		var animation = scene.beginAnimation(putDownObj,0,60,true);
		
		for (item in putDownObj.getChildren()){
			//console.log(putDownObj.getChildren()[item]);
			var random = (Math.random() > 0.5) ? Math.random() * 10 : Math.random() * 10;
			var rotateX = Math.random() * 2;
			var rotateY = Math.random() * 2;
			var rotateZ = Math.random() * 2;
			putDownObj.getChildren()[item].position.x += random;
			putDownObj.getChildren()[item].rotation.x = rotateX;
			putDownObj.getChildren()[item].rotation.y = rotateY;
			putDownObj.getChildren()[item].rotation.z = rotateZ;
		}
        var booksTypeArrays = returnBookArray();
		for(var i=0; i<3 ;i++){
			console.log("tempBBD");
			console.log(tempBBD);
            if (tempBBD[i]){
                if(tempBBD[i].replace(/\d+/g,"")!=="book")
                    $("#q" + i).attr("src",  "//you-chin-hsieh.github.io/Nobita_Room/BaiBaoDie/" + tempBBD[i] + ".png");
                else
                    $("#q" + i).attr("src", "//you-chin-hsieh.github.io/Nobita_Room/BaiBaoDie/" + booksTypeArrays[tempBBD[i]] + ".png");
			}
			else {
                $("#q" + i).attr("src", "BaiBaoDie/blank.PNG");
            }

             /*
            if(tempBBD[i].replace(/\d+/g,"")!=="book") {
                if (tempBBD[i])
                    $("#q" + i).attr("src", "BaiBaoDie/" + tempBBD[i] + ".PNG");
                else
                    $("#q" + i).attr("src", "BaiBaoDie/blank.PNG");
            }
            else{
                if (tempBBD[i]){
                    $("#q" + i).attr("src", "BaiBaoDie/" + booksTypeArrays[tempBBD[i]] + ".PNG");
                }
                else
                    $("#q" + i).attr("src", "BaiBaoDie/blank.PNG");
            }
            */
		}
	}
	return objParent;
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

