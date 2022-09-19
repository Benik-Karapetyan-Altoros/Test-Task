import {FC} from 'react';
import clsx from 'clsx';
import styles from './Header.module.scss';

const Header: FC = () => {
  return (
    <div className={clsx(styles.header, 'mx-auto text-center')}>
      <h1 className={styles.title}>Best Bonuses Lorem Ipsum</h1>

      <p className={styles.text}>
        Welcome, all you passionate Australian online casino players out there!
        If you a rookie looking for some quick guidelines on how to get started
        or a seasoned player searching for some fresh real money casino
        recommendations, you've reached the right spot at True Blue!
      </p>
    </div>
  );
};

export default Header;
