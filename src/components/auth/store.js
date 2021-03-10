var Model = require('../usuarios/model');

const login = async (email) => {
    var dataFounded = await Model.findOne({ email: email })
    if (dataFounded) {
        return dataFounded;
    } else {
        return {}
    }
};

const findByEmail = async (email) => {
    return new Promise(async (resolve, reject) => {
        var dataFounded = await Model.findOne({ email: email })
        if (dataFounded) {
            resolve(dataFounded);
        } else {
            resolve({});
        }
    });
}

const updatePassByEmail = (newData) => {
    return new Promise(async (resolve, reject) => {
        try {
            const foundedData = await Model.findOne({
                _id: newData._id,
            })
            // console.log(foundedData)
            if (foundedData) {
                foundedData.nombres = newData.nombres,
                    foundedData.apellidos = newData.apellidos,
                    foundedData.email = newData.email,
                    foundedData.password = newData.password,
                    foundedData.profile_image = newData.profile_image
                const resultado = await foundedData.save();
                resolve({resultado, check: true});
            } else {
                return { message: "Usuario no encontrado!, no se actualizó la información." }
            }

        } catch (error) {
            console.error('[Error: ]', error);
        }
    });
}

module.exports = {
    login,
    findByEmail,
    updatePassByEmail
}