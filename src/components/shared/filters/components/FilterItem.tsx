import {FC, ReactNode} from 'react';
import clsx from 'clsx';
import styles from './FilterItem.module.scss';

interface ButtonProps {
  children: ReactNode;
  active?: boolean;
  onClick: () => void;
}

const FilterItem: FC<ButtonProps> = ({children, active, onClick}) => {
  return (
    <button
      className={clsx(
        styles['filter-item'],
        active && styles['filter-item--active']
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default FilterItem;
