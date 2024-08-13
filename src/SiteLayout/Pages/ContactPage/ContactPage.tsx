import styles from './ContactPage.module.scss';
import {Header} from "../../Components/Layout/Header/Header.tsx";
import {FooterTwo} from "../../Components/Layout/FooterTwo/FooterTwo.tsx";
import {PageBanner} from "../../Components/Layout/PageBanner/PageBanner.tsx";
import {PartnersSection} from "../../Components/Sections/PartnersSection/PartnersSection.tsx";
import {SliderSection} from "../../Components/Sections/SliderSection/SliderSection.tsx";
import {MapSection} from "../../Components/Sections/MapSection/MapSection.tsx";
import {FaqsSection} from "../../Components/Sections/FaqsSection/FaqsSection.tsx";
import {ContactUsTwoSection} from "../../Components/Sections/ContactUsTwoSection/ContactUsTwoSection.tsx";
import {useTranslation} from "react-i18next";



export const ContactPage = () => {
     const {t} = useTranslation();
     return (
        <>
            <Header/>
            <main className={styles.pageWrapper}>
                <PageBanner
                    greenText={t('contactPage.greenText')}
                    whiteText={t('contactPage.whiteText')}
                    smallText={t('contactPage.smallText')}
                />
                {/*CONTACT US TWO SECTION*/}
                <ContactUsTwoSection />
                {/*MAP SECTION*/}
                <MapSection />
                {/*FAQS SECTION*/}
                <FaqsSection />
                {/*PARTNERS SECTION*/}
                <PartnersSection/>
                {/*SLIDER SECTION*/}
                <div className={styles.sliderSectionWrapper}>
                    <SliderSection/>
                </div>
            </main>
            <FooterTwo/>
        </>
    );
};
