const routes = require('next-routes');

// Name   Page      Pattern
module.exports = routes()
  .add('/', '/')
  .add('/admin', '/admin')
  .add('/admin/articles', '/admin/articles')
  .add('/admin/users', '/admin/users')
  .add('/admin/tags', '/admin/tags')
  .add('adminArticleDetail', '/admin/articles/:id', '/admin/articles/create') // неочевидный референс - по articleDetail страницы нет, это просто индекс роута, 3 аргумент - страница в pages, посередине - паттерн
  .add('/admin/article-categories', '/admin/article-categories')
  .add('articleCategoryDetail', '/admin/article-categories/:id', '/admin/article-categories/create')
  .add('/auth/login', '/auth/login')
  .add('/auth/register', '/auth/register')
  .add('articleDetail', '/articles/:id', '/articles/detail')
// .add('/admin/articles/create', '/admin/articles/create')

// .add('blog', '/blog/:slug')
// .add('user', '/user/:id', 'profile')
// .add('/:noname/:lang(en|es)/:wow+', 'complex')
// .add({ name: 'beta', pattern: '/v3', page: 'v3' });
