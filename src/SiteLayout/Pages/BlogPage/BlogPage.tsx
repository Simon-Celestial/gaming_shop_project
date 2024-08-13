import styles from './BlogPage.module.scss';
import {FooterOne} from "../../Components/Layout/FooterOne/FooterOne.tsx";
import {Header} from "../../Components/Layout/Header/Header.tsx";
import {PageBanner} from "../../Components/Layout/PageBanner/PageBanner.tsx";
import {
    RecentlyCompletedSection
} from "../../Components/Sections/RecentlyCompletedSection/RecentlyCompletedSection.tsx";
import {SliderSection} from "../../Components/Sections/SliderSection/SliderSection.tsx";
import {TeamSection} from "../../Components/Sections/TeamSection/TeamSection.tsx";
import {OurServicesSection} from "../../Components/Sections/OurServicesSection/OurServicesSection.tsx";
import {BannerTwoSection} from "../../Components/Sections/BannerTwoSection/BannerTwoSection.tsx";


export const BlogPage = () => {

    return (
        <>
            <Header/>
            <main className={styles.pageWrapper}>
                <PageBanner
                    greenText={"Blog"}
                    whiteText={""}
                    smallText={"Professional Game design and Development services since 1995"}
                />
                {/*OUR SERVICES SECTION*/}
                <OurServicesSection />
                {/*BANNER TWO SECTION*/}
                <BannerTwoSection />
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
