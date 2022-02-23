import React from 'react';

import mealsImage from '../../assets/meals.jpeg'
import styles from './Header.module.css'
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return <React.Fragment>
      <header className={styles.header}>
          <h1>React meals</h1>
          <HeaderCartButton>Cart</HeaderCartButton>
      </header>
      <div className={styles['main-image']}>
          <img src={mealsImage} alt='a table of food'/>
      </div>
  </React.Fragment>
};

export default Header;
