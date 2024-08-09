import styles from './AboutPage.module.scss';
import {Header} from "../../Components/Layout/Header/Header.tsx";
import {FooterTwo} from "../../Components/Layout/FooterTwo/FooterTwo.tsx";
import {PageBanner} from "../../Components/Layout/PageBanner/PageBanner.tsx";
import {AboutSection} from "../../Components/Sections/AboutSection/AboutSection.tsx";
import {TeamSection} from "../../Components/Sections/TeamSection/TeamSection.tsx";
import {CounterSection} from "../../Components/Sections/CounterSection/CounterSection.tsx";
import {VideoContainer} from "../../Components/Reusables/VideoContainer/VideoContainer.tsx";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import valuesData from "/public/data/ValuesData/valuesData.json";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import goalsData from "/public/data/GoalsData/goalsData.json";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import partnersData from "/public/data/PartnersData/partnersData.json";


import {Dispatch, SetStateAction, useCallback, useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {useIconComponent} from "../../../Hooks/UseIconComponent/UseIconComponent.tsx";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import {ContactSection} from "../../Components/Sections/ContactSection/ContactSection.tsx";
import {JobsSection} from "../../Components/Sections/JobsSection/JobsSection.tsx";
import {TestimonialsSection} from "../../Components/Sections/TestimonialsSection/TestimonialsSection.tsx";
import {SliderSection} from "../../Components/Sections/SliderSection/SliderSection.tsx";

interface PARTNERS_DATA {
    id: number;
    image: string;
}

interface VALUES_DATA {
    id: number;
    title: string;
    icon: string;
    description: string;
}

interface GOALS_DATA {
    id: number;
    year: string;
    title: string;
    description: string;
}


export const AboutPage = () => {

    const [translatedValues, setTranslatedValues] = useState(valuesData.en);
    const [activeIndex, setActiveIndex] = useState(0);
    const [translatedGoals, setTranslatedGoals] = useState(goalsData.en);
    const [goalsActiveIndex, setGoalsActiveIndex] = useState(0);
    const handleChangeIndex = useCallback(
        (index: number, setState: Dispatch<SetStateAction<number>>): void => {
            setState(index);
        },
        []
    );

    const {i18n} = useTranslation();
    const getIcon = useIconComponent();


    useEffect(() => {
        if (i18n.language === "en") {
            setTranslatedValues(valuesData.en);
            setTranslatedGoals(goalsData.en);

        } else if (i18n.language === "ru") {
            setTranslatedValues(valuesData.ru);
            setTranslatedGoals(goalsData.ru);

        } else {
            setTranslatedValues(valuesData.tr);
            setTranslatedGoals(goalsData.tr);
        }
    }, [i18n.language]);

    return (
        <>
            <Header/>
            <main className={styles.pageWrapper}>
                <PageBanner
                    whiteText={"Our Simple is Motto Fun for"}
                    greenText={"Everyone"}
                    smallText={"We continue to open doors to new worlds every day and we are working excitedly for creating new games and unique ideas!"}
                />
                {/*ABOUT SECTION*/}
                <AboutSection/>
                <section className={styles.gamingCharacterSection}>
                    <div className={styles.sectionContent}>
                        <div className={styles.sectionTitle}>
                            <div className={`${styles.pageHeading}`}>
                                <h4>Our Ongoing <span>Values</span></h4>
                                <h2>Our Values Inspire And <span> Drive Our Every Move</span></h2>
                                <p>Our values are a reflection of our inner selves, shaped by our unique experiences,
                                    beliefs, aspirations, and cannot be simply adopted from others or chosen
                                    arbitrarily.</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.swiperContainer}>
                        <Swiper
                            slidesPerView={5}
                            modules={[Autoplay]}
                            autoplay={{delay: 2500}}
                            breakpoints={{}}
                            spaceBetween={50}
                            loop={true}
                            allowTouchMove={false}
                            onSlideChange={(swiper) => handleChangeIndex(swiper.realIndex, setActiveIndex)}
                        >
                            {translatedValues?.map((data: VALUES_DATA, index: number) => {
                                const isActive = index === (activeIndex + 2) % translatedValues.length;
                                return (
                                    <SwiperSlide key={data?.id}>
                                        <div key={data?.id}
                                             className={`${styles.sliderBox} ${isActive ? styles.activeSlide : ''}`}>
                                            <div className={styles.circle}>
                                                {getIcon(data?.icon)}
                                            </div>
                                            <h2>{data?.title}</h2>
                                            <p>{data?.description}</p>
                                        </div>
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                    </div>
                    <div className={styles.pagination}>
                        <div
                            className={styles.container}
                            style={{
                                backgroundColor: activeIndex === 0 ? "#0EF0AD" : ""
                            }}
                        ></div>
                        <div
                            className={styles.container}
                            style={{
                                backgroundColor: activeIndex === 1 ? "#0EF0AD" : ""
                            }}
                        ></div>
                        <div
                            className={styles.container}
                            style={{
                                backgroundColor: activeIndex === 2 ? "#0EF0AD" : ""
                            }}
                        ></div>
                        <div
                            className={styles.container}
                            style={{
                                backgroundColor: activeIndex === 3 ? "#0EF0AD" : ""
                            }}
                        ></div>
                        <div
                            className={styles.container}
                            style={{
                                backgroundColor: activeIndex === 4 ? "#0EF0AD" : ""
                            }}
                        ></div>
                        <div
                            className={styles.container}
                            style={{
                                backgroundColor: activeIndex === 5 ? "#0EF0AD" : ""
                            }}
                        ></div>
                    </div>
                </section>
                {/*TEAM SECTION*/}
                <TeamSection/>
                {/*COUNTER SECTION*/}
                <CounterSection/>
                <span className={styles.spaceForSection}></span>
                <section className={styles.ourFocusSection}>
                    <div className={`${styles.decoration} ${styles.square}`}>
                        <img src="/images/icons/object-1.png" alt="Decoration"/>
                    </div>
                    <div className={`${styles.decoration} ${styles.spring}`}>
                        <img src="/images/icons/line-1.png" alt="Decoration"/>
                    </div>

                    <div className={styles.sectionContent}>
                        <div className={styles.sectionTitle}>
                            <div className={`${styles.pageHeading}`}>
                                <h4>Our <span> Focus</span></h4>
                                <h2>Flexible, focused and innovative: we’re focused on achieving your project <span> vision and business goals</span>
                                </h2>
                            </div>
                        </div>
                    </div>
                    <VideoContainer
                        link={"https://www.youtube.com/embed/SzHfZYClTwo?si=T9nROgQUkwPZOuYT"}
                        image={"https://pixner.net/gamestorm3/main/assets/images/our-focus-bg.png"}
                    />
                </section>
                <section className={styles.ourStorySection}>
                    <div className={styles.sectionContent}>
                        <div className={styles.swiperContainer}>
                            <div className={styles.title}>
                                <h2>Our Story</h2>
                                <p>We have a beautiful story, worth telling. Let us walk you through our biggest
                                    milestones.</p>
                            </div>
                            <div className={styles.swiper}>
                                <Swiper
                                    slidesPerView={1}
                                    modules={[Autoplay]}
                                    autoplay={{delay: 2000}}
                                    breakpoints={{}}
                                    spaceBetween={25}
                                    loop={true}
                                    allowTouchMove={false}
                                    onSlideChange={(swiper) => handleChangeIndex(swiper.realIndex, setGoalsActiveIndex)}
                                >
                                    {translatedGoals?.map((data: GOALS_DATA) => {
                                        return (
                                            <SwiperSlide key={data?.id}>
                                                <div className={styles.swiperBox}>
                                                    <div className={styles.date}>
                                                        {data?.year}
                                                    </div>
                                                    <div className={styles.goal}>
                                                        <h2>{data?.title}</h2>
                                                        <p>{data?.description}</p>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        )
                                    })}
                                </Swiper>
                            </div>
                            <div className={styles.pagination}>
                                <div
                                    className={styles.location}
                                    style={{backgroundColor: goalsActiveIndex === 0 ? "#0EF0AD" : ''}}
                                ></div>
                                <div
                                    className={styles.location}
                                    style={{backgroundColor: goalsActiveIndex === 1 ? "#0EF0AD" : ''}}
                                ></div>
                                <div
                                    className={styles.location}
                                    style={{backgroundColor: goalsActiveIndex === 2 ? "#0EF0AD" : ''}}
                                ></div>
                                <div
                                    className={styles.location}
                                    style={{backgroundColor: goalsActiveIndex === 3 ? "#0EF0AD" : ''}}
                                ></div>
                                <div
                                    className={styles.location}
                                    style={{backgroundColor: goalsActiveIndex === 4 ? "#0EF0AD" : ''}}
                                ></div>

                            </div>
                        </div>
                        <div className={styles.imageContainer}>
                            <img src="/images/posters/our-story-illus.png" alt="Our Story"/>
                        </div>
                    </div>
                </section>
                {/*CONTACT SECTION*/}
                <ContactSection/>
                {/*JOBS SECTION*/}
                <div className={styles.jobsSectionWrapper}>
                    <JobsSection/>
                </div>
                {/*TESTIMONIALS SECTION*/}
                <TestimonialsSection/>
                <div className={styles.partnersSection}>
                    <div className={styles.sectionContent}>
                        <div className={styles.sectionTitle}>
                            <div className={`${styles.pageHeading}`}>
                                <h4>Trusted <span>By</span></h4>
                                <h2>We are happy to work with <span> global largest brands</span></h2>
                                <p>We are proud to support industry leaders around the world.</p>
                            </div>
                        </div>
                        <div className={styles.partnersContainer}>
                            {partnersData?.map((partner: PARTNERS_DATA) => {
                                return (
                                    <div
                                        key={partner?.id}
                                        className={styles.partnerLogo}
                                    >
                                        <img
                                            src={partner?.image}
                                            alt="Partner Company"/>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                {/*SLIDER SECTION*/}
                <div className={styles.sliderSectionWrapper}>
                    <SliderSection/>
                </div>
            </main>
            <FooterTwo/>
        </>
    );
};
