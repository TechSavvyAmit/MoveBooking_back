function errorHandler(statusCode, err, req, res, next) {
    // console.error(err.stack);

    if(res.headersSent) {
        return next(arr);
    }

    console.log("ERROR MIDDLEWARE CALLED")
    res.status(statusCode || 500).json ({
        ok: false, // See the "ok" field to false for errrors
        message: err.message || 'Internal Server Error'
    })
}

module.exports = errorHandler;