const api = {
  post (url, data) {
    return fetch(url, {
      method: 'POST',
      data: JSON.stringify(data)
    });
  }
};

export default api;
