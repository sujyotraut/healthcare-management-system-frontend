import React from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../contexts/user.context';
import useFetchAPI from './useFetchAPI';

const useAuth = () => {
  const { user, setUser } = React.useContext(UserContext);
  const { fetchAPI } = useFetchAPI();
  const navigate = useNavigate();

  const register = async (values: any) => {
    const resJson = await fetchAPI('/users/register-patient', 'POST', values);
    if (resJson.status !== 'success') return;
    const accessToken = resJson.data.accessToken;
    localStorage.setItem('accessToken', accessToken);

    const userJson = await fetchAPI('/users/me');
    if (userJson.status !== 'success') {
      localStorage.removeItem('accessToken');
      return setUser(null);
    }

    setUser(userJson.data.me);
    navigate('/');
  };

  const login = async (values: any) => {
    const resJson = await fetchAPI('/users/login', 'POST', values);
    if (resJson.status !== 'success') return;
    const accessToken = resJson.data.accessToken;
    localStorage.setItem('accessToken', accessToken);

    const userJson = await fetchAPI('/users/me');
    if (userJson.status !== 'success') {
      localStorage.removeItem('accessToken');
      return setUser(null);
    }

    setUser(userJson.data.me);
    navigate('/');
  };

  const logout = () => {
    localStorage.removeItem('accessToken');
    setUser(null);
    navigate('/');
  };

  const fetchUser = () => {
    fetchAPI('/users/me').then((resJson) => {
      if (resJson.status === 'success') setUser(resJson.data.me);
      else logout();
    });
    // logout for connection error (fetch error)
    // .catch(() => logout());
  };

  return { user, fetchUser, register, login, logout };
};

export default useAuth;
