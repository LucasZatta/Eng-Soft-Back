const authController = require('./controllers/authController');
function routes(app){
    app.route('/auth/register')
        .post( authController.register);
}
module.exports = routes;