/**
 * Created by p5030 on 2017/6/5.
 */
function boom(meshes,length){
    if( meshes.loadedMeshes !== undefined&&counter<=length){
        //scene.dispose(fuck)
        console.log(meshes.loadedMeshes[counter]);
        meshes.loadedMeshes[counter].dispose();
        counter++
    }
    return meshes
}

