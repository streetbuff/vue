/**
 * Created by pomy on 11/5/16.
 */

'use strict';
let path = require('path');

let compress = require('koa-compress');
let logger = require('koa-logger');
let serve = require('koa-static');
let koa = require('koa');
let koaJson = require('koa-json');
let bodyParser = require('koa-bodyparser');
let render = require('koa-swig');

let controller = require('./router');

let app = koa();

app.context.render = render({
    root: path.resolve(__dirname, './views'),
    autoescape: true,
    cache: process.env.NODE_ENV != 'production' ? false : 'memory',
    ext: 'html'
});

//app.use(cors());
app.use(bodyParser());
app.use(koaJson());
// Serve static files
app.use(serve(path.resolve(__dirname, '../public')));
// Compress
app.use(compress());
// Logger
app.use(logger());

controller.register(app);

let port = process.env.PORT || 9000;

app.listen(port, () => {
    console.log(
      `Server listening on localhost:${port}, env: ${process.env.NODE_ENV}`
    );
});
