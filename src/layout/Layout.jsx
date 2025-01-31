import React, { useEffect } from 'react';
import { useTheme } from '../components/context/ThemeContext'; 
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  const { theme, toggleTheme } = useTheme();

  // Aplica el tema al body cada vez que cambia
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={`layout ${theme}`}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
