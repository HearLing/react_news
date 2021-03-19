const Controller = require('egg').Controller;

class MainController extends Controller {
  async index() {
    // 首页的文章列表数据
    this.ctx.body = 'hi api';
  }
  // 判断用户名密码是否正确
  async checkLogin() {
    console.log(this.ctx);
    const userName = this.ctx.request.body.userName;
    const password = this.ctx.request.body.password;
    const sql =
      " SELECT userName FROM admin_user WHERE userName = '" +
      userName +
      "' AND password = '" +
      password +
      "'";

    const res = await this.app.mysql.query(sql);
    console.log('asdadsasdasda:' + res);
    if (res.length > 0) {
      // 登录成功,进行session缓存
      const openId = new Date().getTime();
      this.ctx.session.openId = { openId };
      console.log('111111111111111111111111111session: ' + this.ctx.session);
      this.ctx.body = { data: '登录成功', openId };
    } else {
      this.ctx.body = { data: '登录失败' };
    }
  }
  // 获取文章类别接口
  async getTypeInfo() {
    const resType = await this.app.mysql.select('type');
    this.ctx.body = { data: resType };
  }
}

module.exports = MainController;
