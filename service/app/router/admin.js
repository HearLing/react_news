
module.exports = app => {
  const { router, controller } = app;
  var adminauth = app.middleware.adminauth;
  // console.log('2222222222222:' + adminauth);
  console.log('cccccccccc:'+ controller.admin.main.index);
  router.get('/admin/index', controller.admin.main.index);
  router.post('/admin/checkLogin', adminauth, controller.admin.main.checkLogin);
  router.get('/admin/getTypeInfo', adminauth, controller.admin.main.getTypeInfo);
};
