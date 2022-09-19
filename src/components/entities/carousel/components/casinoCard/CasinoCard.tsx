import {FC} from 'react';
import {CasinoCardProps} from '../../../../../types/entities/carousel';
import styles from './CasinoCard.module.scss';
import {formatPrice} from '../../../../../utils/formatPrice';

import PlayButton from '../playButton/PlayButton';
import {ReactComponent as FlagIcon} from '../../../../../assets/icons/flag.svg';
import {ReactComponent as InfoIcon} from '../../../../../assets/icons/info.svg';

const CasinoCard: FC<CasinoCardProps> = ({item}) => {
  return (
    <div className={styles.card}>
      <div className={styles['card-header']}>
        <img
          src={item.logo}
          alt={`${item.name} logo`}
          className={styles.logo}
        />

        <a href="/" className={styles['review-link']}>
          {item.name} Casino -Review
        </a>
      </div>

      <div className={styles['card-body']}>
        {item.isExclusive && <div className={styles.label}>exclusive</div>}

        <h5 className={styles['card-title']}>{item.type}</h5>

        <div className={styles.divider}></div>

        <div className={styles['bonus']}>
          <div>
            <div className={styles['bonus-percent']}>
              {item.bonusPercent}% up to
            </div>
            <div className={styles['bonus-amount']}>
              {formatPrice(item.bonusAmount)}
            </div>
            <div className={styles['bonus-spin']}>
              + {item.freeSpinCount} Free Spins
            </div>
            <div className={styles['casino-name']}>on Cleopatra’s Gold</div>
          </div>
        </div>

        <div className={styles['card-actions']}>
          <PlayButton>play</PlayButton>
          <FlagIcon />
        </div>
      </div>

      <InfoIcon className={styles['info-icon']} />
    </div>
  );
};

export default CasinoCard;
