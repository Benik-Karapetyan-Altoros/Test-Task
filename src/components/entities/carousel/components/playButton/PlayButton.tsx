import {FC, ReactNode} from 'react';
import styles from './PlayButton.module.scss';

interface ButtonProps {
  children: ReactNode;
}

const PlayButton: FC<ButtonProps> = ({children}) => {
  return (
    <button type="button" className={styles['play-button']}>
      <span className={styles['play-button-content']}>{children}</span>
    </button>
  );
};

export default PlayButton;
