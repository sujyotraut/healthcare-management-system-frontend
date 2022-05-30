import React from 'react';
import { Container, Nav, Navbar, Image } from 'react-bootstrap';

const HomePage = () => {
  return <Image fluid width='100%' src={process.env.PUBLIC_URL + '/img/homepage-background.jpg'} />;
};

export default HomePage;
