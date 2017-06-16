const Koa = require('koa');
const Router = require('koa-router');
const cors = require('koa-cors');
const fetch = require('node-fetch');
const qs = require('querystring');
const convert = require('koa-convert');

const app = new Koa();
const router = new Router();

let baseURL = 'http://tj.nineton.cn/Heart/index';

app.use(convert(cors()));

router.get('/', (ctx, next) => {
  // ctx.router available
  next();
});

router.get('/all', async (ctx, next) => {
  let params = {
    city: 'CHSH000000',
    language: 'zh-chs',
    unit: 'c',
    aqi: 'city',
    alarm: 1,
    key: '78928e706123c1a8f1766f062bc8676b'
  };
  params = qs.stringify(params);
  const res = await fetch(`${baseURL}/all?${params}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  });
  const json = await res.json();
  ctx.body = json;
  next();
});

router.all('/future24h', async (ctx, next) => {
  let params = {
    city: 'CHSH000000',
    language: 'zh-chs',
    key: '78928e706123c1a8f1766f062bc8676b'
  };
  params = qs.stringify(params);
  const res = await fetch(`${baseURL}/future24h?${params}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  });
  const json = await res.json();
  ctx.body = json;
  next();
});

app.use(router.routes()).use(router.allowedMethods());
app.listen(3000);
