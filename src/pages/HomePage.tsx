import Image from 'react-bootstrap/Image';

const HomePage = () => {
  return <Image fluid width='100%' src={process.env.PUBLIC_URL + '/img/homepage-background.jpg'} />;
};

export default HomePage;
