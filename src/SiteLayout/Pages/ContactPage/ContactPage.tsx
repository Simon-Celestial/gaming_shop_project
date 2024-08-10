import styles from './ContactPage.module.scss';
import {Header} from "../../Components/Layout/Header/Header.tsx";
import {FooterTwo} from "../../Components/Layout/FooterTwo/FooterTwo.tsx";
import {PageBanner} from "../../Components/Layout/PageBanner/PageBanner.tsx";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from "@mui/icons-material/X";
import {Link} from "react-router-dom";
import {ContactForm} from "../../Components/Reusables/ContactForm/ContactForm.tsx";
import {DefaultButton} from "../../Components/Reusables/DefaultButton/DefaultButton.tsx";
import {PartnersSection} from "../../Components/Sections/PartnersSection/PartnersSection.tsx";
import {SliderSection} from "../../Components/Sections/SliderSection/SliderSection.tsx";
import {useCallback, useEffect, useState} from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import askedQuestionsData from "/public/data/AskedQuestionsData/askedQuestionsData.json";
import {useTranslation} from "react-i18next";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

interface ASKED_QUESTIONS_DATA {
    id: number;
    question: string;
    answer: string;
}


export const ContactPage = () => {
    const [translatedQuestions, setTranslatedQuestions] = useState(askedQuestionsData.en);
    const [selectedAccordion, setSelectedAccordion] = useState<number | null>(null);
    const {i18n} = useTranslation();

    const handleOpenAccordion = useCallback((selectedID: number) => {
        setSelectedAccordion(prev => {
            if (prev === selectedID) {
                return null;
            } else {
                return selectedID;
            }
        });
    }, []);

    useEffect(() => {
        if (i18n.language === "en") {
            setTranslatedQuestions(askedQuestionsData.en);
        } else if (i18n.language === "ru") {
            setTranslatedQuestions(askedQuestionsData.ru);
        } else {
            setTranslatedQuestions(askedQuestionsData.tr);
        }
    }, [i18n.language]);

    return (
        <>
            <Header/>
            <main className={styles.pageWrapper}>
                <PageBanner
                    greenText={"Friendly Team"}
                    whiteText={"Get in touch with our"}
                    smallText={"Our support goes all the way. We love hearing from customers and visitors and are always happy to help."}
                />
                <section className={styles.contactUsSection}>
                    <div className={styles.sectionContent}>
                        <div className={styles.sectionTitle}>
                            <div className={styles.pageHeading}>
                                <h4>Have <span>Questions?</span></h4>
                                <h2>Can’t find what are <span> you Looking for ?</span> Get in Touch</h2>
                                <p>Please fill out the form and let us know about your concerns.We will try our best to
                                    provide optimized solutions.</p>
                            </div>
                        </div>
                        <div className={styles.mainContainer}>
                            <div className={styles.formWrapper}>
                                <h3>Write A Message</h3>
                                <ContactForm/>
                            </div>
                            <div className={styles.infoWrapper}>
                                <h2>Get In Touch</h2>
                                <div className={styles.infoRow}>
                                    <h2><LocalPhoneIcon/> Have any Questions</h2>
                                    <h3>(302) 555-0107 <span>|</span>(704) 555-0127</h3>
                                </div>
                                <div className={styles.infoRow}>
                                    <h2><LocationOnIcon/> Contact Address</h2>
                                    <h3>San Francisco, California, 53 Shore View Avenue</h3>
                                </div>
                                <div className={styles.infoRow}>
                                    <h2><AccessTimeFilledIcon/> Opening Hours</h2>
                                    <h3>Mon-Fri: 9:00 AM - 6:00 PM</h3>
                                    <h3>Sat: 10:00 AM - 4:00 PM</h3>
                                    <h3>Sun: Closed</h3>
                                </div>
                                <div className={styles.socialContainer}>
                                    <Link to={"https://www.facebook.com/"} target={"_blank"}><FacebookIcon/></Link>
                                    <Link to={"https://www.instagram.com/"} target={"_blank"}><InstagramIcon/></Link>
                                    <Link to={"https://www.linkedin.com/"} target={"_blank"}><LinkedInIcon/></Link>
                                    <Link to={"https://x.com/"} target={"_blank"}><XIcon/></Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
                <section className={styles.mapSection}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12613.627419352111!2d-122.50029748258007!3d37.780503942340154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808587a94c98a0a3%3A0x7129428e3402d717!2zNTMgU2hvcmUgVmlldyBBdmUsIFNhbiBGcmFuY2lzY28sIENBIDk0MTIxLCDQodCo0JA!5e0!3m2!1sru!2saz!4v1723249569011!5m2!1sru!2saz"
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </section>
                <section className={styles.faqsSection}>
                    <div className={`${styles.decoration} ${styles.topDecor}`}>
                        <img src="/images/icons/faq-frame.png" alt="Decoration"/>
                    </div>
                    <div className={`${styles.decoration} ${styles.bottomDecor}`}>
                        <img src="/images/icons/faq-frame.png" alt="Decoration"/>
                    </div>
                    <div className={styles.sectionContent}>
                        <div className={styles.sectionTitle}>
                            <div className={styles.pageHeading}>
                                <h4>Answers to Common Questions about <span>Our Company</span></h4>
                                <h2>Frequently Asked Questions About <span> Our Gaming Studio</span></h2>
                                <p>Our gaming company develops games for multiple platforms and is always looking for
                                    talented individuals to join our team. Quality and player satisfaction is our top
                                    priority.</p>
                            </div>
                        </div>
                        <div className={styles.mainContainer}>
                            <div className={styles.accordion}>
                                {translatedQuestions?.map((data: ASKED_QUESTIONS_DATA) => {
                                    return (
                                        <div
                                            key={data?.id}
                                            className={`${styles.questionBox} ${data?.id === selectedAccordion ? styles.accordionOpen : ''}`}
                                            onClick={()=> handleOpenAccordion(data?.id)}
                                        >
                                            <div className={styles.expand}>
                                                {selectedAccordion === data?.id?
                                                    <RemoveIcon
                                                    style={{
                                                        color: data?.id === selectedAccordion ? "#0EF0AD" : ''
                                                    }}
                                                    />
                                                    :
                                                    <AddIcon/>
                                                }
                                            </div>
                                            <h2
                                                style={{
                                                    color: data?.id === selectedAccordion ? "#0EF0AD" : ''
                                                }}

                                            >{data?.question}</h2>
                                            <p>{data?.answer}</p>
                                        </div>
                                    )
                                })}

                            </div>
                            <div className={styles.faq}>
                                <div className={styles.image}>
                                    <img src="/images/icons/faqIcon.png" alt="FAQ image"/>
                                </div>
                                <h2>Check More Information</h2>
                                <p>GameStorm is a full-service gaming studio company specializing in game development,
                                    art, design, and project management</p>
                                <div className={styles.btnWrapper}>
                                    <DefaultButton
                                        link={"/about"}
                                        wide={false}
                                        grayBtn={false}
                                        title={"Learn More"}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
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
