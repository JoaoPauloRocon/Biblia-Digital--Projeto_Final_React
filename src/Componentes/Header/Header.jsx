import React from 'react';
import styles from './Header.module.css'; 
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className={styles.header}>
      <Link to={`/`}><div className={styles.siteName}><img src="../../../logo.png" alt="Logo" className={styles.logo} /></div></Link>
      <nav>
        <ul className={styles.navbar}>
        <Link to={`/`}><li>Início</li></Link>
          <Link to={`/liturgia`}><li>Liturgia Diária</li></Link>
          <Link to={`/livro`}><li>Livros</li></Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;