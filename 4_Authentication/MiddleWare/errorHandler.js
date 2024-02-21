const constants = require('../../Constants.js')

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case constants.VALIDAION_ERROR:
            res.json({ 
                title: "Validation Failed", 
                message: err.message, 
                stackTrack: err.stack 
            });
            break;

        case constants.NOT_FOUND:
            res.json({ 
                title: "Not Found", 
                message: err.message, 
                stackTrack: err.stack 
            });
            break;
        case constants.FORBIDDEN:
            res.json({ 
                title: "Forbidden", 
                message: err.message, 
                stackTrack: err.stack 
            });
            break;
        case constants.UNAUTHORIZED:
            res.json({ 
                title: "Un authorized access", 
                message: err.message, 
                stackTrack: err.stack 
            });
            break;
        default: console.log("No Error")
        res.json({message: err.message, 
            stackTrack: err.stack })
    }
    next();
}

module.exports = errorHandler