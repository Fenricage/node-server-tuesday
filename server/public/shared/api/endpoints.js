// сюда вынести ундпоинты из индекса
const endpoints = r => ({
  auth: {
    getToken: (username, password) => r('/token/obtain/',
      {
        method: 'post',
        data: {
          username,
          password,
        },
      }),
    changePassword: (userId, data) => r(`/users/${userId}/password/`, {
      method: 'post',
      data,
    }),
    register: data => r('/register', {
      method: 'post',
      data,
    }),
    login: data => r('/login', {
      method: 'post',
      data,
    }),
    currentUser: () => r('/me', {
      method: 'get',
    }),
  },
  utils: {
    clientPhoto: formData => r('/utils/photos/',
      {
        method: 'post',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        data: formData,
      }),
    getPhoto: formData => r('/imgread',
      {
        method: 'get',
      }),
    createAttachment: (formData, type) => r(`/attachments/${type}`,
      {
        method: 'post',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        data: formData,
      }),
    getAttachment: id => r(`/attachments/${id}`,
      {
        method: 'get',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      }),
  },
  roles: {
    getAll: () => r('/users/roles/',
      {
        method: 'get',
      }),
    getRole: roleId => r(`/users/roles/${roleId}`,
      {
        method: 'get',
      }),
    createRole: data => r('/users/roles/',
      {
        method: 'post',
        data,
      }),
    editRole: (id, data) => r(`/users/roles/${id}/`,
      {
        method: 'put',
        data,
      }),
    deleteRole: id => r(`/users/roles/${id}`,
      {
        method: 'delete',
      }),
  },
  users: {
    getAll: () => r('/users',
      {
        method: 'get',
      }),
    createUser: data => r('/users/',
      {
        method: 'post',
        data,
      }),
    getUser: id => r(`/users/${id}/`,
      {
        method: 'get',
      }),
    editUser: (id, data) => r(`/users/${id}/`,
      {
        method: 'put',
        data,
      }),
    deleteUser: id => r(`/users/${id}/`,
      {
        method: 'delete',
      }),
  },
  articles: {
    getAll: (queryParams = { page: 1, size: 100 }) => r('/articles',
      {
        method: 'get',
        params: {
          ...queryParams,
        },
      }),
    getOne: id => r(`/article/${id}`,
      {
        method: 'get',
      }),
    create: data => r('/article',
      {
        method: 'post',
        data,
      }),
    delete: id => r(`/article/${id}`,
      {
        method: 'delete',
      }),
    patch: (id, data) => r(`/article/${id}`,
      {
        method: 'patch',
        data,
      }),
    search: query => r('/article/search',
      {
        method: 'post',
        data: query,
      }),
  },
  articeCategories: {
    getAll: extra => r('articles/categories',
      {
        method: 'get',
        ...extra,
      }),
    deleteOne: id => r(`articles/categories/${id}`,
      {
        method: 'delete',
      }),
    getOne: id => r(`/articles/categories/${id}`,
      {
        method: 'get',
      }),
    patch: (id, data) => r(`/articles/categories/${id}`,
      {
        method: 'patch',
        data,
      }),
  },
  tags: {
    getAll: extra => r('tags', {
      method: 'get',
      ...extra,
    }),
    create: data => r('tags', {
      method: 'post',
      data,
    }),
    patch: (id, data) => r(`/tags/${id}`,
      {
        method: 'patch',
        data,
      }),
    deleteOne: id => r(`tags/${id}`,
      {
        method: 'delete',
      }),
  },
});

export default endpoints;
