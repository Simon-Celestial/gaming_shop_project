import styles from './ContactPage.module.scss';
import {Header} from "../../Components/Layout/Header/Header.tsx";
import {FooterTwo} from "../../Components/Layout/FooterTwo/FooterTwo.tsx";
import {PageBanner} from "../../Components/Layout/PageBanner/PageBanner.tsx";
import {PartnersSection} from "../../Components/Sections/PartnersSection/PartnersSection.tsx";
import {SliderSection} from "../../Components/Sections/SliderSection/SliderSection.tsx";
import {MapSection} from "../../Components/Sections/MapSection/MapSection.tsx";
import {FaqsSection} from "../../Components/Sections/FaqsSection/FaqsSection.tsx";
import {ContactUsTwoSection} from "../../Components/Sections/ContactUsTwoSection/ContactUsTwoSection.tsx";



export const ContactPage = () => {

    return (
        <>
            <Header/>
            <main className={styles.pageWrapper}>
                <PageBanner
                    greenText={"Friendly Team"}
                    whiteText={"Get in touch with our"}
                    smallText={"Our support goes all the way. We love hearing from customers and visitors and are always happy to help."}
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
