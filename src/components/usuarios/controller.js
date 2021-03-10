const { encryptPass, validateHash } = require('../../helpers/validations');
var store = require('./store');

const getAll = () => {
    return new Promise(async(resolve, reject) =>{
        const result = await store.getAll()
        if(result){
            resolve(result)
        }else{
            reject({message: 'no hay registros para este usuario'})
        }
    })
}

const getOneUser = (id) => {
    return new Promise(async(resolve, reject) =>{
        if(!id){
            reject('No hay info amigo!');
        }else{
            const result = await store.getOne(id);
            if(result){
                resolve(result)
            }else{
                reject({message: 'no hay registros para este usuario'})
            }
        }
    })
}

const saveUser = (body) => {
    return new Promise((resolve, reject) => {
        if (!body) {
            console.log('NO DATA');
            reject('No hay info amigo!');
        } else {
            const newData = {
                nombres: body.nombres,
                apellidos: body.apellidos,
                email: body.email,
                password: encryptPass(body.password),
                profile_image: body.profile_image
            };
            store.save(newData);
            resolve(
                {
                    message: 'registro agregado',
                    data: newData
                }
            );
        }
    });
}

const updateData = (id, body) => {
    const newData = {
        _id: id,
        nombres: body.nombres,
        apellidos: body.apellidos,
        email: body.email,
        password: body.password,
        profile_image: body.profile_image
    };
    // console.log(newData)
    return new Promise(async (resolve, reject) => {
        if (!id) {
            reject('Invalid data 666');
            return false;
        }
        const result = await store.update(newData);
        resolve(result);
    });
}

const deleteData = (id) => {
    return new Promise(async (resolve, reject) => {
        if (!id) {
            reject('Invalid ID');
            return false
        }
        const result = await store.delete(id);
        resolve(result);
    });
}

const changePassword = (oldPass, newPass, confirmNewPass, id) =>{
    return new Promise(async (resolve, reject) => {
        if(confirmNewPass === newPass){
          const userData = await store.getOne(id);
          if(userData){
            const validate = validateHash(oldPass, userData.password);
            validate.then(async data => {
                // console.log(data)
                if(!data){
                    resolve({message: 'Contraseña antigua no coincide con registro'})
                }else{
                    const passToSave = encryptPass(newPass);
                    const newData = {
                        _id: id,
                        nombres: userData.nombres,
                        apellidos: userData.apellidos,
                        email: userData.email,
                        password: passToSave,
                        profile_image: userData.profile_image
                    };
                    const result = await store.update(newData);
                    resolve({message: "Pass actualizada correctamente!",result});
                }
            })
          }else{
              reject({message:'Usuario no encotnrado por ID'});
          }
        }else{
            reject({message: 'Contraseñas no coinciden'})
        }
    });
    
}

module.exports = {
    getAll,
    getOneUser,
    saveUser,
    updateData,
    deleteData,
    changePassword
}