const routes = require('next-routes');

// Name   Page      Pattern
module.exports = routes()
  .add('/', '/')
  .add('/admin', '/admin')
  .add('/admin/articles', '/admin/articles')
  .add('/admin/users', '/admin/users')
  .add('/admin/tags', '/admin/tags')
  .add('articleDetail', '/admin/articles/:id', '/admin/articles/create') // неочевидный референс - по articleDetail страницы нет, это просто индекс роута, 3 аргумент - страница в pages, посередине - паттерн
  .add('/admin/article-categories', '/admin/article-categories')
  .add('articleCategoryDetail', '/admin/article-categories/:id', '/admin/article-categories/create');
// .add('/admin/articles/create', '/admin/articles/create')

// .add('blog', '/blog/:slug')
// .add('user', '/user/:id', 'profile')
// .add('/:noname/:lang(en|es)/:wow+', 'complex')
// .add({ name: 'beta', pattern: '/v3', page: 'v3' });