import React from 'react';
import { Container, Nav, Navbar, Image } from 'react-bootstrap';

const NotFoundPage = () => {
  return <Image fluid width='100%' src={process.env.PUBLIC_URL + '/img/not-found.png'} />;
};

export default NotFoundPage;
