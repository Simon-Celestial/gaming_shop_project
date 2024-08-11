import styles from './BlogPage.module.scss';
import {FooterOne} from "../../Components/Layout/FooterOne/FooterOne.tsx";
import {Header} from "../../Components/Layout/Header/Header.tsx";
import {PageBanner} from "../../Components/Layout/PageBanner/PageBanner.tsx";
import {Link} from "react-router-dom";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import gamingVisionData from "/public/data/GamingVisionData/gamingVisionData.json";
import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {DefaultButton} from "../../Components/Reusables/DefaultButton/DefaultButton.tsx";
import {
    RecentlyCompletedSection
} from "../../Components/Sections/RecentlyCompletedSection/RecentlyCompletedSection.tsx";
import {SliderSection} from "../../Components/Sections/SliderSection/SliderSection.tsx";
import {TeamSection} from "../../Components/Sections/TeamSection/TeamSection.tsx";

interface GAMING_VISION_DATA {
    id: number;
    title: string;
    description: string;
}

export const BlogPage = () => {
    const [translatedGameVision, setTranslatedGameVision] = useState(gamingVisionData.en);
    const {i18n} = useTranslation();

    useEffect(() => {
        if (i18n.language === "en") {
            setTranslatedGameVision(gamingVisionData.en)
        } else if (i18n.language === "ru") {
            setTranslatedGameVision(gamingVisionData.ru)
        } else {
            setTranslatedGameVision(gamingVisionData.tr)
        }
    }, [i18n.language]);

    return (
        <>
            <Header/>
            <main className={styles.pageWrapper}>
                <PageBanner
                    greenText={"Blog"}
                    whiteText={""}
                    smallText={"Professional Game design and Development services since 1995"}
                />
                <section className={styles.ourServicesSection}>
                    <div className={styles.sectionContent}>
                        <div className={styles.leftContainer}>
                            <div className={styles.decoration}>
                                <img src="/images/icons/star.png" alt="Decoration Star"/>
                            </div>
                            <div className={styles.containerTitle}>
                                <div className={`${styles.pageHeading} ${styles.notCenteredText}`}>
                                    <h4>Bringing Your <span> Gaming Vision</span> to Life</h4>
                                    <h2>Innovative <span> Gaming Solutions</span> Everywhere</h2>
                                    <p>Our gaming studio delivers top-notch services in game development, art & design,
                                        NFT creation, and VR & AR solutions. Transforming gaming with cutting-edge and
                                        platform-independent solutions.</p>
                                </div>
                            </div>
                            <div className={styles.imageContainer}>
                                <div className={styles.cover}>
                                    <Link to={"/services"}>See All Services</Link>
                                </div>
                                <img src="/images/posters/poster-001.png" alt="Poster"/>
                            </div>
                        </div>
                        <div className={styles.rightContainer}>
                            {translatedGameVision?.map((data: GAMING_VISION_DATA) => {
                                return (
                                    <div key={data?.id} className={styles.containerEntity}>
                                        <h2>{data?.title}</h2>
                                        <p>{data?.description}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>
                <section className={styles.bannerSection}
                         style={{
                             backgroundImage: "url(/images/posters/banner.png)"
                         }}
                >
                    <div className={styles.joystickTop}>
                        <img src="/images/icons/ellipse-10.png" alt="Gaming"/>
                    </div>
                    <div className={styles.joystickBottom}>
                        <img src="/images/icons/ellipse-9.png" alt="Gaming"/>
                    </div>

                    <div className={styles.decoration}>
                        <img src="/images/icons/index-3-obj.png" alt="Decoration"/>
                    </div>
                    <div className={styles.sectionContent}>
                        <div className={styles.titleContainer}>
                            <h4>Crafting Exceptional Games</h4>
                            <h1>Play, Improve & <span>Win</span></h1>
                            <p>Gamestorm is the ultimate destination for playing, discussing and creating game.</p>
                            <div className={styles.statisticsContainer}>
                                <div className={styles.box}>
                                    <p>Online</p>
                                    <h2>19,302,927</h2>
                                </div>
                                <div className={styles.box}>
                                    <p className={styles.playing}>Playing Now</p>
                                    <h2>4,831,224</h2>
                                </div>
                            </div>
                            <div className={styles.btnContainer}>
                                <DefaultButton
                                    link={"/games"}
                                    title={"Explore Out Games"}
                                    grayBtn={false}
                                    wide={false}
                                />
                            </div>
                        </div>
                    </div>

                </section>
                {/*TEAM SECTION*/}
                <TeamSection />
                {/*RECENTLY COMPLETED SECTION*/}
                <RecentlyCompletedSection/>
                {/*SLIDER SECTION*/}
                <div className={styles.sectionWrapper}>
                    <SliderSection/>
                </div>
            </main>
            <FooterOne/>
        </>
    );
};
