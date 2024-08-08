import styles from './AboutPage.module.scss';
import {Header} from "../../Components/Layout/Header/Header.tsx";
import {FooterTwo} from "../../Components/Layout/FooterTwo/FooterTwo.tsx";
import {PageBanner} from "../../Components/Layout/PageBanner/PageBanner.tsx";
import {AboutSection} from "../../Components/Sections/AboutSection/AboutSection.tsx";
import {TeamSection} from "../../Components/Sections/TeamSection/TeamSection.tsx";
import {CounterSection} from "../../Components/Sections/CounterSection/CounterSection.tsx";
import {VideoContainer} from "../../Components/Reusables/VideoContainer/VideoContainer.tsx";
import React from "react";

export const AboutPage = () => {
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
                        <h1>I AM SWIPER</h1>

                    </div>
                </section>
                {/*TEAM SECTION*/}
                <TeamSection />
                {/*COUNTER SECTION*/}
                <CounterSection />
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
            </main>
            <FooterTwo/>
        </>
    );
};
