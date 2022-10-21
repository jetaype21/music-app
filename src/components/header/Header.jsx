import styles from './header.module.css'
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <section className={styles.h__left}>
          <li className={styles.item__logo}>
            <h2>
              <NavLink to={'/'}>
                LA BULLA
              </NavLink>
            </h2>
          </li>
        </section>

        <section className={styles.h__right}>
          <li>
            <NavLink to={'/about'}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to={'/faqs'}>
              FAQs
            </NavLink>
          </li>
          <li>
            <NavLink to={'/login'}>
              Login
            </NavLink>
          </li>
        </section>
      </nav>
    </header>
  );
}

export default Header;