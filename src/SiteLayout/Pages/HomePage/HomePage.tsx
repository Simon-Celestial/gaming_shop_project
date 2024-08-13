import {useContext} from "react";
import styles from "./HomePage.module.scss";
import {Header} from "../../Components/Layout/Header/Header.tsx";
import {FooterOne} from "../../Components/Layout/FooterOne/FooterOne.tsx";
import {DataContext} from "../../../Context/DataContext/DataContext.tsx";
import {Loader} from "../../Components/Reusables/Loader/Loader.tsx";
import {GamesSection} from "../../Components/Sections/GamesSection/GamesSection.tsx";
import {TestimonialsSection} from "../../Components/Sections/TestimonialsSection/TestimonialsSection.tsx";
import {AboutSection} from "../../Components/Sections/AboutSection/AboutSection.tsx";
import {TeamSection} from "../../Components/Sections/TeamSection/TeamSection.tsx";
import {CounterSection} from "../../Components/Sections/CounterSection/CounterSection.tsx";
import {JobsSection} from "../../Components/Sections/JobsSection/JobsSection.tsx";
import {BannerSection} from "../../Components/Sections/BannerSection/BannerSection.tsx";
import {ProductsSection} from "../../Components/Sections/ProductsSection/ProductsSection.tsx";
import {LifeSection} from "../../Components/Sections/LifeSection/LifeSection.tsx";
import {CommunitySection} from "../../Components/Sections/CommunitySection/CommunitySection.tsx";
import {ContactUsSection} from "../../Components/Sections/ContactUsSection/ContactUsSection.tsx";


export const HomePage = () => {
    const {
        productsLoading
    } = useContext(DataContext);

    return (
        <>
            {
                productsLoading &&
                <Loader/>
            }
            {/*HEADER*/}
            <Header/>
            <main className={styles.homeWrapper}>
                {/*BANNER SECTION*/}
                <BannerSection/>
                {/*ABOUT SECTION */}
                <AboutSection/>
                {/*GAMES SECTION*/}
                <GamesSection/>
                {/*TEAM SECTION*/}
                <TeamSection/>
                {/*COUNTER SECTION*/}
                <CounterSection/>
                {/*PRODUCTS SECTION*/}
                <ProductsSection/>
                {/*LIFE SECTION*/}
                <LifeSection/>
                {/*JOBS SECTION*/}
                <JobsSection/>
                {/*TESTIMONIALS SECTION*/}
                <TestimonialsSection/>
                {/*COMMUNITY SECTION*/}
                <CommunitySection />
                {/*CONTACT US SECTION*/}
                <ContactUsSection/>
            </main>
            {/*FOOTER*/}
            <FooterOne/>
        </>
    );
};
