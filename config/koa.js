var app = require('koa')()
    ,load = require('express-load')
    ,render = require('koa-swig')
    ,router = require('koa-router')
    ,serve = require('koa-static');

app.context.render = render({
  root: 'app/views',
  autoescape: true,
  cache: 'memory', // disable, set to false
  ext: 'html'
});
app.use(serve('public'));

// Middlewares da aplicação. A ordem é importante
app.use(require('../app/middlewares/connection'));

app.use(router(app));

load('models', {cwd: 'app'})
    .then('controllers')
    .then('routes')
    .into(app);

module.exports = app;


