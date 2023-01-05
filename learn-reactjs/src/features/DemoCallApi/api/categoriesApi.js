import axiosClients from './axiosClients';

const categoriesApi = {
  getAll(params) {
    const url = '/posts';
    return axiosClients.get(url, { params });
  },

  get: (id) => {
    const url = `/posts/${id}`;
    return axiosClients.get(url);
  },

  add: (data) => {
    const url = '/post';
    return axiosClients.post(url, data);
  },

  update(data) {
    const url = `/post/${data.id}`;
    return axiosClients.patch(url, data);
  },

  remove: (id) => {
    const url = `/post${id}`;
    return axiosClients.delete(url);
  },
};

export default categoriesApi;
