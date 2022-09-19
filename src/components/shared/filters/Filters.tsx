import {FC} from 'react';
import {Filter} from '../../../types/shared/filters';
import styles from './Filters.module.scss';

import FilterItem from './components/FilterItem';

interface FiltersProps {
  items: Filter[];
  onClick: (index: number) => void;
}

const Filters: FC<FiltersProps> = ({items, onClick}) => {
  return (
    <div className={styles.filters}>
      {items.map((filter, i) => (
        <FilterItem
          key={filter.text}
          active={filter.active}
          onClick={() => onClick(i)}
        >
          {filter.text}
        </FilterItem>
      ))}
    </div>
  );
};

export default Filters;
