var userModel = require('../usuarios/model');

const userReport = () => {
    return new Promise (async(resolve, reject)=>{
        let data = await userModel.find({}).select('_id nombres apellidos email profile_image');
        // console.log(data)
        resolve({body: data});
    });
};

module.exports = {
    userReport
}