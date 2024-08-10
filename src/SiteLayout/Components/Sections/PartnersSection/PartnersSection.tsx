import styles from "./PartnersSection.module.scss";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import partnersData from "/public/data/PartnersData/partnersData.json";

interface PARTNERS_DATA {
    id: number;
    image: string;
}

export const PartnersSection = () => {
    return (
        <div className={styles.partnersSection}>
            <div className={styles.sectionContent}>
                <div className={styles.sectionTitle}>
                    <div className={`${styles.pageHeading}`}>
                        <h4>Trusted <span>By</span></h4>
                        <h2>We are happy to work with <span> global largest brands</span></h2>
                        <p>We are proud to support industry leaders around the world.</p>
                    </div>
                </div>
                <div className={styles.partnersContainer}>
                    {partnersData?.map((partner: PARTNERS_DATA) => {
                        return (
                            <div
                                key={partner?.id}
                                className={styles.partnerLogo}
                            >
                                <img
                                    src={partner?.image}
                                    alt="Partner Company"/>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>

    );
};
