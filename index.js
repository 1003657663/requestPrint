const Koa = require('koa')
const bodyParser = require('koa-bodyparser');
const app = new Koa();
app.use(bodyParser({
    enableTypes: ['json', 'form', 'text']
}));

app.use(async ctx => {
    console.log('请求参数:', ctx);
    console.log('请求body:', ctx.request.body);
});

app.listen(5000);
console.log('listen 5000')