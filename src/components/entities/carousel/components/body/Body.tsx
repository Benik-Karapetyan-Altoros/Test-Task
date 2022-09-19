import {FC, forwardRef, LegacyRef, useRef, useState} from 'react';
import {BodyProps} from '../../../../../types/entities/carousel';
import styles from './Body.module.scss';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import prevIcon from '../../../../../assets/chevron-left.png';
import nextIcon from '../../../../../assets/chevron-right.png';

import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination} from 'swiper';
import CasinoCard from '../casinoCard/CasinoCard';

const PrevButton = forwardRef((props, ref: LegacyRef<HTMLImageElement>) => {
  return (
    <img
      ref={ref}
      src={prevIcon}
      alt="previous icon"
      className={styles['prev-button']}
    />
  );
});

const NextButton = forwardRef((props, ref: LegacyRef<HTMLImageElement>) => {
  return (
    <img
      ref={ref}
      src={nextIcon}
      alt="next icon"
      className={styles['next-button']}
    />
  );
});

const Body: FC<BodyProps> = ({items}) => {
  const [initSwiper, setInitSwiper] = useState(false);
  const prevElRef = useRef(null);
  const nextElRef = useRef(null);

  return (
    <div className={styles.body}>
      <Swiper
        spaceBetween={50}
        breakpoints={{
          240: {
            width: 240,
            slidesPerView: 1,
            spaceBetween: 28,
            navigation: {
              enabled: false,
            },
          },
          576: {
            width: 576,
            slidesPerView: 3,
            spaceBetween: 28,
            navigation: {
              enabled: false,
            },
          },
          768: {
            width: 768,
            slidesPerView: 3,
            spaceBetween: 28,
            navigation: {
              enabled: true,
            },
          },
          992: {
            width: 992,
            slidesPerView: 4,
            spaceBetween: 28,
            navigation: {
              enabled: true,
            },
          },
          1200: {
            width: 1200,
            slidesPerView: 5,
            spaceBetween: 28,
            navigation: {
              enabled: true,
            },
          },
          1400: {
            width: 1400,
            slidesPerView: 5,
            spaceBetween: 28,
            navigation: {
              enabled: true,
            },
          },
        }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => setInitSwiper(true)}
        modules={[Pagination, Navigation]}
        className={styles['slider']}
        navigation={{
          prevEl: prevElRef.current,
          nextEl: nextElRef.current,
          disabledClass: styles['swiper-button-disabled'],
        }}
        pagination={{
          type: 'bullets',
          clickable: true,
          bulletClass: styles['bullet'],
          bulletActiveClass: styles['bullet-active'],
        }}
      >
        {items.map((item) => (
          <SwiperSlide key={item.id} className="b-swiper-slide">
            <CasinoCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>

      <PrevButton ref={prevElRef} />
      <NextButton ref={nextElRef} />
    </div>
  );
};

export default Body;
