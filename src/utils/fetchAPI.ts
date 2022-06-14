const API_BASE_URL = 'http://localhost:4000';

const fetchAPI = async (url: string, method: 'GET' | 'PUT' | 'POST' | 'DELETE' = 'GET', body?: object) => {
  const headers = new Headers();
  const accessToken = localStorage.getItem('accessToken');
  if (accessToken) headers.append('authorization', `Bearer ${accessToken}`);

  if (method === 'GET') {
    return await fetch(API_BASE_URL + url, { method, headers })
      .then((value) => value.json())
      .catch(() => ({ status: 'fail', message: 'An unexpected error occurred' }));
  }

  headers.append('Content-Type', 'application/json');
  const requestOptions = {
    method,
    headers,
    body: JSON.stringify(body),
  };

  return await fetch(API_BASE_URL + url, requestOptions)
    .then((value) => value.json())
    .catch(() => ({ status: 'fail', message: 'An unexpected error occurred' }));
};

export default fetchAPI;
