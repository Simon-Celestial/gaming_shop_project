import {Header} from "../../Components/Layout/Header/Header.tsx";
import {FooterOne} from "../../Components/Layout/FooterOne/FooterOne.tsx";
import styles from "./ServicesPage.module.scss";
import {PageBanner} from "../../Components/Layout/PageBanner/PageBanner.tsx";
import {TestimonialsSection} from "../../Components/Sections/TestimonialsSection/TestimonialsSection.tsx";
import {SliderSection} from "../../Components/Sections/SliderSection/SliderSection.tsx";
import {
    RecentlyCompletedSection
} from "../../Components/Sections/RecentlyCompletedSection/RecentlyCompletedSection.tsx";
import {ServicesSection} from "../../Components/Sections/ServicesSection/ServicesSection.tsx";
import {FocusSection} from "../../Components/Sections/FocusSection/FocusSection.tsx";
import {HowItWorksSection} from "../../Components/Sections/HowItWorksSection/HowItWorksSection.tsx";
import {ContactUsThreeSection} from "../../Components/Sections/ContactUsThreeSection/ContactUsThreeSection.tsx";
import {GameFeaturesSection} from "../../Components/Sections/GameFeaturesSection/GameFeaturesSection.tsx";
import {useTranslation} from "react-i18next";

export const ServicesPage = () => {
    const {t} = useTranslation();
    return (
        <>
            <Header/>
            <main className={styles.pageWrapper}>
                <PageBanner
                    whiteText={t('servicesPage.our')}
                    greenText={t('servicesPage.services')}
                    smallText={t('servicesPage.smallText')}
                />
                {/*SERVICES SECTION*/}
                <ServicesSection />
                {/*FOCUS SECTION*/}
                <FocusSection />
                {/*HOW IT WORKS SECTION*/}
                <HowItWorksSection />
                {/*GAME FEATURES SECTION*/}
                <GameFeaturesSection />
                {/*RECENTLY COMPLETED SECTION*/}
                <RecentlyCompletedSection />
                {/*TESTIMONIALS SECTION*/}
                <TestimonialsSection/>
                {/*CONTACT US THREE SECTION*/}
                <ContactUsThreeSection />
                {/*SLIDER SECTION*/}
                <SliderSection/>
            </main>
            <FooterOne/>
        </>
    );
};
