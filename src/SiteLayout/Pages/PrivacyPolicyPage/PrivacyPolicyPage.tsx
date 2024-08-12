import styles from './PrivacyPolicyPage.module.scss';
import { Header } from "../../Components/Layout/Header/Header.tsx";
import { FooterTwo } from "../../Components/Layout/FooterTwo/FooterTwo.tsx";
import { PageBanner } from "../../Components/Layout/PageBanner/PageBanner.tsx";
import React from "react";
import { SliderSection } from "../../Components/Sections/SliderSection/SliderSection.tsx";
import { useTranslation } from 'react-i18next';

export const PrivacyPolicyPage: React.FC = () => {
    const { t } = useTranslation();

    return (
        <>
            <Header />
            <main className={styles.pageWrapper}>
                <PageBanner
                    whiteText={t('privacyPolicyPage.whiteText')}
                    greenText={t('privacyPolicyPage.greenText')}
                    smallText={t('privacyPolicyPage.smallText')}
                />
                <div className={styles.pageContent}>
                    <div className={styles.privacyTitle}>
                        <h2>{t('privacyPolicyPage.commitmentTitle')}</h2>
                        <p>{t('privacyPolicyPage.commitmentText')}</p>
                        <ul>
                            <li>— {t('privacyPolicyPage.commitmentItem1')}</li>
                            <li>— {t('privacyPolicyPage.commitmentItem2')}</li>
                            <li>— {t('privacyPolicyPage.commitmentItem3')}</li>
                            <li>— {t('privacyPolicyPage.commitmentItem4')}</li>
                        </ul>
                        <p>{t('privacyPolicyPage.commitmentAdditionalText')}</p>
                    </div>
                    <div className={styles.privacyTitle}>
                        <h2>{t('privacyPolicyPage.useInformationTitle')}</h2>
                        <p>{t('privacyPolicyPage.useInformationText')}</p>
                        <ol>
                            <li>
                                <strong>{t('privacyPolicyPage.useInformationItem1Title')}</strong>: {t('privacyPolicyPage.useInformationItem1Text')}
                            </li>
                            <li>
                                <strong>{t('privacyPolicyPage.useInformationItem2Title')}</strong>: {t('privacyPolicyPage.useInformationItem2Text')}
                            </li>
                            <li>
                                <strong>{t('privacyPolicyPage.useInformationItem3Title')}</strong>: {t('privacyPolicyPage.useInformationItem3Text')}
                            </li>
                            <li>
                                <strong>{t('privacyPolicyPage.useInformationItem4Title')}</strong>: {t('privacyPolicyPage.useInformationItem4Text')}
                            </li>
                            <li>
                                <strong>{t('privacyPolicyPage.useInformationItem5Title')}</strong>: {t('privacyPolicyPage.useInformationItem5Text')}
                            </li>
                        </ol>
                        <p>{t('privacyPolicyPage.useInformationAdditionalText')}</p>
                    </div>
                    <div className={styles.privacyTitle}>
                        <h2>{t('privacyPolicyPage.cookiesTitle')}</h2>
                        <p>{t('privacyPolicyPage.cookiesText')}</p>
                        <ul>
                            <li>
                                <strong>{t('privacyPolicyPage.cookiesItem1Title')}</strong>: {t('privacyPolicyPage.cookiesItem1Text')}
                            </li>
                            <li>
                                <strong>{t('privacyPolicyPage.cookiesItem2Title')}</strong>: {t('privacyPolicyPage.cookiesItem2Text')}
                            </li>
                            <li>
                                <strong>{t('privacyPolicyPage.cookiesItem3Title')}</strong>: {t('privacyPolicyPage.cookiesItem3Text')}
                            </li>
                        </ul>
                        <p>{t('privacyPolicyPage.cookiesConsent')}</p>
                    </div>
                </div>
                <SliderSection />
            </main>
            <FooterTwo />
        </>
    );
};
