import React from 'react';

import styles from  './styles.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.imageLogo} role="img" aria-label='Logo do Sorteador'></div>
      <img
        className={styles.participant}
        src="/images/participant.png"
        alt="Participante com um presente na mão"
      />
    </header>
  )
}

export default Header;
