var Model = require('./model');

const getAll = async() =>{
    try{
        let result = {};
        result = await Model.find();
        if(result){
            return result
        }
    }catch(err){
        console.error('[Error: ]' + err);
    }
}

const getOne = async(id) => {
    try{
        let result = {};
        result = await Model.findById(id);
        // console.log(result)
        if(result){
            return result
        }
    }catch(err){
        console.error('[Error: ]' + err);
    }
}


const addData = async(newData) => {
    try{
        const dataSaved = new Model(newData);
        return await dataSaved.save();
    }catch(err){
        console.error('[Error: ]' + err);
    }
}

const updateData = async(newData) => {
    try{
        const foundedData = await Model.findOne({
            _id : newData._id,
        })
        if(foundedData){
            foundedData.nombres = newData.nombres,
            foundedData.apellidos = newData.apellidos,
            foundedData.email = newData.email,
            foundedData.password = newData.password,
            foundedData.profile_image = newData.profile_image
            const resultado = await foundedData.save();
            return resultado;
        }else{
            return {message: "Usuario no encontrado!, no se actualizó la información."}
        }
        
    }catch (error) {
        console.error('[Error: ]', error);
    }    
};

const deleteData = async(id) => {
    try{
        const mjs = {
            data : await Model.findByIdAndDelete({
            _id: id
        }),
        mensaje : `Usuario eliminado!`,
    }
        return mjs;
    }catch (error) {
        console.error('[Error: ]', error);
    } 
};




module.exports = {
    getAll: getAll,
    getOne: getOne,
    save: addData,
    update: updateData,
    delete: deleteData
}