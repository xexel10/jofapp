const PROXY_CONFIG = [
  {
    context: ['/api'],
    taget: 'https://jof.herokuapp.com/api/',
    secure: false,
    logLevel: 'debug',
    pathRewrite: {'^/api': ''}
  }

];

module.exports = PROXY_CONFIG;
