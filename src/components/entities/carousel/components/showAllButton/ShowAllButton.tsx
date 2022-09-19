import {FC} from 'react';
import styles from './ShowAllButton.module.scss';

const Button: FC = () => {
  return (
    <button type="button" className={styles['show-all-btn']}>
      Show All No Deposit Bonuses
    </button>
  );
};

export default Button;
