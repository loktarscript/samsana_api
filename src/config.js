module.exports = {
    database: {
        URL : 'mongodb+srv://samsana:samsana@clustergcp.wcc0t.mongodb.net/demoSamsana?retryWrites=true&w=majority'
    },
    jwt:{
        secret: process.env.JWT_SECRET || 'notsecret!'
    }
}