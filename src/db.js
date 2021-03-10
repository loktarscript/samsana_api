const db = require('mongoose');
db.Promise = global.Promise;

const conexion = async (url) => {
    await db.connect(url, {
        useNewURLParser: true,
        useUndefinedTopology: true
    }),
        console.log('DB OK');
}



module.exports = conexion;