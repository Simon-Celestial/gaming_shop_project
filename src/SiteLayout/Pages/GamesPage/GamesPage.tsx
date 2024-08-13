import styles from "./GamesPage.module.scss";
import {Header} from "../../Components/Layout/Header/Header.tsx";
import {PageBanner} from "../../Components/Layout/PageBanner/PageBanner.tsx";
import {GamesSection} from "../../Components/Sections/GamesSection/GamesSection.tsx";
import {SliderSection} from "../../Components/Sections/SliderSection/SliderSection.tsx";
import {FooterTwo} from "../../Components/Layout/FooterTwo/FooterTwo.tsx";
import {ContactSection} from "../../Components/Sections/ContactSection/ContactSection.tsx";
import {KeysSection} from "../../Components/Sections/KeysSection/KeysSection.tsx";
import {CommunityTwoSection} from "../../Components/Sections/CommunityTwoSection/CommunityTwoSection.tsx";
import {useTranslation} from "react-i18next";

export const GamesPage = () => {
    const {t} = useTranslation();
    return (
        <>
            <Header/>
            <main className={styles.pageWrapper}>
                <PageBanner
                    smallText={t('gamesPage.smallText')}
                    whiteText={t('gamesPage.whiteText')}
                    greenText={t('gamesPage.greenText')}
                />
                {/*KEYS SECTION*/}
                <KeysSection />
                {/*GAMES SECTION */}
                <GamesSection/>
                {/*COMMUNITY SECTION*/}
                <CommunityTwoSection />
                {/*CONTACT SECTION*/}
                <ContactSection />
                {/*IMAGES SLIDER SECTION*/}
                <SliderSection />
            </main>
            <FooterTwo />
        </>
    );
};
