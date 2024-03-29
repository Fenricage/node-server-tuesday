const routes = require('next-routes');

// Name     Pattern      Page
module.exports = routes()
  // HOME
  .add('/', '/')
  .add('/articles', '/articles')
  .add('/best', '/')
  .add('articleDetail', '/articles/:id', '/articles/detail')
  .add('articleCategoryDetail', '/categories/:categoryId', '/categories')
  // ADMIN
  .add('/admin', '/admin')
  .add('/admin/articles', '/admin/articles')
  .add('/admin/users', '/admin/users')
  .add('/admin/tags', '/admin/tags')
  .add('adminArticleDetail', '/admin/articles/:id', '/admin/articles/create') // неочевидный референс - по articleDetail страницы нет, это просто индекс роута, 3 аргумент - страница в pages, посередине - паттерн
  .add('/admin/article-categories', '/admin/article-categories')
  .add('articleAdminCategoryDetail', '/admin/article-categories/:id', '/admin/article-categories/create')
  .add('/admin/attachments', '/admin/attachments')
  // AUTH
  .add('/auth/login', '/auth/login')
  .add('/auth/register', '/auth/register')
  // OTHER
  .add('/about', '/about')
  // BLOG
  .add('/blog', '/blog')
  .add('blogDetail', '/blog/:id', '/blog/detail');
