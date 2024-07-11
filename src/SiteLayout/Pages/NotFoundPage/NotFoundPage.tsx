import styles from "./NotFoundPage.module.scss";

export const NotFoundPage = () => {
    return (
        <div className={styles.pageWrapper}>
            <div className={styles.pageContent}>
                <h1>404</h1>
                <p>Page not found</p>
            </div>
        </div>
    );
};

