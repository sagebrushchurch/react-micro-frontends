import axios from 'axios';

const call = method => (url, { body, query, headers } = {}) => {
  return axios({
    method,
    baseURL: `http://microfe.sagebrush.dev/backend${url}`,
    data: body,
    headers,
    params: query
  })
  .then(response => response.data);
};

export default {
  get: call('GET'),
  post: call('POST'),
  put: call('PUT'),
  delete: call('DELETE')
};