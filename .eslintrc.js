module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module' //类型为module，因为代码使用了使用了ECMAScript模块
  },
  env: {
    browser: true //预定义的全局变量，这里是浏览器环境
  },
  extends: ['plugin:vue-libs/recommended'],
  plugins: ['react', 'jsx-a11y', 'import']
};
