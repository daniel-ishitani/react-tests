import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useDrawer } from '../../state/hooks/useDrawer';
import { useParticipantList } from '../../state/hooks/useParticipantList';
import styles from './styles.module.css';

const Footer = () => {
  const participants = useParticipantList();

  const navigateTo = useNavigate();
  const handleDraw = useDrawer();

  const handleStart = () => {
    handleDraw();
    navigateTo('/draw');
  };

  return (
    <footer className={styles.footer}>
      <button
        className={styles.button}
        disabled={participants.length < 3}
        onClick={handleStart}
      >
        Start
      </button>
      <img src="/images/sacolas.png" alt="Shopping bags" />
    </footer>
  )
};

export default Footer;
