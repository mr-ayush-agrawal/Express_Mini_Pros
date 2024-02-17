const notFound = (req, res, next) => {
    res.status(404).send('<h1>Error 404</h1><br>Page Not found')
    next();
}

module.exports = notFound