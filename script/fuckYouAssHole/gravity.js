/**
 * Created by p5030 on 2017/6/8.
 */
function gravity(meshes){
    console.log("fuck");
    if(meshes!==undefined&& meshes.loadedMeshes!==undefined){
        console.log("fuck2");
    for(var i=0;i<meshes.loadedMeshes.length;i++){
        meshes.loadedMeshes[counter].physicsImpostor = new BABYLON.PhysicsImpostor(meshes.loadedMeshes[counter], BABYLON.PhysicsImpostor.BoxImpostor, { mass: 10, restitution: 0.9, friction: 0.05 }, scene);
    }
    }
    return meshes;
}
