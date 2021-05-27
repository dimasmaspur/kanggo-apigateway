const apiAdapter = require('../../apiAdapter');
const{
    URL_SERVICE_USER,
    JWT_SECRET,
    JWT_ACCESS_TOKEN_EXPIRED
} = process.env;
const jwt = require('jsonwebtoken');

const api = apiAdapter(URL_SERVICE_USER);

module.exports = async(req,res)=>{
    try {
        const user = await api.post('/users/login', req.body);
        const data = user.data.data;

        const token = jwt.sign({data: data}, JWT_SECRET, {expiresIn:JWT_ACCESS_TOKEN_EXPIRED});

        return res.json({
            status:'success',
            data:{
                token
            }
        })

    } catch (error) {   

        if(error.code === 'ECONNREFUSED'){
            return res.status(500).json({status:'error', message:'service unavailable'});
        }
        const { status, data}= error.response;
        return res.status(status).json(data);
    }
}