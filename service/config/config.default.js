/* eslint valid-jsdoc: "off" */

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1615533471759_8964';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  // eslint-disable-next-line eggache/no-override-exports
  config.mysql = {
    // database configuration
    client: {
      // host
      host: 'localhost',
      // port
      port: '3306',
      // username
      user: 'root',
      // password
      password: '123456',
      // database
      database: 'test01',
    },
    // load into app, default is open
    app: true,
    // load into agent, default is close
    agent: false,
  };

  config.security = {
    csrf: {
      enable: false,
    },
    domainWhiteList: [ '*' ],
  };
  config.cors = {
    origin: 'http://localhost:3000',
    credentials: true, // 允许Cookie可以跨域
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
  };

  return {
    ...config,
    ...userConfig,
  };

};
