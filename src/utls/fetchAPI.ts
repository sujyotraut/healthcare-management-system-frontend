import { useEffect } from 'react';
import { API_BASE_URL } from '../config/config';

const fetchAPI = async (url: string, method: 'GET' | 'PUT' | 'POST' | 'DELETE' = 'GET', body?: object) => {
  const headers = new Headers();
  const accessToken = localStorage.getItem('accessToken');
  if (accessToken) headers.append('authorization', `Bearer ${accessToken}`);

  if (method === 'GET') {
    const res = await fetch(API_BASE_URL + url, { method, headers });
    return await res.json();
  }

  headers.append('Content-Type', 'application/json');
  const requestOptions = {
    method,
    headers,
    body: JSON.stringify(body),
  };

  const res = await fetch(API_BASE_URL + url, requestOptions);
  return await res.json();
};

export default fetchAPI;
