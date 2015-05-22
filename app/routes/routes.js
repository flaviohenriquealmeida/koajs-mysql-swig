module.exports = function(app) {

    app.get('/', app.controllers.index.index);
    app.get('/login', function *() {
           yield this.render('login');
    });
};