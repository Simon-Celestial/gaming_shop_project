import styles from './AboutPage.module.scss';
import {Header} from "../../Components/Layout/Header/Header.tsx";
import {FooterTwo} from "../../Components/Layout/FooterTwo/FooterTwo.tsx";
import {PageBanner} from "../../Components/Layout/PageBanner/PageBanner.tsx";
import {AboutSection} from "../../Components/Sections/AboutSection/AboutSection.tsx";
import {TeamSection} from "../../Components/Sections/TeamSection/TeamSection.tsx";
import {CounterSection} from "../../Components/Sections/CounterSection/CounterSection.tsx";
import {useTranslation} from "react-i18next";
import {ContactSection} from "../../Components/Sections/ContactSection/ContactSection.tsx";
import {JobsSection} from "../../Components/Sections/JobsSection/JobsSection.tsx";
import {TestimonialsSection} from "../../Components/Sections/TestimonialsSection/TestimonialsSection.tsx";
import {SliderSection} from "../../Components/Sections/SliderSection/SliderSection.tsx";
import {PartnersSection} from "../../Components/Sections/PartnersSection/PartnersSection.tsx";
import {GamingCharacterSection} from "../../Components/Sections/GamingCharacterSection/GamingCharacterSection.tsx";
import {OurFocusSection} from "../../Components/Sections/OurFocusSection/OurFocusSection.tsx";
import {OurStorySection} from "../../Components/Sections/OurStorySection/OurStorySection.tsx";

export const AboutPage = () => {
    const {t} = useTranslation();

    return (
        <>
            {/*HEADER*/}
            <Header/>
            <main className={styles.pageWrapper}>
                {/*PAGE BANNER*/}
                <PageBanner
                    whiteText={t('aboutPage.whiteText')}
                    greenText={t('aboutPage.greenText')}
                    smallText={t('aboutPage.smallText')}
                />
                {/*ABOUT SECTION*/}
                <AboutSection/>
                {/*GAMING CHARACTER SECTION*/}
                <GamingCharacterSection />
                {/*TEAM SECTION*/}
                <TeamSection/>
                {/*COUNTER SECTION*/}
                <CounterSection/>
                {/*ADDED CUSTOM SPACE BETWEEN SECTIONS*/}
                <span className={styles.spaceForSection}></span>
                {/*OUR FOCUS SECTION*/}
                <OurFocusSection />
                {/*OUR STORY SECTION */}
                <OurStorySection />
                {/*CONTACT SECTION*/}
                <ContactSection/>
                {/*JOBS SECTION*/}
                <div className={styles.jobsSectionWrapper}>
                    <JobsSection/>
                </div>
                {/*TESTIMONIALS SECTION*/}
                <TestimonialsSection/>
                {/*PARTNERS SECTION*/}
                <PartnersSection />
                {/*SLIDER SECTION*/}
                <div className={styles.sliderSectionWrapper}>
                    <SliderSection/>
                </div>
            </main>
            {/*FOOTER*/}
            <FooterTwo/>
        </>
    );
};
