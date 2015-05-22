module.exports = function(app) {

    var controller = {};
    controller.index = function *(req, res) {
        yield this.render('index', {titulo: 'Bem-vindo ao Koajs'});
    };
    return controller;
};