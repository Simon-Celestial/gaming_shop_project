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
import {Link} from "react-router-dom";
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';
import {Odometer} from "../../Components/Reusables/Odometer/Odometer.tsx";
import {useEffect, useRef, useState} from "react";
import {useTranslation} from "react-i18next";
import {TestimonialsSection} from "../../Components/Sections/TestimonialsSection/TestimonialsSection.tsx";
import {SliderSection} from "../../Components/Sections/SliderSection/SliderSection.tsx";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import {VideoContainer} from "../../Components/Reusables/VideoContainer/VideoContainer.tsx";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import {useIconComponent} from "../../../Hooks/UseIconComponent/UseIconComponent.tsx";
import {ContactForm} from "../../Components/Reusables/ContactForm/ContactForm.tsx";
import {
    RecentlyCompletedSection
} from "../../Components/Sections/RecentlyCompletedSection/RecentlyCompletedSection.tsx";

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

export const ServicesPage = () => {
    const focusRef = useRef<HTMLDivElement | null>(null);
    const [translatedServices, setTranslatedServices] = useState([servicesData?.en]);
    const [translatedProcess, setTranslatedProcess] = useState([processData?.en]);
    const [translatedBenefits, setTranslatedBenefits] = useState([benefitsData?.en]);

    const getIcon = useIconComponent();

    const {i18n} = useTranslation();

    useEffect(() => {
        if (i18n.language === "en") {
            setTranslatedServices(servicesData?.en);
            setTranslatedProcess(processData?.en);
            setTranslatedBenefits(benefitsData?.en);

        } else if (i18n.language === "ru") {
            setTranslatedServices(servicesData?.ru);
            setTranslatedProcess(processData?.ru);
            setTranslatedBenefits(benefitsData?.ru);

        } else {
            setTranslatedServices(servicesData?.tr);
            setTranslatedProcess(processData?.tr);
            setTranslatedBenefits(benefitsData?.tr);
        }
    }, [i18n.language]);

    return (
        <>
            <Header/>
            <main className={styles.pageWrapper}>
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
                    {/*VIDEO CONTAINER*/}
                    <VideoContainer
                        link={"https://www.youtube.com/embed/IaT4DneyKLc?autoplay=1"}
                        image={"https://pixner.net/gamestorm3/main/assets/images/video-bg-2.png"}
                    />
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
                                            {getIcon(data?.icon)}
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
                            {translatedBenefits?.map((data: BENEFITS_DATA) => {
                                return (
                                    <div key={data?.id} className={styles.box}>
                                        <div className={styles.circle}>
                                            {getIcon(data?.icon)}
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
                {/*RECENTLY COMPLETED SECTION*/}
                <RecentlyCompletedSection />
                {/*TESTIMONIALS SECTION*/}
                <TestimonialsSection/>
                <section className={styles.contactUsSection}>
                    <div className={styles?.sectionContent}>
                        <div className={styles.leftContainer}>
                            <div className={styles.titleBlock}>
                                <div className={`${styles.pageHeading} ${styles.notCenteredText}`}>
                                    <h4>Have <span> Questions?</span></h4>
                                    <h2>We'd Love To, <span> Hear From You</span></h2>
                                </div>
                            </div>
                            <p>Please fill out the form and let us know about your concerns.We will try our best to
                                provide optimized solutions.</p>
                            <div className={styles.contactRow}>
                                <div className={styles.circle}>
                                    <LocalPhoneIcon/>
                                </div>
                                <span>+(2) 578 - 365 - 379</span>
                            </div>
                            <div className={styles.contactRow}>
                                <div className={styles.circle}>
                                    <EmailIcon/>
                                </div>
                                <span>gamestorm@info.com</span>
                            </div>

                        </div>
                        <div className={styles.rightContainer}>
                            <ContactForm />
                        </div>

                    </div>
                </section>
                {/*SLIDER SECTION*/}
                <SliderSection/>
            </main>
            <FooterOne/>
        </>
    );
};
