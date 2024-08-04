import styles from './SliderSection.module.scss';
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import imagesSliderData from '/public/data/ImagesSliderData/imagesSliderData.json';
import 'swiper/css';


interface ImagesSliderData {
    id: number;
    image: string;
}


export const SliderSection = () => {
    return (
        <section className={styles.sliderSection}>
            <Swiper
                slidesPerView={6}
                modules={[Autoplay]}
                autoplay={{delay: 2500}}
                breakpoints={{}}
                spaceBetween={10}
                freeMode={true}
                loop={true}
            >
                {imagesSliderData?.map((data: ImagesSliderData) => {
                    return (
                        <SwiperSlide key={data?.id}>
                            <div className={styles.slideBox}>
                                <img src={data?.image}
                                     alt="Images Slider"/>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </section>

    );
};
