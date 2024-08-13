import styles from './MapSection.module.scss';

export const MapSection = () => {
    return (
        <section className={styles.mapSection}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12613.627419352111!2d-122.50029748258007!3d37.780503942340154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808587a94c98a0a3%3A0x7129428e3402d717!2zNTMgU2hvcmUgVmlldyBBdmUsIFNhbiBGcmFuY2lzY28sIENBIDk0MTIxLCDQodCo0JA!5e0!3m2!1sru!2saz!4v1723249569011!5m2!1sru!2saz"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </section>
    );
};
