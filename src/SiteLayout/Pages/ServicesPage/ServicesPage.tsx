import {Header} from "../../Components/Layout/Header/Header.tsx";
import {FooterOne} from "../../Components/Layout/FooterOne/FooterOne.tsx";
import styles from "./ServicesPage.module.scss";
import {PageBanner} from "../../Components/Layout/PageBanner/PageBanner.tsx";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import servicesData from "/public/data/ServicesData/servicesData.json";
import {Link} from "react-router-dom";
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';
import {Odometer} from "../../Components/Reusables/Odometer/Odometer.tsx";
import {useCallback, useEffect, useRef, useState} from "react";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import {useTranslation} from "react-i18next";
// import BurstModeIcon from '@mui/icons-material/BurstMode';
// import ViewInArIcon from '@mui/icons-material/ViewInAr';
// import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';

interface SERVICES_DATA {
    id: number;
    title: string;
    link: string;
    image: string;
}

export const ServicesPage = () => {
    const focusRef = useRef<HTMLDivElement | null>(null);
    const [videoVisible,setVideoVisible] = useState(false);
    const [translatedServices,setTranslatedServices] = useState([servicesData?.en]);
    const handleOpenVideo = useCallback(()=>{
        setVideoVisible(true);
    },[])
    const handleCloseVideo = useCallback(()=>{
        setVideoVisible(false);
    },[])

    const {i18n} = useTranslation();

    useEffect(() => {
        if (i18n.language === "en") {
            setTranslatedServices(servicesData?.en)
        } else if (i18n.language === "ru") {
            setTranslatedServices(servicesData?.ru)
        } else {
            setTranslatedServices(servicesData?.tr)
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
                            <HighlightOffIcon />
                        </div>
                        <iframe
                            className={styles.iframe}
                            src="https://www.youtube.com/embed/IaT4DneyKLc?autoplay=1"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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
                <section className={styles.ourFocusSection} ref={focusRef}>
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
                                <h2>Our Game  <span> Development Process</span></h2>
                                <p>Take your game development for next level in 10 simple step. Always work
                                    Done By the Following Process</p>
                            </div>
                        </div>
                        <div className={styles.boxesRow}>
                            <div className={styles.box}>
                                <div className={styles.circle}>
                                    <BorderColorIcon/>
                                </div>
                                <h2>Script Writing</h2>
                                <p>We start by sketching the script using your instructions as a guide, and we then wait
                                    for your approval before moving.</p>
                            </div>
                            <div className={styles.box}>
                                <div className={styles.circle}>
                                    <BorderColorIcon/>
                                </div>
                                <h2>Script Writing</h2>
                                <p>We start by sketching the script using your instructions as a guide, and we then wait
                                    for your approval before moving.</p>
                            </div>
                            <div className={styles.box}>
                                <div className={styles.circle}>
                                    <BorderColorIcon/>
                                </div>
                                <h2>Script Writing</h2>
                                <p>We start by sketching the script using your instructions as a guide, and we then wait
                                    for your approval before moving.</p>
                            </div>
                            <div className={styles.box}>
                                <div className={styles.circle}>
                                    <BorderColorIcon/>
                                </div>
                                <h2>Script Writing</h2>
                                <p>We start by sketching the script using your instructions as a guide, and we then wait
                                    for your approval before moving.</p>
                            </div>

                        </div>
                    </div>
                </section>
            </main>
            <FooterOne/>
        </>
    );
};
