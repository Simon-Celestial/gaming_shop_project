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

export const ServicesPage = () => {
    return (
        <>
            <Header/>
            <main className={styles.pageWrapper}>
                <PageBanner
                    whiteText={"Our"}
                    greenText={"Services"}
                    smallText={"Our systematic approach to art development ensures high delivery standards for games and game-based solutions, from look development to engine integration."}
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
