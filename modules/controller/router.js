var router = require('express').Router();

router.use(function timeLog (req, res, next) {
    var path = require('path')
    var scriptName = path.basename(__filename)
    console.log('Time callback of',scriptName,' with url ',req.url,': ', Date.now())
    next()
});