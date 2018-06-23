/**
 * Created by p5030 on 2017/5/25.
 */
//簡化讀取obj File的function
//scene: 你所建造好的場景
//objPath : obj檔案的位置
//obj: obj的檔名
//position:{ 算是物件
// x:  x座標的位置
// y:  y座標的位置
// z:  z座標的位置
//}
/*
size :{ //控制大小的物件
 x: x向量的大小
 y: y向量的大小
 z: z向量的大小
}
*/
/*
 angle :{ //控制角度的物件
 x: x向量的角度
 y: y向量的角度
 z: z向量的角度
 }
 */

var booksData = {};
function loadObj(scene,objname,objPath,obj,position,size,angle,counter){ //position is { x: x , y: y  ,z:z}
	var loader = new BABYLON.AssetsManager(scene);
	console.log("Obj Names")
    console.log(obj)
	if(obj === "Redbook.obj"){

	    booksData[objname] = "Redbook";
	    //RedBook.push(objname);
    }
    else if(obj === "Bluebook.obj"){
        booksData[objname] = "Bluebook";
    }
    else if(obj === "Orangebook.obj"){
        booksData[objname] = "Orangebook";
    }
    else if(obj==="Yellowbook.obj"){
        booksData[objname] = "Yellowbook";
    }
    else if(obj==="GreenBook.obj"){
        booksData[objname] = "GreenBook";
    }
    BABYLON.OBJFileLoader.OPTIMIZE_WITH_UV = true;
    var pos = function(t) {
        t.loadedMeshes.forEach(function(m) {
            m.position.x =position.x;
            m.position.y = position.y;
            m.position.z = position.z;
            m.scaling.x = size.x;
            m.scaling.y = size.y;
            m.scaling.z = size.z;
            m.rotation.x = angle.x;
            m.rotation.y =angle.y;
            m.rotation.z = angle.z;
            m.checkCollisions = true; //加入碰撞，不可穿越
            obj.name = objname;
			
        });
		counter();
    };
    var object = loader.addMeshTask(objname, "", objPath, obj);
   // console.log(object)
    //console.log("fuck")
    //console.log(object)

    object.onSuccess = pos;
    loader.load();
    //console.log(object.loadedMeshes)
    return {"scene":scene,"object":object};
}
function returnBookArray(){
    return booksData;
}

