import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import classesMobile from './css/navigation.mobile.module.css';
import classesDesk from './css/navigation.desk.module.css';
import { AppContext } from '../../store/appContext';
import NavItems from '../navItems/navItems';

import homeImg from '../../assets/img/home.png';
import contactImg from '../../assets/img/email.png';
import experienceImg from '../../assets/img/certification.png';
import educationImg from '../../assets/img/pen.png';

function Navigation() {
  const { activeMenu, dispatch } = useContext(AppContext);
  const [routes, setRoutes] = useState([
    { path: '/resumo', label: 'Resumo', selected: true, icon: homeImg },
    { path: '/experience', label: 'Experiência', selected: false, icon: experienceImg },
    { path: '/education', label: 'Formação', selected: false, icon: educationImg },
    { path: '/contact', label: 'Contato', selected: false, icon: contactImg},
  ]
  );
  const navigate = useNavigate();

  useEffect(() => {
    dispatch('Resumo');
    navigate('/resumo')
  },[])

  function navigateTo(path) {
    let selected;

    routes.forEach((item) => {
      if (item.path === path) {
        selected = item.label;
      }
    });
    dispatch(selected);

    navigate(path);
    setRoutes((old) => {
      return old.map((item) => {
        return {
          ...item,
          selected: item.path === path
        }
      });
    });
  }

  return (
    <section className={`${classesMobile.main} ${classesDesk.main}`}>
      <div className={`${classesMobile.menu} ${classesDesk.menu}`}>
        <NavItems onNavigate={navigateTo} items={routes}/>
      </div>
    </section>
  )
}

export default Navigation;