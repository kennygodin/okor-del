import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import './pageLayout.scss';
import { Outlet } from 'react-router-dom';

const PageLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default PageLayout;
