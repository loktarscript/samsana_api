const auth = require('../../helpers/auth');
const bcrypt = require('bcrypt');
const store = require('./store');
var nodemailer = require('nodemailer');
const { encryptPass } = require('../../helpers/validations');

const login = (email, password) => {
    return new Promise(async (resolve, reject) => {
        const data = await store.login(email);
        return bcrypt.compare(password, data.password)
            .then(comparador => {
                if (comparador === true) {
                    //generar token
                    let token = auth.sign({data});
                    // console.log(token)
                    if (token) {
                        resolve({token, data});
                    } else {
                        reject('No se envía token');
                    }
                } else {
                   reject('Contraseña errónea');
                }
            })
    });
};

const forgotPassword = (req, res, email) => {
    return new Promise((resolve, reject) => {
        // console.log(email);
        store.findByEmail(email)
            .then(bonding => {                
                data = bonding;
                let password = generadorPassword(10);
                const passToSave = encryptPass(password);
                // console.log(passToSave)
                if (bonding) {
                    const newData = {
                        _id: bonding._id,
                        nombres: bonding.nombres,
                        apellidos: bonding.apellidos,
                        email: bonding.email,
                        password: passToSave,
                        profile_image: bonding.profile_image
                    };
                    // console.log(newData)
                    // const result = await store.update(newData);
                    // resolve({message: "Pass actualizada correctamente!",result});
                    // resolve('HOLA')
                    store.updatePassByEmail(newData)
                    .then(resp => {
                        // console.log(resp)
                        if (resp.check) {
                            sendMail(data.email, password);
                            resolve(resp.message);
                        }
                    })
                    .catch(err => {
                        reject(err);
                    })
                }else{
                    response.success(req, res, 'Email no encontrado en nuestros registros!', 400)
                }
                
            })
            .catch(err => reject({ status: false, message: 'Email inexistente en nuestros registros', error: err }));
    })
}

const generadorPassword = (length) => {
    var resultado = '';
    var caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var caracteresLength = caracteres.length;
    for (var i = 0; i < length; i++) {
        resultado += caracteres.charAt(Math.floor(Math.random() * caracteresLength));
    }
    return resultado;
}

const sendMail = (email, pass) => {
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'sebastiancortes.2202@gmail.com',
            pass: 'icwkllmwbebmhxer'
        }
    });
    // Definimos el email
    var mailOptions = {
        from: 'passwordreset@demo.com',
        to: email,
        subject: 'Su contraseña ha sido modificada',
        text: 'Hola,\n\n' +
        'Este es un mensaje de confirmación a su dirección de correo electrónico:  ' + email + ' , en donde le confirmamos que su contraseña ha sido modificada.\n' +
        'Nueva password: ' + pass,
    };
    transporter.sendMail(mailOptions, function(error, info){
        if (error){
            console.log(error);
            res.send(500, err.message);
        } else {
            console.log("Email sent");
            res.status(200).json(req.body);
        }
    });
};

module.exports = {
    login,
    forgotPassword
}