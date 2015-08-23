try{
    require('dotenv').config({silent: true, path: process.env.NODE_ENV || ".env" });
    require('dotenv').load();
}catch(e){/***/}

module.exports = {
    "uri": process.env.URI,
    "endpoint": process.env.ENDPOINT
}
