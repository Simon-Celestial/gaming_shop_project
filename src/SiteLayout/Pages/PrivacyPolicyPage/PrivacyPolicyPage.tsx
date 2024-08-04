import styles from './PrivacyPolicyPage.module.scss';
import {Header} from "../../Components/Layout/Header/Header.tsx";
import {FooterTwo} from "../../Components/Layout/FooterTwo/FooterTwo.tsx";
import {PageBanner} from "../../Components/Layout/PageBanner/PageBanner.tsx";
import React from "react";
import {SliderSection} from "../../Components/Sections/SliderSection/SliderSection.tsx";

export const PrivacyPolicyPage: React.FC = () => {
    return (
        <>
            <Header/>
            <main className={styles.pageWrapper}>
                <PageBanner whiteText={"Our Privacy"} greenText={"Policy"}
                            smallText={"We're always looking for new ways to provide privacy for our customers."}/>
                <div className={styles.pageContent}>
                    <div className={styles.privacyTitle}>
                        <h2>Our Commitment to Your Privacy</h2>
                        <p>
                            We recognize the importance of protecting your personal information and are committed to
                            safeguarding your privacy.
                            This policy outlines how we collect, use, and protect your data to ensure that you can use
                            our services with confidence.
                            Our goal is to maintain transparency and uphold the highest standards of data protection.
                        </p>
                        <ul>
                            <li>— We never sell your personal data to third parties.</li>
                            <li>— Your information is encrypted and stored securely.</li>
                            <li>— Access to your data is restricted to authorized personnel only.</li>
                            <li>— We regularly review our privacy practices to ensure compliance.</li>
                        </ul>
                        <p>
                            We use your information solely for improving our services and providing you with a
                            personalized experience.
                            Whether you're a new visitor or a long-time customer, your trust is our priority.
                            Our data collection practices are transparent, and you have full control over your
                            information.
                            We continuously strive to offer you the best experience possible while respecting your
                            privacy rights.
                        </p>
                    </div>
                    <div className={styles.privacyTitle}>
                        <h2>How We Use Your Information</h2>
                        <p>
                            Your data is collected only when necessary, and we utilize it to enhance your experience
                            with us.
                            Here's a breakdown of how we handle your information:
                        </p>
                        <ol>
                            <li>
                                <strong>Account Creation and Management</strong>: We use information such as your email
                                address and username to create and manage your account, allowing you to access our
                                services seamlessly.
                            </li>
                            <li>
                                <strong>Customer Support</strong>: We may access your contact details to provide support
                                and answer your inquiries promptly. Your feedback helps us improve our services.
                            </li>
                            <li>
                                <strong>Service Improvement</strong>: Data about your interactions helps us understand
                                how our services are used, enabling us to refine and enhance our offerings to better
                                suit your needs.
                            </li>
                            <li>
                                <strong>Marketing and Communication</strong>: With your consent, we send promotional
                                materials tailored to your interests. You can opt out of marketing communications at any
                                time.
                            </li>
                            <li>
                                <strong>Legal Compliance</strong>: We adhere to legal obligations and ensure your data
                                is handled lawfully. This includes processing information for fraud prevention, safety,
                                and legal requests.
                            </li>
                        </ol>
                        <p>
                            We are dedicated to using your data responsibly, ensuring that all collection and usage
                            comply with applicable data protection laws.
                            Our focus is on enhancing your experience while maintaining the highest level of privacy and
                            security.
                            We take all necessary measures to ensure that your data is protected against unauthorized
                            access and misuse.
                        </p>
                    </div>
                    <div className={styles.privacyTitle}>
                        <h2>Cookies and Tracking Technologies</h2>
                        <p>
                            Our website uses cookies and similar technologies to provide a seamless user experience.
                            Cookies help us understand how you interact with our content and enable us to personalize
                            your visit.
                            Here's what you need to know about our use of cookies:
                        </p>
                        <ul>
                            <li>
                                <strong>Essential Cookies</strong>: These are necessary for the basic functionality of
                                our website, enabling features like logging in, saving preferences, and maintaining
                                session information.
                            </li>
                            <li>
                                <strong>Analytics Cookies</strong>: We use these to analyze how our visitors use our
                                site, enabling us to improve our services by understanding user behavior and trends.
                            </li>
                            <li>
                                <strong>Advertising Cookies</strong>: These cookies help deliver targeted advertisements
                                relevant to your interests, providing a more tailored browsing experience.
                            </li>
                        </ul>
                        <p>
                            By continuing to use our site, you consent to the use of cookies.
                            However, you can manage your cookie preferences at any time through your browser settings.
                            For more information about our cookie practices, please refer to our <a href="#">Cookie
                            Policy</a>.
                            We are committed to transparency and offer you the tools to control your data preferences.
                        </p>
                    </div>
                </div>
                {/*IMAGES SLIDER SECTION*/}
                <SliderSection />
            </main>
            <FooterTwo/>
        </>
    );
};
