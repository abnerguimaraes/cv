import { createContext, useState } from 'react';

const AppContext = createContext({
  activeMenu: '',
  dispatch: (menu: any) => {},
});

export { AppContext };

function AppContextProvider({ children }) {
  const [activeMenu, setActiveMenu] = useState('');

  function dispatch(menu) {
    setActiveMenu(menu);
  }

  return (
    <AppContext.Provider value={{ activeMenu, dispatch }}>
      { children }
    </AppContext.Provider>
  );
}

export default AppContextProvider;