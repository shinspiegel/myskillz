import React from 'react';
import styles from './index.module.css';

import getScroll from '../../functions/getScrollY';

/**
 * This is hoving card that will have a special visibel/invisivel based on the scroll position
 * @param {object} props This is the react props
 */
const HovingCard = ({ children }) => {
  const scroll = getScroll();

  return <div className={`${styles.hovingCard} ${scroll > 50 ? styles.visible : styles.invisible}`}>{children}</div>;
};

export default HovingCard;