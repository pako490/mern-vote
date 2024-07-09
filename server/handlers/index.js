//ERROR HANDLERS

module.exports.notFound = app.use((req, res, next) => {
    const err = new Error('Not found');
    err.status = 404;
    next(err);
});

module.exports.errors = app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        err: err.message || 'Someting went wrong'
    });
});

