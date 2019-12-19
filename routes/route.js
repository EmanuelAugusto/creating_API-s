module.exports = function(app){

    var userController = require('../app/controllers/userController');

    app.route("/users")
    .get(userController.findAll)
    .post(userController.create)
}