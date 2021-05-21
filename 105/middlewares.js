module.exports.singleMiddleware = (request, response, next) => {
    response.render('index', {
            name: process.env.PATH
          });
    next();
    };