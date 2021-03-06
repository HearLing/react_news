// eslint-disable-next-line strict
module.exports = app => {
  const { router, controller } = app;
  router.get('/default/index', controller.default.home.index);
  // router.get('/default/focus', controller.default.home.focus);
  router.get('/default/getArticleList', controller.default.home.getArticleList);
  router.get('/default/getArticleById/:id', controller.default.home.getArticleById);
};
