import {Header} from "../../Components/Layout/Header/Header.tsx";
import {FooterOne} from "../../Components/Layout/FooterOne/FooterOne.tsx";
import styles from "./ServicesPage.module.scss";
import {PageBanner} from "../../Components/Layout/PageBanner/PageBanner.tsx";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import servicesData from "/public/data/ServicesData/servicesData.json";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import processData from "/public/data/ProcessData/processData.json";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import benefitsData from "/public/data/BenefitsData/benefitsData.json";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import gameDevelopmentData from "/public/data/GameDevelopmentData/gameDevelopmentData.json";


import {Link} from "react-router-dom";
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';
import {Odometer} from "../../Components/Reusables/Odometer/Odometer.tsx";
import {useCallback, useEffect, useRef, useState} from "react";
import {useTranslation} from "react-i18next";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import BurstModeIcon from '@mui/icons-material/BurstMode';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import SearchIcon from '@mui/icons-material/Search';
import VerifiedIcon from '@mui/icons-material/Verified';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import CallMadeIcon from '@mui/icons-material/CallMade';
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, EffectFade} from "swiper/modules";
import {TestimonialsSection} from "../../Components/Sections/TestimonialsSection/TestimonialsSection.tsx";
import {SliderSection} from "../../Components/Sections/SliderSection/SliderSection.tsx";

interface GAME_DEVELOPMENT_DATA {
    id: number;
    image: string;
    title: string;
    description: string;
}

interface SERVICES_DATA {
    id: number;
    title: string;
    link: string;
    image: string;
}

interface PROCESS_DATA {
    id: number;
    title: string;
    description: string;
    icon: string;
}

interface BENEFITS_DATA {
    id: number;
    title: string;
    description: string;
    icon: string;
}


const getIconComponent = (iconName: string) => {
    switch (iconName) {
        case 'BorderColorIcon':
            return <BorderColorIcon/>;
        case 'BurstModeIcon':
            return <BurstModeIcon/>;
        case 'ViewInArIcon':
            return <ViewInArIcon/>;
        case 'AutoAwesomeMotionIcon':
            return <AutoAwesomeMotionIcon/>;
        case 'SportsEsportsIcon':
            return <SportsEsportsIcon/>;
        case 'SearchIcon':
            return <SearchIcon/>;
        case 'VerifiedIcon':
            return <VerifiedIcon/>;
        case 'MilitaryTechIcon':
            return <MilitaryTechIcon/>;
        default:
            return null;
    }
};


export const ServicesPage = () => {
    const focusRef = useRef<HTMLDivElement | null>(null);
    const [videoVisible, setVideoVisible] = useState(false);
    const [translatedServices, setTranslatedServices] = useState([servicesData?.en]);
    const [translatedProcess, setTranslatedProcess] = useState([processData?.en]);
    const [translatedBenefits, setTranslatedBenefits] = useState([benefitsData?.en]);
    const [activeIndex, setActiveIndex] = useState(0);
    const [animate, setAnimate] = useState(false);
    const [translatedGameDevelopment,setTranslatedGameDevelopment] = useState([gameDevelopmentData?.en])

    const handleOpenVideo = useCallback(() => {
        setVideoVisible(true);
    }, []);

    const handleCloseVideo = useCallback(() => {
        setVideoVisible(false);
    }, []);

    const handleChangeIndex = useCallback((index: number): void => {
        setActiveIndex(index + 1);
    }, [setActiveIndex]);

    useEffect(() => {
        setAnimate(true);
        const timer = setTimeout(() => setAnimate(false), 3000);

        return () => clearTimeout(timer);
    }, [activeIndex]);


    const {i18n} = useTranslation();

    useEffect(() => {
        if (i18n.language === "en") {
            setTranslatedServices(servicesData?.en);
            setTranslatedProcess(processData?.en);
            setTranslatedBenefits(benefitsData?.en);
            setTranslatedGameDevelopment(gameDevelopmentData?.en);

        } else if (i18n.language === "ru") {
            setTranslatedServices(servicesData?.ru);
            setTranslatedProcess(processData?.ru);
            setTranslatedBenefits(benefitsData?.ru);
            setTranslatedGameDevelopment(gameDevelopmentData?.ru);

        } else {
            setTranslatedServices(servicesData?.tr);
            setTranslatedProcess(processData?.tr);
            setTranslatedBenefits(benefitsData?.tr);
            setTranslatedGameDevelopment(gameDevelopmentData?.tr);
        }
    }, [i18n.language]);


    return (
        <>
            <Header/>
            <main className={styles.pageWrapper}>
                <div className={`${styles.videoScreen} ${videoVisible ? styles.videoOpened : ''}`}>
                    <div className={styles.container}>
                        <div
                            className={styles.closeBtn}
                            onClick={handleCloseVideo}
                        >
                            <HighlightOffIcon/>
                        </div>
                        <iframe
                            className={styles.iframe}
                            src="https://www.youtube.com/embed/IaT4DneyKLc?autoplay=1"
                            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="YouTube Video Player"
                        ></iframe>
                    </div>

                </div>
                <PageBanner
                    whiteText={"Our"}
                    greenText={"Services"}
                    smallText={"Our systematic approach to art development ensures high delivery standards for games and game-based solutions, from look development to engine integration."}
                />
                <section className={styles.servicesSection}>
                    <div className={styles.sectionContent}>
                        <div className={styles.titleBlock}>
                            <div className={`${styles.pageHeading}`}>
                                <h4>Game <span>Design & Development</span> Services</h4>
                                <h2>Our Comprehensive Game <span> Development Services</span></h2>
                                <p>End-to-end game development, revamping, and outsourcing services. Immersive
                                    technology expertise for top-class gaming experiences</p>
                            </div>
                        </div>
                        <div className={styles.containersBlock}>
                            {translatedServices?.map((data: SERVICES_DATA) => {
                                return (
                                    <div
                                        key={data?.id}
                                        className={styles.container}
                                        style={{
                                            backgroundImage: data?.image
                                        }}
                                    >
                                        <Link to={data?.link} className={styles.findOut}>
                                            <p>Find Out</p>
                                            <SubdirectoryArrowRightIcon/>
                                        </Link>
                                        <div className={styles.cover}></div>
                                        <div className={styles.text}>{data?.title}</div>
                                    </div>

                                )
                            })}

                        </div>
                    </div>
                </section>
                <section className={styles.focusSection} ref={focusRef}>
                    <div className={`${styles.decoration} ${styles.square}`}>
                        <img src="/images/icons/object-1.png" alt="Decoration"/>
                    </div>
                    <div className={`${styles.decoration} ${styles.spring}`}>
                        <img src="/images/icons/line-1.png" alt="Decoration"/>
                    </div>
                    <div className={styles.sectionContent}>
                        <div className={styles.achievementContainer}>
                            <div className={styles.container}>
                                <div className={styles.title}>
                                    <h2>
                                        <Odometer stopValue={26} latency={100} currentRef={focusRef}/>+
                                    </h2>
                                    <p>
                                        Years in Business
                                    </p>
                                </div>
                            </div>
                            <div className={styles.container}>
                                <div className={styles.title}>
                                    <h2>
                                        <Odometer stopValue={78} latency={25} currentRef={focusRef}/>+
                                    </h2>
                                    <p>
                                        Downloads
                                    </p>
                                </div>
                            </div>
                            <div className={styles.container}>
                                <div className={styles.title}>
                                    <h2>
                                        <Odometer stopValue={89} latency={20} currentRef={focusRef}/>+
                                    </h2>
                                    <p>
                                        Games Launched
                                    </p>
                                </div>
                            </div>
                            <div className={styles.container}>
                                <div className={styles.title}>
                                    <h2>
                                        <Odometer stopValue={22} latency={80} currentRef={focusRef}/>+
                                    </h2>
                                    <p>
                                        Gaming Projects Delivered
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.videoContainer}>
                        <div className={styles.videoBox}>
                            <div
                                className={styles.play}
                                onClick={handleOpenVideo}
                            >
                                <p>Play</p>
                            </div>
                            <img src="/images/posters/backgroundVideo.png" alt="Video"/>
                        </div>

                    </div>
                </section>
                <section className={styles.howItWorksSection}>
                    <div className={styles.sectionContent}>
                        <div className={styles.titleBlock}>
                            <div className={`${styles.pageHeading}`}>
                                <h4>A Simple yet Powerful and efficient <span> Process</span></h4>
                                <h2>Our Game <span> Development Process</span></h2>
                                <p>Take your game development for next level in 10 simple step. Always work
                                    Done By the Following Process</p>
                            </div>
                        </div>
                        <div className={styles.boxesRow}>
                            {translatedProcess?.map((data: PROCESS_DATA) => {
                                return (
                                    <div key={data?.id} className={styles.box}>
                                        <div className={styles.arrows}>
                                            <KeyboardDoubleArrowRightIcon/>
                                        </div>
                                        <div className={styles.circle}>
                                            {getIconComponent(data?.icon)}
                                        </div>
                                        <h2>{data?.title}</h2>
                                        <p>{data?.description}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>
                <section className={styles.gameFeaturesSection}>
                    <div className={styles.sectionContent}>
                        <div className={styles.titleBlock}>
                            <div className={`${styles.pageHeading}`}>
                                <h4>Client-Centric <span> Creativity</span></h4>
                                <h2>Our Fundamental Benefits in <span> Game ART and Development</span></h2>
                                <p>A client-centric approach coupled with creative freedom, professional
                                    experimentation, and a willingness to create beyond the limits makes us a great
                                    partner for businesses looking to deliver a product that stands out.</p>
                            </div>
                        </div>
                        <div className={styles.benefitsContainer}>
                            {translatedBenefits?.map((data : BENEFITS_DATA) => {
                                return (
                                    <div key={data?.id} className={styles.box}>
                                        <div className={styles.circle}>
                                            {getIconComponent(data?.icon)}
                                        </div>
                                        <div className={styles.title}>
                                            <h2>{data?.title}</h2>
                                            <p>{data?.description}</p>
                                        </div>
                                    </div>
                                )
                            })}

                        </div>

                    </div>
                </section>
                <section className={styles.recentlyCompletedSection}>
                    <div className={styles.sectionContent}>
                        <div className={styles.topRow}>
                            <div className={styles.titleBlock}>
                                <div className={`${styles.pageHeading} ${styles.notCenteredText}`}>
                                    <h4>Recently <span> Completed</span></h4>
                                    <h2>Game Development and Art, <span> Elevated to a New Level</span></h2>
                                </div>
                            </div>
                            <Link to={"/games"} className={styles.viewAll}>
                               <p>View All Games</p>
                                <CallMadeIcon />
                            </Link>
                        </div>
                        <div className={styles.swiperContainer}>
                            <div className={styles.animatedBlock}>
                                <div className={styles.monitoringBox}>
                                    <h2>{activeIndex} <span className={animate ? styles.animated : ""}></span>
                                        <p>{translatedGameDevelopment?.length}</p></h2>
                                </div>
                                <div className={styles.customPagination}>
                                    <div className={styles.circle}
                                    style={{
                                        backgroundColor: activeIndex === 1? "#0EF0AD" : '',
                                        transform: activeIndex === 1? 'scale(1.3)': ''

                                    }}></div>
                                    <div className={styles.circle}
                                    style={{
                                        backgroundColor: activeIndex === 2? "#0EF0AD" : '',
                                        transform: activeIndex === 2? 'scale(1.3)': ''
                                        }}></div>
                                    <div className={styles.circle}
                                    style={{
                                        backgroundColor: activeIndex === 3? "#0EF0AD" : '',
                                        transform: activeIndex === 3? 'scale(1.3)': ''
                                    }}></div>
                                </div>

                            </div>
                            <Swiper
                                direction={'horizontal'}
                                modules={[EffectFade, Autoplay]}
                                slidesPerView={1}
                                autoplay={{delay: 3000}}
                                spaceBetween={25}
                                loop={true}
                                allowTouchMove={false}
                                onSlideChange={(swiper) => handleChangeIndex(swiper.realIndex)}
                            >
                                {translatedGameDevelopment?.map((data: GAME_DEVELOPMENT_DATA) => (
                                    <SwiperSlide key={data.id}>
                                        <div className={styles.sliderBox}>
                                            <div className={`${styles.titleContainer} ${activeIndex === data?.id ? styles.visible : ''}`}>
                                                <h2>{data?.title}</h2>
                                                <p>{data?.description}</p>
                                                <Link to={"/games"}>
                                                    <CallMadeIcon />
                                                </Link>
                                            </div>
                                            <img src={data.image} alt="Gamestorm Office"/>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </section>
                {/*TESTIMONIALS SECTION*/}
                <TestimonialsSection />
                <section className={styles.contactUsSection}>
                    <div className={styles?.sectionContent}>

                    </div>
                </section>

                {/*SLIDER SECTION*/}
                <SliderSection />
            </main>
            <FooterOne/>
        </>
    );
};
