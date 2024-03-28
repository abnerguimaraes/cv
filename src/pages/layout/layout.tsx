import { Outlet } from 'react-router-dom';

import Navigation from '../../components/navigation/navigation';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import deskClasses from './css/layout.desk.module.css';
import mobileClasses from './css/layout.mobile.module.css';

function RootLayout() {
  return (
    // todo apply correct lay out and put style in a scss external file....
    <section className={`${deskClasses.main} ${mobileClasses.main}`}>
      <Header/>
      <Navigation/>
      <Outlet />
      <Footer/>
    </section>
  );
}

export default RootLayout;
