import {FC, useState} from 'react';
import styles from './Carousel.module.scss';

import Header from './components/header/Header';
import Filters from '../../shared/filters/Filters';
import Body from './components/body/Body';
import ShowAllButton from './components/showAllButton/ShowAllButton';

import ripperLogo from '../../../assets/ripper-logo.png';
import ozwinLogo from '../../../assets/ozwin-logo.png';
import fairgoLogo from '../../../assets/fairgo-logo.png';
import hellspinLogo from '../../../assets/hellspin-logo.png';
import bizzoLogo from '../../../assets/bizzo-logo.png';

const casinos = [
  {
    id: 1,
    name: 'Ripper',
    logo: ripperLogo,
    link: '/',
    isExclusive: true,
    type: 'no deposit bonus',
    bonusPercent: 400,
    bonusAmount: 2000,
    freeSpinCount: 100,
  },
  {
    id: 2,
    name: 'Ozwin',
    logo: ozwinLogo,
    link: '/',
    isExclusive: true,
    type: 'no deposit bonus',
    bonusPercent: 400,
    bonusAmount: 4000,
    freeSpinCount: 100,
  },
  {
    id: 3,
    name: 'Fair Go',
    logo: fairgoLogo,
    link: '/',
    isExclusive: false,
    type: 'no deposit bonus',
    bonusPercent: 400,
    bonusAmount: 8888,
    freeSpinCount: 100,
  },
  {
    id: 4,
    name: 'Hell Spin',
    logo: hellspinLogo,
    link: '/',
    isExclusive: false,
    type: 'no deposit bonus',
    bonusPercent: 400,
    bonusAmount: 4400,
    freeSpinCount: 100,
  },
  {
    id: 5,
    name: 'Bizzo',
    logo: bizzoLogo,
    link: '/',
    isExclusive: true,
    type: 'no deposit bonus',
    bonusPercent: 400,
    bonusAmount: 5555,
    freeSpinCount: 100,
  },
  {
    id: 6,
    name: 'Ripper',
    logo: ripperLogo,
    link: '/',
    isExclusive: true,
    type: 'no deposit bonus',
    bonusPercent: 400,
    bonusAmount: 2000,
    freeSpinCount: 100,
  },
  {
    id: 7,
    name: 'Ozwin',
    logo: ozwinLogo,
    link: '/',
    isExclusive: true,
    type: 'no deposit bonus',
    bonusPercent: 400,
    bonusAmount: 4000,
    freeSpinCount: 100,
  },
  {
    id: 8,
    name: 'Fair Go',
    logo: fairgoLogo,
    link: '/',
    isExclusive: false,
    type: 'no deposit bonus',
    bonusPercent: 400,
    bonusAmount: 8888,
    freeSpinCount: 100,
  },
  {
    id: 9,
    name: 'Hell Spin',
    logo: hellspinLogo,
    link: '/',
    isExclusive: false,
    type: 'no deposit bonus',
    bonusPercent: 400,
    bonusAmount: 4400,
    freeSpinCount: 100,
  },
  {
    id: 10,
    name: 'Bizzo',
    logo: bizzoLogo,
    link: '/',
    isExclusive: true,
    type: 'no deposit bonus',
    bonusPercent: 400,
    bonusAmount: 5555,
    freeSpinCount: 100,
  },
  {
    id: 11,
    name: 'Ripper',
    logo: ripperLogo,
    link: '/',
    isExclusive: true,
    type: 'no deposit bonus',
    bonusPercent: 400,
    bonusAmount: 2000,
    freeSpinCount: 100,
  },
  {
    id: 12,
    name: 'Ozwin',
    logo: ozwinLogo,
    link: '/',
    isExclusive: true,
    type: 'no deposit bonus',
    bonusPercent: 400,
    bonusAmount: 4000,
    freeSpinCount: 100,
  },
  {
    id: 13,
    name: 'Fair Go',
    logo: fairgoLogo,
    link: '/',
    isExclusive: false,
    type: 'no deposit bonus',
    bonusPercent: 400,
    bonusAmount: 8888,
    freeSpinCount: 100,
  },
  {
    id: 14,
    name: 'Hell Spin',
    logo: hellspinLogo,
    link: '/',
    isExclusive: false,
    type: 'no deposit bonus',
    bonusPercent: 400,
    bonusAmount: 4400,
    freeSpinCount: 100,
  },
  {
    id: 15,
    name: 'Bizzo',
    logo: bizzoLogo,
    link: '/',
    isExclusive: true,
    type: 'no deposit bonus',
    bonusPercent: 400,
    bonusAmount: 5555,
    freeSpinCount: 100,
  },
];

const Carousel: FC = () => {
  const [filters, setFilters] = useState([
    {text: 'No Depsoit Bonus', active: true},
    {text: 'Welcome Bonus', active: false},
    {text: 'Free Spins Bonus', active: false},
  ]);

  const handleFilterClick = (index: number) => {
    const newFilters = filters.map((f) => ({...f, active: false}));
    newFilters[index].active = true;
    setFilters(newFilters);
  };

  return (
    <div className={styles.carousel}>
      <Header />

      <Filters items={filters} onClick={handleFilterClick} />

      <Body items={casinos} />

      <ShowAllButton />
    </div>
  );
};

export default Carousel;
